function isAuthenticated() {
    return localStorage.getItem('currentUser') !== null;
}

// Adicione este código no início das páginas que precisam de autenticação
if (!isAuthenticated()) {
    alert('Você precisa estar autenticado para acessar esta página.');
    window.location.href = './login.html'; // Redireciona para a página de login
}
