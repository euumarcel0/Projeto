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
    //document.getElementById("modal-message").innerText = error.message;

    // Abre o modal
    openModal(modalContent);
  }
}

document.getElementById("close").addEventListener("click", function (event) {
  // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");

  const modais = document.querySelectorAll(".modal-content > div");

  modais.forEach(div => {
    div.style.display = "none";
  });

  modalContent.style.display = "none";
});

// ----------------------------------------------------AWS/MODAL----------------------------------------------------------- //

// Event listener para o botão de criar Load Balancer na AWS
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

    openModal("modal-load-balancer-aws");
  });

// Event listener para o botão de enviar dentro do modal de Load Balancer
document.getElementById("enviar-btn-load-balancer-aws").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-load").value; // Corrigido para nome-load

  // Cria um objeto com os dados
  const dados = {
    nome: nome,
  };

  try {
    // Chama a função para criar recursos na AWS, passando os dados
    await criarRecursosAWS("load-balancer", dados);
  } catch (error) {
    console.error(error);
    // Trate o erro conforme necessário
  }
});

// Event listener para o botão de criar VPC na AWS
document
  .getElementById("grupo-recursos-btn")
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
  });

// Event listener para o botão de enviar dentro do modal de VPC
document.getElementById("enviar-btn-vpc").addEventListener("click", async function (event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById("nome-vpc").value;
  const endereco = document.getElementById("endereco-vpc").value;

  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    endereco: endereco
  };

  try {
    // Chama a função para criar recursos na AWS, passando os dados
    await criarRecursosAWS("VPC", dados);
  } catch (error) {
    console.error(error);
    // Trate o erro conforme necessário
  }
});

// Event listener para o botão de criar Subrede Pública na AWS
document
  .getElementById("conta-armazenamento-btn")
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
  });


// Event listener para o botão de criar Subrede Privada na AWS
document
  .getElementById("vnet-btn")
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
  });

// Event listener para o botão de criar Gateway de Internet na AWS
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

    openModal("modal-gateway");
  });

// Event listener para o botão de criar Tabela de Rotas na AWS
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

    openModal("modal-tabela-rotas");
  });

// Event listener para o botão de criar Grupo de Segurança Linux na AWS
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

    openModal("modal-grupo-seguranca-linux-aws");
  });

// Event listener para o botão de criar Grupo de Segurança Windows na AWS
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

    openModal("modal-grupo-seguranca-Windows-aws");
  });

// Event listener para o botão de criar Instância EC2 Linux na AWS
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

    openModal("modal-maquina-virtual-linux-aws");
  });

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Linux
document.getElementById("enviar-btn-maquina-virtual-linux-aws").addEventListener("click", async function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-maquina-linux").value;
  const usuario = document.getElementById("usuario-linux").value;
  const senha = document.getElementById("senha-linux").value;

  const dados = {
    nome: nome,
    usuario: usuario,
    senha: senha,
  };

  try {
    await criarRecursosAzure("maquinas-linux", dados);
  } catch (error) {
    console.error(error);
  }
});

// Event listener para o botão de criar Instância EC2 Windows na AWS
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

    openModal("modal-maquina-virtual-windows-aws");
  });

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Windows
document.getElementById("enviar-btn-maquina-virtual-windows-aws").addEventListener("click", async function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-maquina-windows").value;
  const usuario = document.getElementById("usuario-windows").value;
  const senha = document.getElementById("senha-windows").value;

  const dados = {
    nome: nome,
    usuario: usuario,
    senha: senha,
  };

  try {
    await criarRecursosAzure("maquina-windows", dados);
  } catch (error) {
    console.error(error);
  }
});

// ----------------------------------------------------AWS/Requisição----------------------------------------------------------- //


// Event listener para o botão de enviar dentro do modal de Subrede Privada
document.getElementById("enviar-btn-subrede-privada-aws").addEventListener("click", async function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-subrede-privada").value;
  const endereco = document.getElementById("endereco-subrede-privada").value;

  const dados = {
    nome: nome,
    endereco: endereco,
  };

  try {
    await criarRecursosAWS("subrede-privada", dados);
  } catch (error) {
    console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal Gateway
document.getElementById("enviar-btn-gateway").addEventListener("click", async function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-gateway").value;

  const dados = {
    nome: nome,
  };

  try {
    await criarRecursosAWS("gateway", dados);
  } catch (error) {
    console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal Tabela de Rotas
document.getElementById("enviar-btn-tabela-rotas").addEventListener("click", async function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-tabela-rotas").value;

  const dados = {
    nome: nome,
  };

  try {
    await criarRecursosAWS("tabela-de-rotas", dados);
  } catch (error) {
    console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Linux
document.getElementById("enviar-btn-grupo-seguranca-linux-aws").addEventListener("click", async function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-grupo-seguranca").value;

  const dados = {
    nome: nome,
  };

  try {
    await criarRecursosAWS("grupo-seguranca-linux", dados);
  } catch (error) {
    console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Windows
document.getElementById("enviar-btn-grupo-seguranca-windows-aws").addEventListener("click", async function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome-grupo-seguranca").value;

  const dados = {
    nome: nome,
  };

  try {
    await criarRecursosAWS("grupo-seguranca-windows", dados);
  } catch (error) {
    console.error(error);
  }
});


function openModal(modalId) {
  // Fecha todos os modais
  const modals = document.querySelectorAll('.modal-content > div');
  modals.forEach(modal => {
    modal.style.display = 'none';
  });

  // Exibe o modal especificado
  if (modalId) {
    const modal = document.querySelector(`.modal-content > .${modalId}`);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Exibe o modal principal
  const modalContent = document.querySelector('.modal-content');
  modalContent.style.display = 'block';
}