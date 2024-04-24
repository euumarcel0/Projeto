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

// ----------------------------------------------------AZURE/MODAL----------------------------------------------------------- //

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
  });

// ----------------------------------------------------AZURE/Requisição----------------------------------------------------------- //

// Event listener para o botão de enviar dentro do modal de Load Balancer
document.querySelector(".modal-load-balancer .enviar-btn-load-balancer").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-load").value;

  // Cria um objeto com os dados
  const dados = {
    nome: nome,
  };

  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAzure("criar-load-balancer", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});

// Event listener para o botão de enviar dentro do modal de Grupo de Recursos
document.querySelector(".modal-grupo-recursos .enviar-btn-grupo-recursos").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-grupo").value;
  const regiao = document.getElementById("regiao-grupo").value;

  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    regiao: regiao,
  };

  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAzure("criar-grupo-recursos", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});

// Event listener para o botão de enviar dentro do modal de Conta de Armazenamento
document.querySelector(".modal-conta-armazenamento .enviar-btn-conta-armazenamento").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-conta").value;

  const dados = {
    nome: nome,
  };

  try {
      await criarRecursosAzure("criar-conta-armazenamento", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de VNET
document.querySelector(".modal-vnet .enviar-btn-vnet").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-vnet").value;
  const endereco = document.getElementById("endereco-vnet").value;

  const dados = {
    nome: nome,
    endereco: endereco,
  };

  try {
      await criarRecursosAzure("criar-vnet", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Subrede Pública
document.querySelector(".modal-subrede-publica .enviar-btn-subrede-publica").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-subrede-publica").value;
  const endereco = document.getElementById("endereco-subrede-publica").value;

  const dados = {
    nome: nome,
    endereco: endereco,
  };

  try {
      await criarRecursosAzure("criar-subrede-publica", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Subrede Privada
document.querySelector(".modal-subrede-privada .enviar-btn-subrede-privada").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-subrede-privada").value;
  const endereco = document.getElementById("endereco-subrede-privada").value;

  const dados = {
    nome: nome,
    endereco: endereco,
  };

  try {
      await criarRecursosAzure("criar-subrede-privada", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Linux
document.querySelector(".modal-grupo-seguranca-linux .enviar-btn-grupo-seguranca").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-grupo-seguranca").value;

  const dados = {
    nome: nome,
  };

  try {
      await criarRecursosAzure("criar-grupo-seguranca-linux", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Windows
document.querySelector(".modal-grupo-seguranca-windows .enviar-btn-grupo-seguranca").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-grupo-seguranca").value;

  const dados = {
    nome: nome,
  };

  try {
      await criarRecursosAzure("criar-grupo-seguranca-windows", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de IP Público Linux
document.querySelector(".modal-ip-publico-linux .enviar-btn-ip-publico-linux").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-ip-publico-linux").value;

  const dados = {
    nome: nome,
  };

  try {
      await criarRecursosAzure("criar-interface-ip-linux", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de IP Público Windows
document.querySelector(".modal-ip-publico-windows .enviar-btn-ip-publico-windows").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-ip-publico-windows").value;

  const dados = {
    nome: nome,
  };

  try {
      await criarRecursosAzure("criar-interface-ip-windows", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Linux
document.querySelector(".modal-maquina-virtual-linux .enviar-btn-maquina-virtual-linux").addEventListener("click", async function (event) {
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
      await criarRecursosAzure("criar-maquina-virtual-linux", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Windows
document.querySelector(".modal-maquina-virtual-windows .enviar-btn-maquina-virtual-windows").addEventListener("click", async function (event) {
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
      await criarRecursosAzure("criar-maquina-virtual-windows", dados);
  } catch (error) {
      console.error(error);
  }
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
    //document.getElementById("modal-message").innerText = error.message;

    // Abre o modal
    openModal(modalContent);
  }
}

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

// ----------------------------------------------------AWS/Requisição----------------------------------------------------------- //

// Event listener para o botão de enviar dentro do modal de Load Balancer
document.querySelector(".modal-load-balancer-aws .enviar-btn-load-balancer-aws").addEventListener("click", async function (event) {
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

// Event listener para o botão de enviar dentro do modal de Subrede Pública
document.querySelector(".modal-subrede-publica-aws .enviar-btn-subrede-publica-aws").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-subrede-publica").value;
  const endereco = document.getElementById("endereco-subrede-publica").value;

  const dados = {
    nome: nome,
    endereco: endereco,
  };

  try {
      await criarRecursosAzure("subrede-publica", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Subrede Privada
document.querySelector(".modal-subrede-privada-aws .enviar-btn-subrede-privada-aws").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-subrede-privada").value;
  const endereco = document.getElementById("endereco-subrede-privada").value;

  const dados = {
    nome: nome,
    endereco: endereco,
  };

  try {
      await criarRecursosAzure("subrede-privada", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal Gateway
document.querySelector(".modal-gateway .enviar-btn-gateway").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-gateway").value;

  // Cria um objeto com os dados
  const dados = {
    nome: nome,
  };

  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAzure("gateway", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});

// Event listener para o botão de enviar dentro do modal Tabela de Rotas
document.querySelector(".modal-tabela-rotas .enviar-btn-tabela-rotas").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-tabela-rotas").value;

  // Cria um objeto com os dados
  const dados = {
    nome: nome,
  };

  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAzure("tabela-de-rotas", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Linux
document.querySelector(".modal-grupo-seguranca-linux-aws .enviar-btn-grupo-seguranca-aws").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-grupo-seguranca").value;

  const dados = {
    nome: nome,
    descrição: descrição
  };

  try {
      await criarRecursosAzure("grupo-linux", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Windows
document.querySelector(".modal-grupo-seguranca-windows-aws .enviar-btn-grupo-seguranca-aws").addEventListener("click", async function (event) {
  event.preventDefault(); 
  
  const nome = document.getElementById("nome-grupo-seguranca").value;

  const dados = {
    nome: nome,
    descrição: descrição
  };

  try {
      await criarRecursosAzure("grupo-windows", dados);
  } catch (error) {
      console.error(error);
  }
});

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Linux
document.querySelector(".modal-maquina-virtual-linux-aws .enviar-btn-maquina-virtual-linux-aws").addEventListener("click", async function (event) {
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

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Windows
document.querySelector(".modal-maquina-virtual-windows-aws .enviar-btn-maquina-virtual-windows-aws").addEventListener("click", async function (event) {
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

// ----------------------------------------------------MENU----------------------------------------------------------- //

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


