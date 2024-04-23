// ----------------------------------------------------AZURE----------------------------------------------------------- //

// Função para criar recursos na Azure
async function criarRecursosAzure(recurso, dados) {
  try {
    const response = await fetch(`http://localhost:5000/azure/${recurso}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar ${recurso} na Azure`);
    }

    const data = await response.json();
    console.log(data.message); // Você pode fazer algo mais com a mensagem, como exibir em um modal, por exemplo

    // Atualiza o conteúdo do modal com o resultado
    document.getElementById("modal-message").innerText = data.message;

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

document.getElementById("close").addEventListener("click", function (event) {
  // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "none";
});

// Event listener para o botão de Load Balancer
document
  .getElementById("load-balancer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 2; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-load-balancer");

    // Obtém os dados preenchidos pelo usuário
    const nome = document.getElementById("nome-load").value;

    // Cria um objeto com os dados
    const dados = {
      nome: nome,
      regiao: regiao,
    };

    // Chama a função para criar recursos na Azure, passando os dados
    criarRecursosAzure("criar-grupo-recursos", dados);
  });

// Event listener para o botão de criar Grupo de Recursos
document
  .getElementById("grupo-recursos-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 3; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-grupo-recursos");

    // Obtém os dados preenchidos pelo usuário
    const nome = document.getElementById("nome-grupo").value;
    const regiao = document.getElementById("regiao-grupo").value;

    // Cria um objeto com os dados
    const dados = {
      nome: nome,
      regiao: regiao,
    };

    // Chama a função para criar recursos na Azure, passando os dados
    criarRecursosAzure("criar-grupo-recursos", dados);
  });

// Event listener para o botão de criar Conta de Armazenamento
document
  .getElementById("conta-armazenamento-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 4; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-conta-armazenamento");

    const nome = document.getElementById("nome-conta").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAzure("criar-conta-armazenamento", dados);
  });

// Event listener para o botão de criar VNET
document
  .getElementById("vnet-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
    
    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 5; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-vnet");

    const nome = document.getElementById("nome-vnet").value;
    const endereco = document.getElementById("endereco-vnet").value;
    const dados = {
      nome: nome,
      endereco: endereco,
    };
    criarRecursosAzure("criar-vnet", dados);
  });

// Event listener para o botão de criar Subrede Pública
document
  .getElementById("subnet-publica-btn")
  .addEventListener("click", function () {
    
    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 6; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-subrede-publica");

    const nome = document.getElementById("nome-subrede-publica").value;
    const endereco = document.getElementById("endereco-subrede-publica").value;
    const dados = {
      nome: nome,
      endereco: endereco,
    };
    criarRecursosAzure("criar-subrede-publica", dados);
  });

// Event listener para o botão de criar Subrede Privada
document
  .getElementById("subnet-privada-btn")
  .addEventListener("click", function () {
    
    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 7; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-subrede-privada");

    const nome = document.getElementById("nome-subrede-privada").value;
    const endereco = document.getElementById("endereco-subrede-privada").value;
    const dados = {
      nome: nome,
      endereco: endereco,
    };
    criarRecursosAzure("criar-subrede-privada", dados);
  });

// Event listener para o botão de criar Grupo de Segurança
document
  .getElementById("grupo-seguranca-linux-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 8; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-grupo-seguranca-linux");

    const nome = document.getElementById("nome-grupo-seguranca").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAzure("criar-grupo-seguranca-linux", dados);
  });

// Event listener para o botão de criar Grupo de Segurança
document
  .getElementById("grupo-seguranca-windows-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 9; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-grupo-seguranca-windows");

    const nome = document.getElementById("nome-grupo-seguranca").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAzure("criar-grupo-seguranca-windows", dados);
  });

// Event listener para o botão de criar IP Público Linux
document
  .getElementById("ip-publico-linux-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 10; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-ip-publico-linux");

    const nome = document.getElementById("nome-ip-publico-linux").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAzure("criar-interface-ip-linux", dados);
  });

