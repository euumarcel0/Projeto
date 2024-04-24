# Importações necessárias para o aplicativo Flask
from flask import Flask, Response, jsonify, redirect, render_template, request, url_for
from flask_swagger import swagger
from flask_swagger_ui import get_swaggerui_blueprint
from flasgger import Swagger, swag_from
from flask_cors import CORS
import os, json
import subprocess


# Inicialização do aplicativo Flask
app = Flask(__name__)

# Configuração do CORS para permitir solicitações de todas as origens para determinados endpoints
CORS(app, resources={
    r"/azure/*": {"origins": "*"},
    r"/aws/*": {"origins": "*"}
})

@app.route('/swagger.json')
def swagger_json():
    swag = swagger(app)
    swag['info']['version'] = "1.0"
    swag['info']['title'] = "API Documentation"
    return jsonify(swag)


# Configuração da documentação Swagger UI
SWAGGER_URL = '/api/docs'  # URL para acessar a documentação Swagger
API_URL = '/static/swagger.json'  # URL onde sua API está disponível, que gera o JSON Swagger

swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "API Documentation"
    }
)

# Registra a blueprint para a documentação Swagger
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

# Atualizar Nomes
def atualizar_nomes_tf(dados_variavel, diretorio):
    arquivo_variables_tf = os.path.join(diretorio, "variables.tf")
    with open(arquivo_variables_tf, 'r') as file:
        lines = file.readlines()

    variavel_existente = False
    for i, line in enumerate(lines):
        if line.strip().startswith(f'variable "{dados_variavel["nome"]}"'):
            variavel_existente = True
            # Encontrou a definição da variável, vamos verificar se o código existente está presente
            start_index = i
            end_index = None
            for j in range(i, len(lines)):
                if lines[j].strip() == '}':
                    end_index = j
                    break

            if end_index is not None:
                # O código existente está presente, vamos atualizar o valor padrão se necessário
                for k in range(i, end_index):
                    if lines[k].strip().startswith('default'):
                        lines[k] = f'  default     = "{dados_variavel["valor"]}"\n'
                        break
                else:
                    lines.insert(end_index, f'  default     = "{dados_variavel["valor"]}"\n')
            else:
                # Não foi encontrado o final da definição da variável, substituiremos toda a definição
                lines[i] = f'variable "{dados_variavel["nome"]}" {{\n'
                lines[i] += f'  description = "Descricao da variavel {dados_variavel["nome"]}"\n'
                lines[i] += f'  default     = "{dados_variavel["valor"]}"\n'
                lines[i] += '}\n'
            break

    if not variavel_existente:
        # Se a variável não existir, adicionamos uma nova entrada no final do arquivo
        nova_variavel = f'variable "{dados_variavel["nome"]}" {{\n'
        nova_variavel += f'  description = "Descricao da variavel {dados_variavel["nome"]}"\n'
        nova_variavel += f'  default     = "{dados_variavel["valor"]}"\n'
        nova_variavel += '}\n'
        # Adicionamos a nova variável apenas se não existir no arquivo
        lines.append(nova_variavel)

    with open(arquivo_variables_tf, 'w') as file:
        file.writelines(lines)

# Atualizar endereços
def atualizar_endereco_tf(dados_variavel, diretorio):
    arquivo_variables_tf = os.path.join(diretorio, "variables.tf")
    with open(arquivo_variables_tf, 'r') as file:
        lines = file.readlines()

    variavel_existente = False
    for i, line in enumerate(lines):
        if line.strip().startswith(f'variable "{dados_variavel["nome"]}"'):
            variavel_existente = True
            # Encontrou a definição da variável, vamos verificar se o código existente está presente
            start_index = i
            end_index = None
            for j in range(i, len(lines)):
                if lines[j].strip() == '}':
                    end_index = j
                    break

            if end_index is not None:
                # O código existente está presente, vamos atualizar o valor padrão se necessário
                for k in range(i, end_index):
                    if lines[k].strip().startswith('default'):
                        lines[k] = f'  default     = {dados_variavel["valor"]}\n'
                        break
                else:
                    lines.insert(end_index, f'  default     = "{dados_variavel["valor"]}"\n')
            else:
                # Não foi encontrado o final da definição da variável, substituiremos toda a definição
                lines[i] = f'variable "{dados_variavel["nome"]}" {{\n'
                lines[i] += f'  description = "Descricao da variavel {dados_variavel["nome"]}"\n'
                lines[i] += f'  default     = "{dados_variavel["valor"]}"\n'
                lines[i] += '}\n'
            break

    if not variavel_existente:
        # Se a variável não existir, adicionamos uma nova entrada no final do arquivo
        nova_variavel = f'variable "{dados_variavel["nome"]}" {{\n'
        nova_variavel += f'  description = "Descricao da variavel {dados_variavel["nome"]}"\n'
        nova_variavel += f'  default     = "{dados_variavel["valor"]}"\n'
        nova_variavel += '}\n'
        # Adicionamos a nova variável apenas se não existir no arquivo
        lines.append(nova_variavel)

    with open(arquivo_variables_tf, 'w') as file:
        file.writelines(lines)
