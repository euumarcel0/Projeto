# Projeto API Azure e AWS

## Descrição
Este projeto consiste em uma API Flask para gerenciar recursos na nuvem, especificamente na Microsoft Azure e na AWS. O código está estruturado para interagir com o Terraform, permitindo a criação, modificação e destruição de recursos de infraestrutura na Azure e na AWS.

## Estrutura do Projeto

- `app.py`: Este arquivo contém o código principal da API Flask, onde são definidos os endpoints para interagir com os recursos na Azure e na AWS.
- `Azure/`: Este diretório contém os arquivos de configuração do Terraform para a criação dos recursos na Azure.
- `AWS/`: Este diretório contém os arquivos de configuração do Terraform para a criação dos recursos na AWS.

## Dependências
- Python 3.x
- Flask
- Flask Swagger
- Flask Swagger UI
- Flask CORS
- Terraform
- AWS CLI

## Configuração
1. Certifique-se de ter todas as dependências instaladas.
2. Clone este repositório em sua máquina local.
3. Instale as dependências Python executando `pip install -r requirements.txt`.
4. Certifique-se de ter o `chromedriver` no seu PATH ou especifique o caminho diretamente no arquivo `app.py`.

## Uso
1. Execute o arquivo `app.py` para iniciar o servidor Flask.
2. Acesse a documentação da API Swagger em `/api/azure` para Azure ou `/api/aws` para AWS.
3. Use os endpoints fornecidos para criar, modificar e destruir recursos na Azure ou na AWS.

## Endpoints Principais
### Azure
- `/azure/criar-grupo-recursos`: Cria um Grupo de Recursos na Azure.
- `/azure/criar-conta-armazenamento`: Cria uma Conta de Armazenamento na Azure.
- `/azure/criar-vnet`: Cria uma Virtual Network (VNET) na Azure.
- `/azure/criar-maquina-virtual-linux`: Cria uma Máquina Virtual Linux na Azure.
- `/azure/destruir-recursos`: Destrói todos os recursos criados na Azure.

### AWS
- `/aws/login`: Realiza o login na AWS executando `terraform init` no diretório especificado.
- `/aws/vpc`: Cria uma VPC na AWS.
- `/aws/Subrede Pública`: Cria uma subrede pública na AWS.
- `/aws/Subrede Privada`: Cria uma subrede privada na AWS.
- `/aws/Gateway`: Cria um Gateway de Internet na AWS.
- `/aws/Tabela de Rota`: Cria uma tabela de rotas na AWS.
- `/aws/Grupo de Segurança Linux`: Cria um grupo de segurança Linux na AWS.
- `/aws/Grupo de Segurança Windows`: Cria um grupo de segurança Windows na AWS.
- `/aws/Máquina Virtual Windows`: Cria uma instância EC2 Windows na AWS.
- `/aws/Máquina Virtual Linux`: Cria uma instância EC2 Linux na AWS.
- `/aws/Load Balancer`: Cria um Load Balancer na AWS.
- `/aws/destruir-recursos`: Destrói todos os recursos criados na AWS.

## Notas
- Este aplicativo foi desenvolvido para fins educacionais e de demonstração.
- Certifique-se de entender os custos associados aos recursos criados na Azure e na AWS.
- Sempre siga as práticas recomendadas de segurança ao lidar com credenciais e recursos na nuvem.
