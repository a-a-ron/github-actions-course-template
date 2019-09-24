import Game from './game.js'

let p1, p2
while (!p1) {
  p1 = window.prompt('Enter player 1 name:')
}

while (!p2 && p1 !== p2) {
  p2 = window.prompt(p1 === p2
    ? `Please enter a different name than ${p1}.`
    : 'Enter player 2 name:')
}

window.onload = () => {
  const game = new Game(p1, p2)
  const turn = document.getElementById('turn')
  const player = document.getElementById('player')
  player.innerText = game.player

  document.querySelectorAll('td').forEach((el) => {
    el.onclick = (evt) => {
      el.onclick = undefined
      evt.target.innerText = game.sym
      evt.target.onclick = undefined

      const [row, col] = evt.target.classList
      game.turn(row, col)

      if (game.hasWinner()) {
        turn.innerText = `${game.player} wins!`
        document.querySelectorAll('td').forEach(el => {
          el.onclick = undefined
        })
      } else {
        game.nextPlayer()
        player.innerText = game.player
      }
    }
  })
}
