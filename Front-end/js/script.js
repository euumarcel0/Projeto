// Função para criar recursos na AWS
async function criarRecursosAWS(recurso) {
  try {
    const response = await fetch(`http://localhost:5000/aws/${recurso}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
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

// Event listener para os botões de criar recursos na AWS
document.querySelectorAll('.aws-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const recurso = btn.dataset.recurso;
    criarRecursosAWS(recurso);
  });
});

// Event listener para os botões de criar recursos na Azure
document.querySelectorAll('.azure-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const recurso = btn.dataset.recurso;
    let dados = {};

    switch (recurso) {
      case 'criar-grupo-recursos':
        // Coleta os dados do formulário
        const nomeGrupoRecursos = document.getElementById('resource-group-name').value;
        const regiao = document.getElementById('resource-group-region').value;
        // Envia os dados para a API
        criarRecursosAzure(recurso, { nome: nomeGrupoRecursos, regiao: regiao });
        break;
      case 'criar-conta-armazenamento':
        // Coleta os dados do formulário
        const nomeContaArmazenamento = document.getElementById('nome-conta-armazenamento').value;
        // Envia os dados para a API
        criarRecursosAzure(recurso, { nome: nomeContaArmazenamento });
        break;
      case 'criar-vnet':
        // Coleta os dados do formulário
        const nomeVnet = document.getElementById('nome-vnet').value;
        const ipVnet = document.getElementById('ip-vnet').value;
        // Envia os dados para a API
        criarRecursosAzure(recurso, { nome: nomeVnet, ip: ipVnet });
        break;
      // Adicione casos para outros recursos, se necessário
      default:
        // Lógica para outros recursos, se necessário
        break;
    }
  });
});

// Função para criar recursos na AWS
async function criarRecursosAWS(recurso) {
  try {
    const response = await fetch(`http://localhost:5000/aws/${recurso}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
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

// Event listener para os botões de criar recursos na AWS
document.querySelectorAll('.aws-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const recurso = btn.dataset.recurso;
    criarRecursosAWS(recurso);
  });
});

// ----------------------------------------------------MODAL----------------------------------------------------------- //

// Função para abrir o modal
function openModal() {
  const modal = document.getElementById('modal-content');
  modal.style.display = "block";
  document.body.classList.add('modal-open');
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('modal-content');
  modal.style.display = "none";
  document.body.classList.remove('modal-open');
}

// Event listener para o botão "Criar Recurso"
document.getElementById('open-modal-btn').addEventListener('click', function() {
  openModal();
});

// Event listener para fechar o modal clicando fora dele
window.onclick = function(event) {
  const modal = document.getElementById('modal-content');
  if (event.target == modal) {
    closeModal();
  }
};

// Event listener para o formulário de recursos
document.getElementById('resource-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Aqui você pode coletar os dados do formulário e fazer a requisição para a API do Azure ou AWS

  // Fechar o modal após o envio
  closeModal();
});