# ----------------------------------------------------AZURE-----------------------------------------------------------#

# Endpoint para criar um Grupo de Recursos na Azure
@app.route('/azure/criar-grupo-recursos', methods=['POST'])
def criar_grupo_recursos_azure():
    dados = request.json
    nome_grupo_recursos = dados['nome']
    regiao_grupo_recursos = dados['regiao']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_grupo_recursos", "valor": nome_grupo_recursos }, terraform_dir)
    atualizar_nomes_tf({"nome": "regiao", "valor": regiao_grupo_recursos}, terraform_dir)  
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_resource_group.Grupo_de_recursos'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Grupo de Recursos criado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Grupo de Recursos: {e}"}), 500

# Endpoint para criar uma Conta de Armazenamento na Azure
@app.route('/azure/criar-conta-armazenamento', methods=['POST'])
def criar_conta_armazenamento_azure():
    dados = request.json
    nome_conta_armazenamento = dados['nome']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_conta_armazenamento", "valor": nome_conta_armazenamento}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_storage_account.Conta_de_armazenamento'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Conta de Armazenamento criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Conta de Armazenamento: {e}"}), 500

# Endpoint para criar uma VNET na Azure
@app.route('/azure/criar-vnet', methods=['POST'])
def criar_vnet_azure():
    dados = request.json
    nome_vnet = dados['nome']
    endereco_usuario = dados['endereco']
    endereco_vnet = "[" + "\"" + endereco_usuario + "\"" + "]"   

    terraform_dir = './azure/'
    
    # Atualizar as variáveis no arquivo variables.tf
    atualizar_nomes_tf({"nome": "nome_vnet", "valor": nome_vnet}, terraform_dir)
    atualizar_endereco_tf({"nome": "endereco_vnet", "valor": endereco_vnet}, terraform_dir)
    
    try:
        # Executar o Terraform
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_virtual_network.VNET'], cwd=terraform_dir, check=True)
        return jsonify({"message": "VNET criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar VNET: {e}"}), 500

# Endpoint para criar uma Subrede Pública na Azure
@app.route('/azure/criar-subrede-publica', methods=['POST'])
def criar_subrede_publica_azure():
    dados = request.json
    nome_subrede_publica = dados['nome']
    endereco_subrede_publica = dados['endereco']
    endereco_subpub = "[" + "\"" + endereco_subrede_publica + "\"" + "]"  
    
    terraform_dir = './azure/'
    
    atualizar_nomes_tf({"nome": "nome_subrede_publica", "valor": nome_subrede_publica}, terraform_dir)
    atualizar_endereco_tf({"nome": "endereco_subrede_publica", "valor": endereco_subpub}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_subnet.Subrede_Publica'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Subrede Pública criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Subrede Pública: {e}"}), 500

# Endpoint para criar uma Subrede Privada na Azure
@app.route('/azure/criar-subrede-privada', methods=['POST'])
def criar_subrede_privada_azure():
    dados = request.json
    nome_subrede_privada = dados['nome']
    endereco_subrede_privada = dados['endereco']
    endereco_subpri = "[" + "\"" + endereco_subrede_privada + "\"" + "]" 
    
    terraform_dir = './azure/'
    
    atualizar_nomes_tf({"nome": "nome_subrede_privada", "valor": nome_subrede_privada}, terraform_dir)
    atualizar_endereco_tf({"nome": "endereco_subrede_privada", "valor": endereco_subpri}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_subnet.Subrede_Privada'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Subrede Privada criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Subrede Privada: {e}"}), 500

# Endpoint para criar um Grupo de Segurança Linux na Azure
@app.route('/azure/criar-grupo-seguranca-linux', methods=['POST'])
def criar_grupo_seguranca_linux_azure():
    dados = request.json
    nome_grupo_seguranca_linux = dados['nome']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_grupo_seguranca_linux", "valor": nome_grupo_seguranca_linux}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_network_security_group.Grupo_de_Seguranca_Linux'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Grupo de Segurança Linux criado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Grupo de Segurança: {e}"}), 500

