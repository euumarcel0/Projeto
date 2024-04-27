// Event listener para o botão de login que abre o modal
document.getElementById("loginawsBtn").addEventListener("click", function () {
  // Abre o modal
  // Selecione o elemento .modal-content
  const modalContent = document.querySelector(".modal-content");
  modalContent.style.display = "block";

  // Selecione o elemento .modal-content
  const modalaws = document.querySelector(".modal-aws");
  modalaws.style.display = "block";
});

// Event listener para o botão de enviar dentro do modal de acesso a AWS
document.getElementById("enviar-btn-acesso").addEventListener("click", async function (event) {
  event.preventDefault();

  // Obtém os valores dos campos de acesso
  const accessKey = document.getElementById("access_key").value;
  const secretAccessKey = document.getElementById("secret_access_key").value;
  const token = document.getElementById("token").value;

  // Verifica se os campos estão preenchidos
  if (accessKey && secretAccessKey && token) {
    // Cria um objeto com os dados de acesso
    const dados = {
      access_key: accessKey,
      secret_access_key: secretAccessKey,
      token: token
    };

    try {
      // Envia a requisição POST para a rota /aws/login
      const response = await fetch('http://localhost:5000/aws/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) // Envia os dados preenchidos pelo usuário
      });

      // Verifica se a resposta é OK
      if (response.ok) {
        // Se a resposta for OK, exibe uma mensagem de sucesso
        const data = await response.json();
        alert(data.message);
      } else {
        // Se houver algum erro na resposta, lança um erro para ser tratado no próximo catch()
        throw new Error('Erro na requisição.');
      }
    } catch (error) {
      // Exibe a mensagem de erro
      console.error('Erro:', error);
    }
  } else {
    // Se algum campo estiver vazio, exibe uma mensagem para o usuário preencher todos os campos
    alert('Por favor, preencha todos os campos de acesso.');
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



function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const passwordToggle = document.querySelector(`[onclick="togglePassword('${inputId}')]`);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
  } else {
    passwordInput.type = 'password';
    passwordToggle.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
  }
}


document.getElementById("loginawsBtn").addEventListener('click', function () {
  document.querySelector('.modal-content').style.display = "block";

  document.querySelector('.modal-aws').style.display = "block";
})

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