// ---------------------------------------------------URL---------------------------------------------------//
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

// ---------------------------------------------------Load Balancer---------------------------------------------------//

// Event listener para o botão de Load Balancer
document.getElementById("load-balancer-btn-aws").addEventListener("click", function (event) {
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
  const nome = document.getElementById("nome-load").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
  };
  
  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAWS("load-balancer", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
  });

// ---------------------------------------------------VPC---------------------------------------------------//

// Event listener para o botão de VPC
document.getElementById("vpc-Btn").addEventListener("click", function (event) {
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

  openModal("modal-vpc");
});

// Event listener para o botão de enviar dentro do modal de VPC
document.getElementById("enviar-btn-vpc").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-vpc").value;

  // Obtém os dados preenchidos pelo usuário
  const endereco = document.getElementById("endereco-vpc").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    endereco: endereco
  };
  
  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAWS("VPC", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
  });

// ---------------------------------------------------Subrede Pública---------------------------------------------------//

// Event listener para o botão de Subrede Pública
document.getElementById("subredep-btn").addEventListener("click", function (event) {
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

  openModal("modal-subrede-publica-aws");
});

// Event listener para o botão de enviar dentro do modal de Subrede Pública
document.getElementById("subredep-enviar").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-subrede-publica").value;

  // Obtém os dados preenchidos pelo usuário
  const endereco = document.getElementById("endereco-subrede-publica").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    endereco: endereco
  };
  
  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAWS("Subrede Pública", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
  });

// ---------------------------------------------------Subrede Privada---------------------------------------------------//

// Event listener para o botão de Subrede Privada
document.getElementById("subredepriv-btn").addEventListener("click", function (event) {
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

  openModal("modal-subrede-privada-aws");
});

// Event listener para o botão de enviar dentro do modal de Subrede Privada
document.getElementById("enviar-btn-subrede-privada-aws").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-subrede-privada").value;

  // Obtém os dados preenchidos pelo usuário
  const endereco = document.getElementById("endereco-subrede-privada").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    endereco: endereco
  };
  
  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAWS("Subrede Privada", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
  });

// ---------------------------------------------------Gateway---------------------------------------------------//

// Event listener para o botão de Gateway
document.getElementById("gateway-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

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

// Event listener para o botão de enviar dentro do modal de Gateway
document.getElementById("enviar-btn-gateway").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-gateway").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome
  };
  
  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAWS("gateway", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
  });

// ---------------------------------------------------Tabela de Rotas---------------------------------------------------//

// Event listener para o botão de Tabela de Rotas
document.getElementById("tabela-de-rotas-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

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

// Event listener para o botão de enviar dentro do modal de Tabela de Rotas
document.getElementById("enviar-btn-tabela-rotas").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-tabela-rotas").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome
  };
  
  try {
      // Chama a função para criar recursos na Azure, passando os dados
      await criarRecursosAWS("Tabela de Rota", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
  });

// ---------------------------------------------------Grupo de Segurança Linux---------------------------------------------------//
// Event listener para o botão de VPC
document.getElementById("grupo-seguranca-linux-btn-aws").addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

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

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Linux
document.getElementById(".enviar-linux-aws-api").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-grupo-seguranca-linux").value;
  const descricao = document.getElementById("descricao-grupo-linux").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    descricao: descricao
  };
  
  try {
      // Chama a função para criar recursos na AWS, passando os dados
      await criarRecursosAWS("Grupo de Segurança Linux", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});

// ---------------------------------------------------Grupo de Segurança Widnows---------------------------------------------------//
// Event listener para o botão de VPC
document.getElementById("grupo-seguranca-windows-btn-aws").addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

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

// Event listener para o botão de enviar dentro do modal de Grupo de Segurança Windows
document.getElementById("enviar-windows-aws").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-grupo-seguranca-windows-aws").value;
  const descricao = document.getElementById("descricao-grupo-windows-aws").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    descricao: descricao
  };
  
  try {
      // Chama a função para criar recursos na AWS, passando os dados
      await criarRecursosAWS("Grupo de Segurança Windows", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});

// ---------------------------------------------------Grupo de Máquina Virtual Windows---------------------------------------------------//

// Event listener para o botão de Máquina Windows
document.getElementById("maquinawin-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

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

  openModal("modal-maquina-virtual-windows-aws");
});

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Windows
document.getElementById("enviar-btn-maquina-virtual-windows-aws").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-maquina-windows").value;
  const usuario = document.getElementById("usuario-windows").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    usuario: usuario
  };
  
  try {
      // Chama a função para criar recursos na AWS, passando os dados
      await criarRecursosAWS("Máquina Virtual Windows", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});

// ---------------------------------------------------Grupo de Máquina Virtual Linux---------------------------------------------------//

// Event listener para o botão de Máquina Linux
document.getElementById("maquinalinux-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

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

  openModal("modal-maquina-virtual-linux-aws");
});

// Event listener para o botão de enviar dentro do modal de Máquina Virtual Linux
document.getElementById("enviar-btn-maquina-virtual-linux-aws").addEventListener("click", async function (event) {
  event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
  
  // Obtém os dados preenchidos pelo usuário
  const nome = document.getElementById("nome-maquina-linux").value;
  const usuario = document.getElementById("usuario-linux").value;
  
  // Cria um objeto com os dados
  const dados = {
    nome: nome,
    usuario: usuario
  };
  
  try {
      // Chama a função para criar recursos na AWS, passando os dados
      await criarRecursosAWS("Máquina Virtual Linux", dados);
  } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
  }
});