# Endpoint para criar um Grupo de Segurança Windows na Azure
@app.route('/azure/criar-grupo-seguranca-windows', methods=['POST'])
def criar_grupo_seguranca_windows_azure():
    dados = request.json
    nome_grupo_seguranca_windows = dados['nome']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_grupo_seguranca_windows", "valor": nome_grupo_seguranca_windows}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_network_security_group.Grupo_de_Seguranca_Windows'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Grupo de Segurança Windows criado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Grupo de Segurança: {e}"}), 500

# Endpoint para criar uma Interface de IP Público Linux na Azure
@app.route('/azure/criar-interface-ip-linux', methods=['POST'])
def criar_interface_ip_linux_azure():
    dados = request.json
    nome_interface_ip_linux = dados['nome']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_interface_ip_linux", "valor": nome_interface_ip_linux}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_public_ip.public_ip_linux', '-target=azurerm_network_interface.Interface_de_rede_Linux'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Interface de IP Público Linux criada e associada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Interface de IP Público Linux: {e}"}), 500

# Endpoint para criar uma Interface de IP Público Windows na Azure
@app.route('/azure/criar-interface-ip-windows', methods=['POST'])
def criar_interface_ip_windows_azure():
    dados = request.json
    nome_interface_ip_windows = dados['nome']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_interface_ip_windows", "valor": nome_interface_ip_windows}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_public_ip.public_ip_windows', '-target=azurerm_network_interface.Interface_de_rede_Windows'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Interface de IP Público Windows criada e associada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Interface de IP Público Windows: {e}"}), 500

