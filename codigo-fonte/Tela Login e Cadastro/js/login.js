// login.js
function loginRedirect() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('user-password').value;

  // Obtém os usuários cadastrados do localStorage
  var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verifica se as credenciais correspondem a um usuário cadastrado
  var usuarioCadastrado = usuariosCadastrados.find(function(user) {
      return user.username === username && user.password === password;
  });

  if (usuarioCadastrado) {
      // Login bem-sucedido, armazena informações do usuário no localStorage
      var currentUser = { username: username };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      alert('Login bem-sucedido!');
      window.location.href = '../Home_Page/home.html';
  } else {
      // Login falhou, exibe mensagem de erro
      alert('Nome de usuário ou senha incorretos. Tente novamente.');
  }
}
