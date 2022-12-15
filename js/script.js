let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = <document.querySelectorAll('#buttons-container button')
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
    let el
    if (player1 == player2) {
      el = x    
    } else {
      el = o
    }
  })
}