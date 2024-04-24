# MENU

#-------------------------------AZURE-------------------------------#

# Criar Grupo de Recursos na Azure:
# Método: POST
# Endpoint: /azure/criar-grupo-recursos
# Corpo da Requisição (JSON):
{
    "nome": "nome_grupo_recursos",
    "regiao": "regiao_grupo_recursos"
}
# Criar Conta de Armazenamento na Azure:
# Método: POST
# Endpoint: /azure/criar-conta-armazenamento
# Corpo da Requisição (JSON):
{
    "nome": "nome_conta_armazenamento"
}
# Criar VNET na Azure:
# Método: POST
# Endpoint: /azure/criar-vnet
# Corpo da Requisição (JSON):
{
    "nome": "nome_vnet",
    "endereco": "endereco_vnet"
}
# Criar Subrede Pública na Azure:
# Método: POST
# Endpoint: /azure/criar-subrede-publica
# Corpo da Requisição (JSON):
{
    "nome": "nome_subrede_publica",
    "endereco": "endereco_subrede_publica"
}
# Criar Subrede Privada na Azure:
# Método: POST
# Endpoint: /azure/criar-subrede-privada
# Corpo da Requisição (JSON):
{
    "nome": "nome_subrede_privada",
    "endereco": "endereco_subrede_privada"
}
# Criar Grupo de Segurança Linux na Azure:
# Método: POST
# Endpoint: /azure/criar-grupo-seguranca-linux
# Corpo da Requisição (JSON):
{
    "nome": "nome_grupo_seguranca_linux"
}
# Criar Grupo de Segurança Windows na Azure:
# Método: POST
# Endpoint: /azure/criar-grupo-seguranca-windows
# Corpo da Requisição (JSON):
{
    "nome": "nome_grupo_seguranca_windows"
}
# Criar Interface de IP Público Linux na Azure:
# Método: POST
# Endpoint: /azure/criar-interface-ip-linux
# Corpo da Requisição (JSON):
{
    "nome": "nome_interface_ip_linux"
}
# Criar Interface de IP Público Windows na Azure:
# Método: POST
# Endpoint: /azure/criar-interface-ip-windows
# Corpo da Requisição (JSON):
{
    "nome": "nome_interface_ip_windows"
}
# Criar Máquina Virtual Linux na Azure:
# Método: POST
# Endpoint: /azure/criar-maquina-virtual-linux
# Corpo da Requisição (JSON):
{
    "nome": "nome_maquina_virtual_linux",
    "usuario": "nome_usuario_linux",
    "senha": "senha_usuario_linux"
}
# Criar Máquina Virtual Windows na Azure:
# Método: POST
# Endpoint: /azure/criar-maquina-virtual-windows
# Corpo da Requisição (JSON):
{
    "nome": "nome_maquina_virtual_windows",
    "usuario": "nome_usuario_windows",
    "senha": "senha_usuario_windows"
}
# Criar Load Balancer na Azure:
# Método: POST
# Endpoint: /azure/criar-load-balancer
# Corpo da Requisição (JSON):
{
    "nome": "nome_load_balancer"
}
# Destruir Recursos na Azure:
# Método: POST
# Endpoint: /azure/destruir-recursos
# Somente Rodar com o Endpoint

#-------------------------------AWS-------------------------------#

   
# Criar VPC na AWS:
# Método: POST
# Endpoint: /aws/vpc
# Corpo da Requisição (JSON):
{
    "nome": "nome_vpc",
    "endereco": "endereco_vpc"
}
# Criar Subrede Privada na AWS:
# Método: POST
# Endpoint: /aws/subrede-privada
# Corpo da Requisição (JSON):
{
    "nome": "nome_subrede_privada",
    "endereco": "endereco_subrede_privada"
}
# Criar Subrede Pública na AWS:
# Método: POST
# Endpoint: /aws/subrede-publica
# Corpo da Requisição (JSON):
{
    "nome": "nome_subrede_publica",
    "endereco": "endereco_subrede_publica"
}
# Criar Gateway de Internet na AWS:
# Método: POST
# Endpoint: /aws/gateway
# Corpo da Requisição (JSON):
{
    "nome": "nome_gateway"
}
# Criar Tabela de Rota na AWS:
# Método: POST
# Endpoint: /aws/tabela-de-rotas
# Corpo da Requisição (JSON):
{
    "nome": "nome_tabela_rotas"
}
# Criar Grupo de Segurança Linux na AWS:
# Método: POST
# Endpoint: /aws/grupo-linux
# Corpo da Requisição (JSON):
{
  "nome": "nome_do_grupo",
  "descrição": "descricao"
}
# Criar Grupo de Segurança Windows na AWS:
# Método: POST
# Endpoint: /aws/grupo-windows
# Corpo da Requisição (JSON):
{
  "nome": "nome_do_grupo",
  "descrição": "descricao"
}
# Criar Instância EC2 Linux na AWS:
# Método: POST
# Endpoint: /aws/maquina-linux
# Corpo da Requisição (JSON):
{
    "nome": "nome_maquina_virtual_windows"
}
# Criar Instância EC2 Windows na AWS:
# Método: POST
# Endpoint: /aws/maquina-windows
# Corpo da Requisição (JSON):
{
    "nome": "nome_maquina_virtual_linux"
}
# Criar Balanceador de Carga na AWS:
# Método: POST
# Endpoint: /aws/load-balancer
# Corpo da Requisição (JSON):
{
    "nome": "nome_balanceador_carga"
}
# Destruir Recursos na AWS:
# Método: POST
# Endpoint: /aws/destruir
# Somente Rodar com o Endpoint