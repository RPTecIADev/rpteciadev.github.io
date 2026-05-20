// Easter Egg Console.log
console.log(
  "%c>_ SISTEMA ACESSADO COM SUCESSO.", 
  "color: #7ee787; font-weight: bold; font-size: 16px;"
);
console.log(
  "%cProcurando um AI Builder e Dev Frontend? Você acabou de achar. Me chame no LinkedIn!", 
  "color: #58a6ff; font-size: 14px;"
);

const textToType = " Olá, pessoal! Sou técnico em manutenção eletrônica e funcionário público, atuando hoje na parte administrativa de uma escola estadual e buscando a transição de carreira para a área de Desenvolvimento e IA. Vamos nos conectar! Nessa página escondi 9 easter eggs, que uma vez encontrados ou digitados mudam algo na página. A única dica que posso te dar é que eles tem haver com tecnologia, games, animes, com quem eu sou ou com algum repositório de projeto pessoal. Te desafio a encontrá-los. Mostre-me do que é capaz rsrs...";
const typingElement = document.getElementById("typing-text");
let charIndex = 0;

function typeEffect() {
  if (charIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 30); // Velocidade da digitação
  }
}

// Inicia a animação quando a página carrega
document.addEventListener("DOMContentLoaded", typeEffect);

const track = document.getElementById('track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dotsNav = document.getElementById('carouselNav');
const dots = Array.from(dotsNav.children);

let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel(index) {
  // Move o track para a esquerda (multiplicando a largura por 100%)
  track.style.transform = `translateX(-${index * 100}%)`;
  
  // Atualiza as classes das bolinhas indicadoras
  dots.forEach(dot => dot.classList.remove('current-indicator'));
  dots[index].classList.add('current-indicator');
}

// Evento do Botão Avançar
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Volta para o início se passar do último
  }
  updateCarousel(currentIndex);
});

// Evento do Botão Voltar
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Vai para o último se voltar do primeiro
  }
  updateCarousel(currentIndex);
});

// Evento para clicar direto nas bolinhas indicadoras
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

const copyEmailBtn = document.getElementById('copyEmailBtn');
const terminalFeedback = document.getElementById('terminal-feedback');

// Defina seu e-mail real aqui
const userEmail = "rpteciadev@gmail.com"; 

copyEmailBtn.addEventListener('click', async () => {
  try {
    // Usa a API moderna do navegador para copiar o texto
    await navigator.clipboard.writeText(userEmail);
    
    // Exibe a mensagem de sucesso no estilo terminal
    terminalFeedback.textContent = `> rafael_sys: Email [${userEmail}] copiado para a área de transferência com sucesso.`;
    terminalFeedback.classList.add('show');
    
    // Altera temporariamente a cor do botão para dar feedback visual
    copyEmailBtn.style.borderColor = "#7ee787";
    copyEmailBtn.style.color = "#7ee787";

    // Oculta a mensagem e reseta o botão após 3 segundos
    setTimeout(() => {
      terminalFeedback.classList.remove('show');
      copyEmailBtn.style.borderColor = "#30363d";
      copyEmailBtn.style.color = "#c9d1d9";
    }, 3000);
    
  } catch (err) {
    terminalFeedback.style.color = "#ff5f56"; // Vermelho de erro
    terminalFeedback.textContent = "> rafael_sys: ERRO [Falha ao acessar a área de transferência].";
    terminalFeedback.classList.add('show');
  }
});

// --- SISTEMA DE EASTER EGG CHRONO ---
const secretWord = ['c', 'h', 'r', 'o', 'n', 'o'];
let keyBuffer = [];

window.addEventListener('keydown', (e) => {
  // Guarda a tecla pressionada e converte para minúscula
  keyBuffer.push(e.key.toLowerCase());
  
  // Mantém o tamanho do buffer igual ao tamanho da palavra secreta
  keyBuffer.splice(-secretWord.length - 1, keyBuffer.length - secretWord.length);
  
  // Verifica se o array digitado é igual à palavra secreta
  if (keyBuffer.join('') === secretWord.join('')) {
    activateTimeTravel();
  }
});

function activateTimeTravel() {
  document.body.classList.add('time-travel-active');
  
  setTimeout(() => {
    document.body.classList.toggle('chrono-theme');
    document.body.classList.remove('time-travel-active');
    
    // Usa o feedback do terminal (da seção de contato) para mostrar a mensagem
    const terminalFeedback = document.getElementById('terminal-feedback');
    if(terminalFeedback) {
      if (document.body.classList.contains('chrono-theme')) {
        terminalFeedback.textContent = "> Acesso liberado: A Epoch está pronta para viajar. O tempo é seu, desenvolvedor.";
        terminalFeedback.style.color = "#d4af37";
      } else {
        terminalFeedback.textContent = "> Retornando ao presente: 2026. Sistemas normais.";
        terminalFeedback.style.color = "#7ee787";
      }
      terminalFeedback.classList.add('show');
      
      setTimeout(() => {
        terminalFeedback.classList.remove('show');
      }, 5000);
    }
  }, 750); // Metade do tempo da animação
}

// --- EASTER EGG: CURTO-CIRCUITO ---
const hwSwitch = document.getElementById('hw-switch');

hwSwitch.addEventListener('click', () => {
  document.body.classList.add('blackout-active');
  
  setTimeout(() => {
    document.body.classList.remove('blackout-active');
    const terminalFeedback = document.getElementById('terminal-feedback');
    if (terminalFeedback) {
      terminalFeedback.textContent = "> Reiniciando sistema... A lógica de hardware nunca falha.";
      terminalFeedback.style.color = "#ffbd2e";
      terminalFeedback.classList.add('show');
      setTimeout(() => terminalFeedback.classList.remove('show'), 4000);
    }
  }, 10000); // Fica 10 segundos "desligado"
});

