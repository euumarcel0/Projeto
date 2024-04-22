
// ----------------------------------------------------AZURE----------------------------------------------------------- //

// Função para criar recursos na Azure
async function criarRecursosAzure(recurso, dados) {
  try {
    const response = await fetch(`http://localhost:5000/azure/${recurso}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar ${recurso} na Azure`);
    }

    const data = await response.json();
    console.log(data.message); // Você pode fazer algo mais com a mensagem, como exibir em um modal, por exemplo

    // Atualiza o conteúdo do modal com o resultado
    document.getElementById('modal-message').innerText = data.message;

    // Abre o modal
    openModal();
  } catch (error) {
    console.error(error);
    // Tratar o erro aqui, como exibir uma mensagem de erro para o usuário

    // Atualiza o conteúdo do modal com a mensagem de erro
    //document.getElementById('modal-message').innerText = error.message;

    // Abre o modal
    openModal();
  }
}

// Event listener para o botão de criar Grupo de Recursos
document.getElementById('grupo-recursos-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
    
    // Obtém os dados preenchidos pelo usuário
    const nome = document.getElementById('nome-grupo').value;
    const regiao = document.getElementById('regiao-grupo').value;
    
    // Cria um objeto com os dados
    const dados = {
      nome: nome,
      regiao: regiao
    };

    // Chama a função para criar recursos na Azure, passando os dados
    criarRecursosAzure('criar-grupo-recursos', dados);
});

// Event listener para o botão de criar Conta de Armazenamento
document.getElementById('submit-conta-armazenamento').addEventListener('click', function(event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  const nome = document.getElementById('nome-conta').value;
  const dados = {
    nome: nome
  };
  criarRecursosAzure('criar-conta-armazenamento', dados);
});

// Event listener para o botão de criar VNET
document.getElementById('submit-vnet').addEventListener('click', function(event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  const nome = document.getElementById('nome-vnet').value;
  const endereco = document.getElementById('endereco-vnet').value;
  const dados = {
    nome: nome,
    endereco: endereco
  };
  criarRecursosAzure('criar-vnet', dados);
});

// Event listener para o botão de criar Subrede Pública
document.getElementById('subnet-publica-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-subrede-publica').value;
  const endereco = document.getElementById('endereco-subrede-publica').value;
  const dados = {
    nome: nome,
    endereco: endereco
  };
  criarRecursosAzure('criar-subrede-publica', dados);
});

// Event listener para o botão de criar Subrede Privada
document.getElementById('subnet-privada-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-subrede-privada').value;
  const endereco = document.getElementById('endereco-subrede-privada').value;
  const dados = {
    nome: nome,
    endereco: endereco
  };
  criarRecursosAzure('criar-subrede-privada', dados);
});

// Event listener para o botão de criar Grupo de Segurança
document.getElementById('grupo-seguranca-linux-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-grupo-seguranca').value;
  const dados = {
    nome: nome
  };
  criarRecursosAzure('criar-grupo-seguranca-linux', dados);
});

// Event listener para o botão de criar Grupo de Segurança
document.getElementById('grupo-seguranca-windows-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-grupo-seguranca').value;
  const dados = {
    nome: nome
  };
  criarRecursosAzure('criar-grupo-seguranca-windows', dados);
});

// Event listener para o botão de criar IP Público Linux
document.getElementById('ip-publico-linux-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-ip-publico-linux').value;
  const dados = {
    nome: nome
  };
  criarRecursosAzure('criar-interface-ip-linux', dados);
});

// Event listener para o botão de criar IP Público Windows
document.getElementById('ip-publico-windows-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-ip-publico-windows').value;
  const dados = {
    nome: nome
  };
  criarRecursosAzure('criar-interface-ip-windows', dados);
});

// Event listener para o botão de criar Máquina Virtual Linux
document.getElementById('maquina-virtual-linux-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-maquina-linux').value;
  const usuario = document.getElementById('usuario-linux').value;
  const senha = document.getElementById('senha-linux').value;
  const dados = {
    nome: nome,
    usuario: usuario,
    senha: senha
  };
  criarRecursosAzure('criar-maquina-virtual-linux', dados);
});

// Event listener para o botão de criar Máquina Virtual Windows
document.getElementById('maquina-virtual-windows-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-maquina-windows').value;
  const usuario = document.getElementById('usuario-windows').value;
  const senha = document.getElementById('senha-windows').value;
  const dados = {
    nome: nome,
    usuario: usuario,
    senha: senha
  };
  criarRecursosAzure('criar-maquina-virtual-windows', dados);
});

// ----------------------------------------------------MODAL/Azure----------------------------------------------------------- //

// Função para abrir o modal
function openModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

// Event listener para fechar o modal quando o usuário clica no botão "Fechar" (X)
document.querySelector('.close').addEventListener('click', function() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
});