# Endpoint para criar uma Máquina Virtual Linux na Azure
@app.route('/azure/criar-maquina-virtual-linux', methods=['POST'])
def criar_maquina_virtual_linux_azure():
    dados = request.json
    nome_maquina_virtual_linux = dados['nome']
    nome_usuario_linux = dados ['usuario']
    senha_usuario_linux = dados['senha']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_maquina_virtual_linux", "valor": nome_maquina_virtual_linux}, terraform_dir)
    atualizar_nomes_tf({"nome": "nome_usuario_linux", "valor": nome_usuario_linux}, terraform_dir)
    atualizar_nomes_tf({"nome": "senha_usuario_linux", "valor": senha_usuario_linux}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_linux_virtual_machine.linux'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Máquina Virtual Linux criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Máquina Virtual Linux: {e}"}), 500

# Endpoint para criar uma Máquina Virtual Windows na Azure
@app.route('/azure/criar-maquina-virtual-windows', methods=['POST'])
def criar_maquina_virtual_windows_azure():
    dados = request.json
    nome_maquina_virtual_windows = dados['nome']
    nome_usuario_windows = dados ['usuario']
    senha_usuario_windows = dados['senha']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_maquina_virtual_windows", "valor": nome_maquina_virtual_windows}, terraform_dir)
    atualizar_nomes_tf({"nome": "nome_usuario_windows", "valor": nome_usuario_windows}, terraform_dir)
    atualizar_nomes_tf({"nome": "senha_usuario_windows", "valor": senha_usuario_windows}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=azurerm_windows_virtual_machine.windows'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Máquina Virtual Windows criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Máquina Virtual Windows: {e}"}), 500

# Endpoint para criar um Load Balancer na Azure
@app.route('/azure/criar-load-balancer', methods=['POST'])
def criar_load_balancer_azure():
    dados = request.json
    nome_load_balancer = dados['nome']
    terraform_dir = './azure/'
    atualizar_nomes_tf({"nome": "nome_load_balancer", "valor": nome_load_balancer}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', 
                        '-target=azurerm_public_ip.ip_publico_lb',
                        '-target=azurerm_lb.loadb',
                        '-target=azurerm_network_security_group.lbsg',
                        '-target=azurerm_network_security_rule.regras_lbsg',
                        '-target=azurerm_subnet_network_security_group_association.associar_gps',
                        '-target=azurerm_lb_backend_address_pool.pool_back_end',
                        '-target=azurerm_lb_probe.lb_probe',
                        '-target=azurerm_lb_rule.lb_regas',
                        '-target=azurerm_public_ip.vm_public_ip',
                        '-target=azurerm_linux_virtual_machine.linuxlb',
                        '-target=azurerm_network_interface.vm_network_interface',
                        '-target=azurerm_network_interface_backend_address_pool_association.pool_association'
                        ], cwd=terraform_dir, check=True)
        return jsonify({"message": "Load Balancer criado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Load Balancer: {e}"}), 500

# Endpoint para destruir recursos na Azure
@app.route('/azure/destruir-recursos', methods=['POST'])
def destruir_recursos_azure():
    terraform_dir = './azure/'
    try:
        subprocess.run(['terraform', 'destroy', '-auto-approve'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Recursos na Azure destruídos com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao destruir recursos na Azure: {e}"}), 500

# ----------------------------------------------------AWS-----------------------------------------------------------#

@app.route('/aws/VPC', methods=['POST'])
def criar_vpc():
    dados = request.json
    nome_vnet = dados['nome']
    endereco_usuario = dados['endereco']
    endereco_vnet = "\"" + endereco_usuario + "\""
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_vpc", "valor": nome_vnet}, terraform_dir)
    atualizar_endereco_tf({"nome": "endereco_vpc", "valor": endereco_vnet}, terraform_dir)
    
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_vpc.vpc'], cwd=terraform_dir, check=True)
        return jsonify({"message": "VPC criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar VPC: {e}"}), 500
    
# Endpoint para criar uma Subrede Privada na AWS
@app.route('/aws/subrede-privada', methods=['POST'])
def criar_subrede_privada_aws():
    dados = request.json
    nome_subrede_privada = dados['nome']
    endereco_subrede_privada = dados['endereco']
    endereco_subpri = "\"" + endereco_subrede_privada + "\""
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_subrede_privada_vpc", "valor": nome_subrede_privada}, terraform_dir)
    atualizar_endereco_tf({"nome": "endereco_subrede_privada_vpc", "valor": endereco_subpri}, terraform_dir)
    
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_subnet.Subrede_Privada'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Subrede Privada criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Subrede Privada: {e}"}), 500

# Função para criar Subrede Pública na AWS
@app.route('/aws/subrede-publica', methods=['POST'])
def criar_subrede_publica_aws():
    dados = request.json
    nome_subrede_publica = dados['nome']
    endereco_subrede_publica = dados['endereco']
    endereco_subpub = "\"" + endereco_subrede_publica + "\""
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_subrede_publica_aws", "valor": nome_subrede_publica}, terraform_dir)
    atualizar_endereco_tf({"nome": "endereco_subrede_publica_aws", "valor": endereco_subpub}, terraform_dir)
    
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_subnet.Subrede_Publica'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Subrede Pública criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Subrede Pública: {e}"}), 500

# Função para criar Gateway de Internet na AWS
@app.route('/aws/gateway', methods=['POST'])
def criar_gateway_internet_aws():
    dados = request.json
    nome_gateway = dados['nome']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_gateway", "valor": nome_gateway}, terraform_dir)
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_internet_gateway.igw'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Gateway de Internet criado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Gateway de Internet: {e}"}), 500

# Função para criar Tabela de Rotas na AWS
@app.route('/aws/tabela-de-rotas', methods=['POST'])
def criar_tabela_rotas_aws():
    dados = request.json
    nome_tabela_rotas = dados['nome']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_tabela_rotas", "valor": nome_tabela_rotas}, terraform_dir)

    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_route_table.public', '-target=aws_route_table_association.public'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Tabela de Rotas criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Tabela de Rotas: {e}"}), 500

# Função para criar Grupo de Segurança Linux na AWS
@app.route('/aws/grupo-linux', methods=['POST'])
def criar_grupo_seguranca_linux_aws():
    dados = request.json
    nome_grupo_seguranca_linux = dados['nome']
    descricao = dados['descrição']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "descriptions_sg_linux", "valor": descricao}, terraform_dir)
    atualizar_nomes_tf({"nome": "nome_grupo_seguranca_linux_aws", "valor": nome_grupo_seguranca_linux}, terraform_dir)

    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_security_group.Grupo_de_Seguranca_LInux'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Grupo de Segurança criado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Grupo de Segurança: {e}"}), 500

# Função para criar Grupo de Segurança Windows na AWS
@app.route('/aws/grupo-windows', methods=['POST'])
def criar_grupo_seguranca_windows_aws():
    dados = request.json
    nome_grupo_seguranca_windows = dados['nome']
    descricao = dados['descrição']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "descriptions_sg_windows", "valor": descricao}, terraform_dir)
    atualizar_nomes_tf({"nome": "nome_grupo_seguranca_windows_aws", "valor": nome_grupo_seguranca_windows}, terraform_dir)

    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_security_group.Grupo_de_Seguranca_Windows'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Grupo de Segurança criado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Grupo de Segurança: {e}"}), 500

