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
  
        // compute the game ( Computar a jogada )
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

// see who will play ( Ver quem vai jogar )
function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x    
  } else {
    el = o
  }
  return el
}

// See who won ( Ver quem venceu )
checkWinCondition() {
  let b1 = document.getElementById('block-1')
  let b2 = document.getElementById('block-2')
  let b3 = document.getElementById('block-3')
  let b4 = document.getElementById('block-4')
  let b5 = document.getElementById('block-5')
  let b6 = document.getElementById('block-6')
  let b7 = document.getElementById('block-7')
  let b8 = document.getElementById('block-8')
  let b9 = document.getElementById('block-9')

}