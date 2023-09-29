// // Definir o tempo limite de inatividade em milissegundos (por exemplo, 30 minutos)
// var tempoInatividade = 5 * 60 * 1000; // 5 minutos
// var temporizadorInatividade;

// // Reiniciar o temporizador quando houver uma interação do usuário
// function reiniciarTemporizador() {
//   clearTimeout(temporizadorInatividade);
//   temporizadorInatividade = setTimeout(encerrarSessao, tempoInatividade);
// }

// // Função para encerrar a sessão
// function encerrarSessao() {
//   // Limpar os dados da sessão, como cookies ou armazenamento local
//   // Redirecionar para a página de login ou fazer outras ações necessárias
//   // Exemplo: redirecionar para a página de login
//   alert("Seção expirou");
//   logout();
//   //window.location.href = "/login";
// }

// // Monitorar eventos de interação do usuário para reiniciar o temporizador
// window.addEventListener("mousemove", reiniciarTemporizador);
// window.addEventListener("mousedown", reiniciarTemporizador);
// window.addEventListener("keypress", reiniciarTemporizador);
// window.addEventListener("touchstart", reiniciarTemporizador);

// // Iniciar o temporizador inicialmente
// reiniciarTemporizador();

// function logout() {
//   // Remover o cookie
//   document.cookie = "usuarioId=; path=/;";

//   // Redirecionar para a página de login
//   window.location.href = "/";
// }
