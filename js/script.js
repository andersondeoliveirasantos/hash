let x = document.querySelector('.x')

let o = document.querySelector('.o')

let boxes = document.querySelectorAll('.box')

let buttons = document.querySelectorAll('#buttons-container button')

let messageContainer = document.querySelector('#message')

let messageText = document.querySelector('#message p')

let secondPlayer

// Move counter ( contador de jogadas )
let player1 = 0
let player2 = 0

// Adding the click event to boxes ( Adicionando o evento click aos boxes )
for (let i = 0; i < boxes.length; i++) {

// When someone clicks on the box ( Quando alguém clicar na caixa )
  boxes[i].addEventListener('click', function() {
    let el = checkEl(player1, player2)

    // Checks if it already has X or O ( Verifica se já tem X ou O )
    if(this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true)
      this.appendChild(cloneEl)
  
        // Compute the game ( Computar a jogada )
        if(player1 == player2) {
          player1++
        } else {
          player2++
        }

        // Check who won ( Checar quem venceu )
        checkWinCondition() 
    }
  })
}

// See who will play ( Ver quem vai jogar )
function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x    
  } else {
    el = o
  }
  return el
}

// See who won ( Ver quem venceu )
function checkWinCondition() {
  let b1 = document.getElementById('block-1');
  let b2 = document.getElementById('block-2');
  let b3 = document.getElementById('block-3');
  let b4 = document.getElementById('block-4');
  let b5 = document.getElementById('block-5');
  let b6 = document.getElementById('block-6');
  let b7 = document.getElementById('block-7');
  let b8 = document.getElementById('block-8');
  let b9 = document.getElementById('block-9');

  // Check horizontal ( Checar horizontal )
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
    // x
    declareWinner('x')
    } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
    // o
    declareWinner('o')
    }
  }

  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
    // x
    declareWinner('x')
    } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
    // o
    declareWinner('o')
    }
  }

  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
    // x
    declareWinner('x');
    } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
    // o
    declareWinner('o');
    }
  }

  // Check vertical ( Checar vertical )
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
    // x
    declareWinner('x')
    } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
    // o
    declareWinner('o')
    }
  }

  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
    // x
    declareWinner('x');
    } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
    // o
    declareWinner('o');
    }
  }

  if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
    // x
    declareWinner('x');
    } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
    // o
    declareWinner('o');
    }
  }

  // Check diagonal ( Checar diagonal )
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
    // x
    declareWinner('x');
    } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
    // o
    declareWinner('o');
    }
  }  

  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
    // x
    declareWinner('x');
    } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
    // o
    declareWinner('o');
    }
  }  

  // Got old ( Deu velha )
  let counter = 0
  for(let i = 0; i < boxes.length; i++) {
    if(boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if(counter == 9) {
    declareWinner('Got old')
  }

}

// Clears the game, declares the winner and updates the scoreboard ( Limpa o jogo, declara o vencedor e atualiza o placar )
function declareWinner(winner) {
  
  let scoreboardX = document.querySelector('#scoreboard-1');
  let scoreboardY = document.querySelector('#scoreboard-2');
  let msg = ' ';

  if(winner == 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = 'Player 1 win';
  } else if(winner == 'o') {
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = 'Player 2 win';
  } else {
    msg = 'Got old';
  }

  // Display message ( Exibe mensagem )
  messageText.innerHTML = msg;
  messageContainer.classList.remove('hide');

  // Hide message ( Esconde mensagem )
  setTimeout(function() {
    messageContainer.classList.add('hide');
  }, 3000);

// Zero moves ( Zera jogadas )
  player1 = 0;
  player2 = 0;

// Remove x e o
let boxesTorRemove = document.querySelectorAll('.box div');
  for(let i = 0; i < boxesTorRemove.length; i++) {
    boxesTorRemove[i].parentNode.removeChild(boxesTorRemove[i])
  }
}