# Função para criar instância EC2 Linux na AWS
@app.route('/aws/maquinas-linux', methods=['POST'])
def criar_instancia_ec2_linux_aws():
    dados = request.json
    nome_maquina_virtual_windows = dados['nome']
    nome_usuario_windows = dados ['usuario']
    senha_usuario_winodws = dados['senha']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_maquina_virtual_windows_aws", "valor": nome_maquina_virtual_windows}, terraform_dir)
    atualizar_nomes_tf({"nome": "nome_usuario_windows_aws", "valor": nome_usuario_windows}, terraform_dir)
    atualizar_nomes_tf({"nome": "senha_usuario_windows_aws", "valor": senha_usuario_winodws}, terraform_dir)
    
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_instance.windows'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Instância EC2 Linux criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Instância EC2 Linux: {e}"}), 500

# Função para criar instância EC2 Windows na AWS
@app.route('/aws/maquina-windows', methods=['POST'])
def criar_instancia_ec2_windows_aws():
    dados = request.json
    nome_maquina_virtual_linux = dados['nome']
    nome_usuario_linux = dados ['usuario']
    senha_usuario_linux = dados['senha']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_maquina_virtual_linux_aws", "valor": nome_maquina_virtual_linux}, terraform_dir)
    atualizar_nomes_tf({"nome": "nome_usuario_linux_aws", "valor": nome_usuario_linux}, terraform_dir)
    atualizar_nomes_tf({"nome": "senha_usuario_linux_aws", "valor": senha_usuario_linux}, terraform_dir)
    
    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', '-target=aws_instance.linux'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Instância EC2 Windows criada com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao criar Instância EC2 Windows: {e}"}), 500

# Criar Load Balancer AWS
@app.route('/aws/load-balancer', methods=['POST'])
def criar_load_balancer_aws():
    dados = request.json
    nome_load_balancer = dados['nome']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "nome_load_balancer_aws", "valor": nome_load_balancer}, terraform_dir)

    try:
        subprocess.run(['terraform', 'apply', '-auto-approve', 
                        '-target=aws_lb.loadb',
                        '-target=aws_internet_gateway.igw',
                        '-target=aws_route_table_association.public',
                        '-target=aws_security_group.lb_sg',
                        '-target=aws_lb_target_group.grupo_de_destino',
                        '-target=aws_lb_listener.lb_listener',
                        '-target=aws_instance.Linuxlb',
                        '-target=aws_lb_target_group_attachment.grupo_target'
                        ], cwd=terraform_dir, check=True)
        print("LoadBalancer criado com sucesso!")
    except subprocess.CalledProcessError as e:
        print(f"Erro ao criar Load Balancer: {e}")

# Endpoint para destruir recursos na AWS
@app.route('/aws/destruir-recursos', methods=['POST'])
def destruir_recursos_aws():
    terraform_dir = './aws/'
    try:
        subprocess.run(['terraform', 'destroy', '-auto-approve'], cwd=terraform_dir, check=True)
        return jsonify({"message": "Recursos na AWS destruídos com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao destruir recursos na AWS: {e}"}), 500

@app.route('/azure/login', methods=['POST', 'OPTIONS'])
def fazer_login_azure():
    terraform_dir = './azure/'
    try:
        # Execute o login e inicialize o terraform
        subprocess.run('az login && terraform init', shell=True, cwd=terraform_dir)
        return jsonify({"message": "Login realizado com sucesso!"}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Erro ao fazer login na Azure: {e}"}), 500

@app.route('/aws/login', methods=['POST'])
def fazer_login_aws():
    dados = request.json
    access_key = dados['access_key']
    secret_key = dados['secret_access_key']
    token = dados['token']
    
    terraform_dir = './aws/'
    
    atualizar_nomes_tf({"nome": "access_key", "valor": access_key}, terraform_dir)
    atualizar_nomes_tf({"nome": "secret_key", "valor": secret_key}, terraform_dir)
    atualizar_nomes_tf({"nome": "token", "valor": token}, terraform_dir)
     
    try:
        subprocess.run('terraform init', shell=True, cwd=terraform_dir)
        return "Variáveis atualizadas com sucesso.", 200
    except Exception as e:
        return f"Erro ao aplicar as variáveis: {str(e)}", 500
                
# Inicialização do servidor Flask
if __name__ == '__main__':
    app.run(debug=True)