// Event listener para o botão de criar IP Público Windows
document
  .getElementById("ip-publico-windows-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 11; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-ip-publico-windows");

    const nome = document.getElementById("nome-ip-publico-windows").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAzure("criar-interface-ip-windows", dados);
  });

// Event listener para o botão de criar Máquina Virtual Linux
document
  .getElementById("maquina-virtual-linux-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 12; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-maquina-virtual-linux");

    const nome = document.getElementById("nome-maquina-linux").value;
    const usuario = document.getElementById("usuario-linux").value;
    const senha = document.getElementById("senha-linux").value;
    const dados = {
      nome: nome,
      usuario: usuario,
      senha: senha,
    };
    criarRecursosAzure("criar-maquina-virtual-linux", dados);
  });

// Event listener para o botão de criar Máquina Virtual Windows
document
  .getElementById("maquina-virtual-windows-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
    const modalContent = document.querySelector(".modal-content");

    modalContent.style.display = "block";

    // Defina o novo valor do índice
    const novoIndice = 13; // Novo valor do índice

    // Construa o seletor CSS com o novo valor do índice
    const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

    // Selecione o elemento que corresponde ao novo seletor
    const novoElemento = modalContent.querySelector(novoSeletor);

    // Aplique o estilo desejado ao novo elemento
    if (novoElemento) {
      novoElemento.style.display = "block";
    }

    openModal("modal-maquina-virtual-windows");

    const nome = document.getElementById("nome-maquina-windows").value;
    const usuario = document.getElementById("usuario-windows").value;
    const senha = document.getElementById("senha-windows").value;
    const dados = {
      nome: nome,
      usuario: usuario,
      senha: senha,
    };
    criarRecursosAzure("criar-maquina-virtual-windows", dados);
  });

// ----------------------------------------------------AWS---------------------------------------------------------- //

// Função para criar recursos na AWS
async function criarRecursosAWS(recurso, dados) {
  try {
    const response = await fetch(`http://localhost:5000/aws/${recurso}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar ${recurso} na AWS`);
    }

    const data = await response.json();
    console.log(data.message); // Você pode fazer algo mais com a mensagem, como exibir em um modal, por exemplo

    // Atualiza o conteúdo do modal com o resultado
    document.getElementById("modal-message").innerText = data.message;

    // Abre o modal
    openModal();
  } catch (error) {
    console.error(error);
    // Tratar o erro aqui, como exibir uma mensagem de erro para o usuário

    // Atualiza o conteúdo do modal com a mensagem de erro
    document.getElementById("modal-message").innerText = error.message;

    // Abre o modal
    openModal();
  }
}

document.getElementById("close").addEventListener("click", function (event) {
  // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "none";
});

// Event listener para o botão de criar Load Balancer na AWS
document
  .getElementById("botão-load-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 2; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-load-balancer-aws");

    const nome = document.getElementById("nome-load-balancer-aws").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAWS("Load Balancer", dados);
  });

// Event listener para o botão de criar VPC na AWS
document
  .getElementById("aws-vpc-btn")
  .addEventListener("click", function () {
  
  // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 3; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-vpc");

  const nome = document.getElementById("nome-vpc").value;
  const endereco = document.getElementById("endereco-vpc").value;
  const dados = {
    nome: nome,
    endereco: endereco,
  };
  criarRecursosAzure("vpc", dados);
});

// Event listener para o botão de criar Subrede Pública na AWS
document
  .getElementById("aws-subnet-publica-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 4; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-subrede-publica-aws");

    const nome = document.getElementById("nome-subrede-publica-aws").value;
    const endereco = document.getElementById(
      "endereco-subrede-publica-aws"
    ).value;
    const dados = {
      nome: nome,
      endereco: endereco,
    };
    criarRecursosAzure("Subrede Pública", dados);
  });

// Event listener para o botão de criar Subrede Privada na AWS
document
  .getElementById("aws-subnet-privada-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 5; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-subrede-privada-aws");

    const nome = document.getElementById("nome-subrede-privada-aws").value;
    const endereco = document.getElementById(
      "endereco-subrede-privada-aws"
    ).value;
    const dados = {
      nome: nome,
      endereco: endereco,
    };
    criarRecursosAzure("Subrede Privada", dados);
  });