// --- EASTER EGG: ONE PIECE ---
const treasureX = document.getElementById('treasure-x');
const wantedModal = document.getElementById('wanted-modal');

if (treasureX) {
  treasureX.addEventListener('click', () => {
    wantedModal.classList.add('show-modal');
  });
}

// Clicar fora do poster fecha o modal
wantedModal.addEventListener('click', (e) => {
  if (e.target === wantedModal) {
    wantedModal.classList.remove('show-modal');
  }
});

// --- EASTER EGG: KONAMI CODE ---
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiBuffer = [];

window.addEventListener('keydown', (e) => {
  konamiBuffer.push(e.key);
  konamiBuffer.splice(-konamiCode.length - 1, konamiBuffer.length - konamiCode.length);
  
  if (konamiBuffer.join(',') === konamiCode.join(',')) {
    const duelAlert = document.getElementById('duel-alert');
    duelAlert.classList.add('show-duel');
    
    // Esconde o alerta depois de 5 segundos
    setTimeout(() => {
      duelAlert.classList.remove('show-duel');
      konamiBuffer = []; // Reseta o buffer
    }, 5000);
  }
});

// =======================================================================
// EASTER EGGS AVANÇADOS - MONOLITO
// =======================================================================

// --- 1. O MODO "OVERCLOCK" (Tributo ao Hardware) ---
{
  const btnOverclock = document.getElementById('btn-overclock');
  const warningBanner = document.getElementById('overclock-warning');
  let isOverclocked = false;

  if (btnOverclock && warningBanner) {
    btnOverclock.addEventListener('click', () => {
      isOverclocked = !isOverclocked;
      document.body.classList.toggle('overclocked', isOverclocked); // Muda fundo para tom vermelho
      
      if (isOverclocked) {
        warningBanner.textContent = "> Warning: CPU Overclocked at 5.0GHz"; // Imprime o aviso de terminal
        warningBanner.classList.add('show');
        btnOverclock.style.color = "#ff5f56";
      } else {
        warningBanner.classList.remove('show');
        btnOverclock.style.color = "";
      }
    });
  }
}

// --- 2. A CHUVA DE CÓDIGO (Matrix / Cyber) ---
{
  const canvas = document.getElementById('matrix-canvas');
  const secretWords = ['matrix', 'neo']; // Escuta a digitação secreta
  let buffer = [];
  let maxLen = Math.max(...secretWords.map(w => w.length));
  let isMatrixActive = false;
  let intervalId = null;

  if (canvas) {
    const ctx = canvas.getContext('2d');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/'.split('');
    let drops = [];

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = canvas.width / 15;
      drops = [];
      for (let x = 0; x < columns; x++) drops[x] = 1;
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#7ee787'; // Caracteres verdes caindo
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 15, drops[i] * 15);
        if (drops[i] * 15 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    window.addEventListener('keydown', (e) => {
      buffer.push(e.key.toLowerCase());
      if (buffer.length > maxLen) buffer.shift();

      const typed = buffer.join('');
      if (secretWords.some(word => typed.includes(word))) {
        buffer = [];
        isMatrixActive = !isMatrixActive;
        document.body.classList.toggle('matrix-mode', isMatrixActive);

        if (isMatrixActive) {
          setupCanvas();
          intervalId = setInterval(drawMatrix, 33);
        } else {
          clearInterval(intervalId);
        }
      }
    });

    window.addEventListener('resize', () => { if (isMatrixActive) setupCanvas(); });
  }
}

// --- 3. O DESPERTAR DA IA (Fantasma na Máquina) ---
{
  const iaTrigger = document.getElementById('ia-trigger'); // Sigla IA com span
  const typingText = document.getElementById('typing-text');
  let clickCount = 0;
  let isHacked = false;

  if (iaTrigger && typingText) {
    iaTrigger.addEventListener('click', () => {
      if (isHacked) return;
      clickCount++; // Conta os cliques
      
      if (clickCount === 3) { // Clicar três vezes exatas
        isHacked = true;
        // Para o cursor piscando e inicia anomalia
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.display = 'none';
        
        let currentText = typingText.textContent;
        // O texto se apaga sozinho simulando o backspace
        const eraseInterval = setInterval(() => {
          currentText = currentText.slice(0, -1);
          typingText.textContent = currentText;
          if (currentText.length === 0) {
            clearInterval(eraseInterval);
            typeHackMessage();
          }
        }, 30);
      }
    });

    function typeHackMessage() {
      // Sobrescreve com a mensagem em cor vermelha
      const hackStr = "> Sistema invadido. Olá humano, eu sou o modelo de linguagem local do Rafael. Ele programa muito bem, contrate-o."; //
      let idx = 0;
      typingText.classList.add('ia-hacked');
      
      const typeInterval = setInterval(() => {
        typingText.textContent += hackStr.charAt(idx);
        idx++;
        if (idx >= hackStr.length) clearInterval(typeInterval);
      }, 40);
    }
  }
}

// --- 4. O MISSINGNO (Erro 404 Glitch) ---
{
  const btnDontClick = document.getElementById('btn-dont-click'); // Botão "Não Clique" no rodapé
  const missingnoBlock = document.getElementById('missingno-block');

  if (btnDontClick && missingnoBlock) {
    btnDontClick.addEventListener('click', () => {
      // Mostra a anomalia (bloco de pixels corrompidos flutuando)
      missingnoBlock.classList.add('show');
    });

    missingnoBlock.addEventListener('click', () => {
      // Remove quando clicada para "limpar" a memória
      missingnoBlock.classList.remove('show');
    });
  }
}