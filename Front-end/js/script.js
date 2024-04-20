//THIS APP IS NOT THE EXACT COPY OF THE APP STORE BUT IS SIMILAR TO IT ;).... and btw inspired by Aysenur Turk's pen (who i follow A LOT).

const side_bar_btns = document.querySelectorAll("#sidebar-btn");


side_bar_btns.forEach((elem) => {
  elem.addEventListener("click", () => {
    for (let index = 0; index < side_bar_btns.length; index++) {
      side_bar_btns[index].classList.remove("active");
    }
    elem.classList.add("active");
  });
});

let min = true;

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
document.getElementById('grupo-recursos-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-grupo').value;
  const regiao = document.getElementById('regiao-grupo').value;
  const dados = {
    nome: nome,
    regiao: regiao
  };
  criarRecursosAzure('criar-grupo-recursos', dados);
});

// Event listener para o botão de criar Conta de Armazenamento
document.getElementById('conta-armazenamento-btn').addEventListener('click', function() {
  const nome = document.getElementById('nome-conta').value;
  const dados = {
    nome: nome
  };
  criarRecursosAzure('criar-conta-armazenamento', dados);
});

// Event listener para o botão de criar VNET
document.getElementById('vnet-btn').addEventListener('click', function() {
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
  const dados = {
    nome: "Nome da VPC",
    endereco: "Endereço da VPC"
  };
  criarRecursosAWS('criar-vpc', dados);
});

// Event listener para o botão de criar Subrede Pública na AWS
document.getElementById('subnet-publica-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome da Subrede Pública",
    endereco: "Endereço da Subrede Pública"
  };
  criarRecursosAWS('criar-subrede-publica', dados);
});

// Event listener para o botão de criar Subrede Privada na AWS
document.getElementById('subnet-privada-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome da Subrede Privada",
    endereco: "Endereço da Subrede Privada"
  };
  criarRecursosAWS('criar-subrede-privada', dados);
});

// Event listener para o botão de criar Gateway de Internet na AWS
document.getElementById('gateway-internet-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome do Gateway de Internet"
  };
  criarRecursosAWS('criar-gateway', dados);
});

// Event listener para o botão de criar Tabela de Rotas na AWS
document.getElementById('tabela-rotas-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome da Tabela de Rotas"
  };
  criarRecursosAWS('criar-tabela-rotas', dados);
});

// Event listener para o botão de associar Subrede à Tabela de Rotas na AWS
document.getElementById('aws-associar-tabela-rota-btn').addEventListener('click', function() {
  criarRecursosAWS('associartb');
});

// Event listener para o botão de criar Grupo de Segurança Linux na AWS
document.getElementById('grupo-seguranca-linux-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome do Grupo de Segurança Linux"
  };
  criarRecursosAWS('criar-grupo-seguranca-linux', dados);
});

// Event listener para o botão de criar Grupo de Segurança Windows na AWS
document.getElementById('grupo-seguranca-windows-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome do Grupo de Segurança Windows"
  };
  criarRecursosAWS('criar-grupo-seguranca-windows', dados);
});

// Event listener para o botão de criar Instância EC2 Linux na AWS
document.getElementById('maquina-virtual-linux-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome da Máquina Virtual Linux",
    usuario: "Nome do Usuário Linux",
    senha: "Senha do Usuário Linux"
  };
  criarRecursosAWS('criar-maquina-virtual-linux', dados);
});

// Event listener para o botão de criar Instância EC2 Windows na AWS
document.getElementById('maquina-virtual-windows-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome da Máquina Virtual Windows",
    usuario: "Nome do Usuário Windows",
    senha: "Senha do Usuário Windows"
  };
  criarRecursosAWS('criar-maquina-virtual-windows', dados);
});

// Event listener para o botão de criar Load Balancer na AWS
document.getElementById('load-balancer-aws-btn').addEventListener('click', function() {
  const dados = {
    nome: "Nome do Load Balancer"
  };
  criarRecursosAWS('criar-load-balancer', dados);
});

// ----------------------------------------------------MODAL----------------------------------------------------------- //

// Função para abrir o modal
function openModal() {
  document.getElementById('modal-content').style.display = "block"; // Mostra o modal
  document.body.classList.add('modal-open'); // Adiciona a classe modal-open ao body
}

// Função para fechar o modal
function closeModal() {
  document.getElementById('modal-message').innerText = ''; // Limpa o conteúdo do modal
  document.getElementById('modal-content').style.display = "none"; // Esconde o modal
  document.body.classList.remove('modal-open'); // Remove a classe modal-open do body
}

// Adicionar um ouvinte de evento para fechar o modal quando o usuário clicar fora dele
document.addEventListener('DOMContentLoaded', function() {
  const modalContent = document.getElementById('modal-content');
  const closeModalButton = document.getElementById('close-modal');

  closeModalButton.addEventListener('click', closeModal);

  // Ajuste no ouvinte de evento para fechar o modal quando o usuário clicar fora dele
  window.onclick = function(event) {
      if (event.target == modalContent) { // Certifique-se de que o ID do modal esteja correto
          closeModal();
      }
  }
});

document.addEventListener('click', function(event) {
  if (event.target == modalContent) {
      closeModal();
  }
});