// Event listener para o botão de criar Gateway de Internet na AWS
document
  .getElementById("aws-gateway-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 6; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-gateway");

    const nome = document.getElementById("nome-gateway").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAzure("Gateway", dados);
  });

// Event listener para o botão de criar Tabela de Rotas na AWS
document
  .getElementById("aws-tabela-rota-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 7; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-tabela-rotas");

    const nome = document.getElementById("nome-tabela").value;
    const dados = {
      nome: nome,
    };
    criarRecursosAWS("Tabela de Rota", dados);
  });

// Event listener para o botão de criar Grupo de Segurança Linux na AWS
document
  .getElementById("aws-grupo-seguranca-linux-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 8; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-grupo-seguranca-linux-aws");

    const nome = document.getElementById(
      "nome-grupo-seguranca-linux-aws"
    ).value;
    const dados = {
      nome: nome,
    };
    criarRecursosAWS("Grupo de Segurança Linux", dados);
  });

// Event listener para o botão de criar Grupo de Segurança Windows na AWS
document
  .getElementById("aws-grupo-seguranca-windows-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 9; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-grupo-seguranca-Windows-aws");

    const nome = document.getElementById(
      "nome-grupo-seguranca-windows-aws"
    ).value;
    const dados = {
      nome: nome,
    };
    criarRecursosAWS("Grupo de Segurança Windows", dados);
  });

// Event listener para o botão de criar Instância EC2 Linux na AWS
document
  .getElementById("aws-maquina-virtual-linux-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 10; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-maquina-virtual-linux-aws");

    const nome = document.getElementById("nome-maquina-linux-aws").value;
    const usuario = document.getElementById("usuario-linux-aws").value;
    const senha = document.getElementById("senha-linux-aws").value;
    const dados = {
      nome: nome,
      usuario: usuario,
      senha: senha,
    };
    criarRecursosAWS("Máquina Virtual Linux", dados);
  });

// Event listener para o botão de criar Instância EC2 Windows na AWS
document
  .getElementById("aws-maquina-virtual-windows-btn")
  .addEventListener("click", function () {

    // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  modalContent.style.display = "block";

  // Defina o novo valor do índice
  const novoIndice = 11; // Novo valor do índice

  // Construa o seletor CSS com o novo valor do índice
  const novoSeletor = `.modal-content > div:nth-child(${novoIndice})`;

  // Selecione o elemento que corresponde ao novo seletor
  const novoElemento = modalContent.querySelector(novoSeletor);

  // Aplique o estilo desejado ao novo elemento
  if (novoElemento) {
    novoElemento.style.display = "block";
  }

  openModal("modal-maquina-virtual-windows-aws");

    const nome = document.getElementById("nome-maquina-windows-aws").value;
    const usuario = document.getElementById("usuario-windows-aws").value;
    const senha = document.getElementById("senha-windows-aws").value;
    const dados = {
      nome: nome,
      usuario: usuario,
      senha: senha,
    };
    criarRecursosAWS("Máquina Virtual Windows", dados);
  });

// ----------------------------------------------------MODAL----------------------------------------------------------- //

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona a tag h1 onde o nome do usuário será exibido
  const userName = document.querySelector(".profile h1");

  // Função para atualizar o nome do usuário
  const updateUserName = () => {
    // Obtém o nome do usuário armazenado no localStorage
    const storedUserName = localStorage.getItem("userName");

    // Verifica se há um nome de usuário armazenado
    if (storedUserName) {
      // Atualiza o conteúdo da tag h1 com o nome armazenado
      userName.textContent = storedUserName;
    }
  };

  // Chama a função updateUserName para atualizar o nome do usuário quando a página é carregada
  updateUserName();

  // Adiciona um evento para detectar mudanças no localStorage
  window.addEventListener("storage", function (event) {
    // Verifica se a chave modificada é 'userName'
    if (event.key === "userName") {
      // Atualiza o nome do usuário na página atual
      updateUserName();
    }
  });
});


