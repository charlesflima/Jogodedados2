// Inicializando variáveis
let jogador1 = '';
let jogador2 = '';
let rodadaAtual = 1;
let rodadasJogadas = 0;
let vitoriasJogador1 = 0;
let vitoriasJogador2 = 0;

// Função para jogar o dado
function jogarDado(jogador) {
	const valorDado = Math.floor(Math.random() * 6) + 1;
	if(jogador === 'jogador1') {
		jogador1 = valorDado;
		document.getElementById('jogador1').innerHTML = `Jogador 1: ${jogador1}`;
	} else {
		jogador2 = valorDado;
		document.getElementById('jogador2').innerHTML = `Jogador 2: ${jogador2}`;
	}
	if(jogador1 !== '' && jogador2 !== '') {
		if(jogador1 > jogador2) {
			document.getElementById('resultado').innerHTML = `Rodada ${rodadaAtual}: Jogador 1 venceu!`;
			vitoriasJogador1++;
		} else if(jogador2 > jogador1) {
			document.getElementById('resultado').innerHTML = `Rodada ${rodadaAtual}: Jogador 2 venceu!`;
			vitoriasJogador2++;
		} else {
			document.getElementById('resultado').innerHTML = `Rodada ${rodadaAtual}: Empate!`;
		}
		rodadasJogadas++;
		if(rodadasJogadas === 10) {
			if(vitoriasJogador1 > vitoriasJogador2) {
				document.getElementById('resultado').innerHTML = "Jogador 1 venceu a partida!";
			} else if(vitoriasJogador2 > vitoriasJogador1) {
				document.getElementById('resultado').innerHTML = "Jogador 2 venceu a partida!";
			} else {
				document.getElementById('resultado').innerHTML = "Empate na partida!";
			}
			// Desativando os botões após o fim da partida
			document.getElementById('jogador1-btn').disabled = true;
			document.getElementById('jogador2-btn').disabled = true;
		}
		// Atualizando o número da rodada atual
		rodadaAtual++;
		// Resetando os valores dos dados
		jogador1 = '';
		jogador2 = '';
	}
}

// Função para reiniciar o jogo
function reiniciarJogo() {
	jogador1 = '';
	jogador2 = '';
	rodadaAtual = 1;
	rodadasJogadas = 0;
	vitoriasJogador1 = 0;
	vitoriasJogador2 = 0;
	document.getElementById('jogador1').innerHTML = 'Jogador 1: ';
	document.getElementById('jogador2').innerHTML = 'Jogador 2: ';
	document.getElementById('resultado').innerHTML = '';
	document.getElementById('jogador1-btn').disabled = false;
	document.getElementById('jogador2-btn').disabled = false;
}