// Event listener para fechar o modal quando o usuário clica fora do modal
window.addEventListener('click', function(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// ----------------------------------------------------AWS---------------------------------------------------------- //

// Função para criar recursos na AWS
async function criarRecursosAWS(recurso, dados) {
  try {
      const response = await fetch(`http://localhost:5000/aws/${recurso}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados)
      });

      if (!response.ok) {
          throw new Error(`Erro ao criar ${recurso} na AWS`);
      }

      const data = await response.json();
      console.log(data.message); // Você pode fazer algo mais com a mensagem, como exibir em um modal, por exemplo
      
      // Atualiza o conteúdo do modal com o resultado
      document.getElementById('modal-message').innerText = data.message;
      
      // Abre o modal
      openModal();
  } catch (error) {
      console.error(error);
      // Tratar o erro aqui, como exibir uma mensagem de erro para o usuário
      
      // Atualiza o conteúdo do modal com a mensagem de erro
      document.getElementById('modal-message').innerText = error.message;
      
      // Abre o modal
      openModal();
  }
}

// Event listener para o botão de criar VPC na AWS
document.getElementById('vpc-aws-btn').addEventListener('click', function() {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  const nome = document.getElementById('nome-vpc').value;
  const endereco = document.getElementById('endereco-vpc').value;
  const dados = {
    nome: nome,
    endereco: endereco
  };
  criarRecursosAzure('vpc', dados);
});

// Event listener para o botão de criar Subrede Pública na AWS
document.getElementById('subnet-publica-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-subrede-publica-aws').value;
  const endereco = document.getElementById('endereco-subrede-publica-aws').value;
  const dados = {
    nome: nome,
    endereco: endereco
  };
  criarRecursosAzure('Subrede Pública', dados);
});

// Event listener para o botão de criar Subrede Privada na AWS
document.getElementById('subnet-privada-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-subrede-privada-aws').value;
  const endereco = document.getElementById('endereco-subrede-privada-aws').value;
  const dados = {
    nome: nome,
    endereco: endereco
  };
  criarRecursosAzure('Subrede Privada', dados);
});

// Event listener para o botão de criar Gateway de Internet na AWS
document.getElementById('gateway-internet-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-gateway').value;
  const dados = {
    nome: nome
  };
  criarRecursosAzure('Gateway', dados);
});

// Event listener para o botão de criar Tabela de Rotas na AWS
document.getElementById('tabela-rotas-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-tabela').value;
  const dados = {
    nome: nome
  };
  criarRecursosAWS('Tabela de Rota', dados);
});

// Event listener para o botão de criar Grupo de Segurança Linux na AWS
document.getElementById('grupo-seguranca-linux-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-grupo-seguranca-linux-aws').value;
  const dados = {
    nome: nome
  };
  criarRecursosAWS('Grupo de Segurança Linux', dados);
});

// Event listener para o botão de criar Grupo de Segurança Windows na AWS
document.getElementById('grupo-seguranca-windows-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-grupo-seguranca-windows-aws').value;
  const dados = {
    nome: nome
  };
  criarRecursosAWS('Grupo de Segurança Windows', dados);
});

// Event listener para o botão de criar Instância EC2 Linux na AWS
document.getElementById('maquina-virtual-linux-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-maquina-linux-aws').value;
  const usuario = document.getElementById('usuario-linux-aws').value;
  const senha = document.getElementById('senha-linux-aws').value;
  const dados = {
    nome: nome,
    usuario: usuario,
    senha: senha
  };
  criarRecursosAWS('Máquina Virtual Linux', dados);
});

// Event listener para o botão de criar Instância EC2 Windows na AWS
document.getElementById('maquina-virtual-windows-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-maquina-windows-aws').value;
  const usuario = document.getElementById('usuario-windows-aws').value;
  const senha = document.getElementById('senha-windows-aws').value;
  const dados = {
    nome: nome,
    usuario: usuario,
    senha: senha
  };
  criarRecursosAWS('Máquina Virtual Windows', dados);
});

// Event listener para o botão de criar Load Balancer na AWS
document.getElementById('load-balancer-aws-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-load-balancer-aws').value;
  const dados = {
    nome: nome
  };
  criarRecursosAWS('Load Balancer', dados);
});

// ----------------------------------------------------MODAL----------------------------------------------------------- //

document.addEventListener('DOMContentLoaded', function() {
  // Seleciona a tag h1 onde o nome do usuário será exibido
  const userName = document.querySelector('.profile h1');

  // Função para atualizar o nome do usuário
  const updateUserName = () => {
      // Obtém o nome do usuário armazenado no localStorage
      const storedUserName = localStorage.getItem('userName');

      // Verifica se há um nome de usuário armazenado
      if (storedUserName) {
          // Atualiza o conteúdo da tag h1 com o nome armazenado
          userName.textContent = storedUserName;
      }
  };

  // Chama a função updateUserName para atualizar o nome do usuário quando a página é carregada
  updateUserName();

  // Adiciona um evento para detectar mudanças no localStorage
  window.addEventListener('storage', function(event) {
      // Verifica se a chave modificada é 'userName'
      if (event.key === 'userName') {
          // Atualiza o nome do usuário na página atual
          updateUserName();
      }
  });
});

