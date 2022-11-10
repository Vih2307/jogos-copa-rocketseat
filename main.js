function creatGame(player1,hour,player2){
  return `
    <li>
    <img src="./Assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
      <img src="./Assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = 0.3;
function creatCard(date,day,games){
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  creatCard('24/11','quinta',
    creatGame('brazil','16:00','serbia') + 
    creatGame('brazil','13:00','switzerland') + 
    creatGame('brazil','13:00','switzerland')
  ) +
  creatCard('28/11','segunda',
    creatGame('brazil','13:00','switzerland') +
    creatGame('brazil','13:00','switzerland') +
    creatGame('brazil','13:00','switzerland')
  ) +
  creatCard('02/12','sexta',
    creatGame('cameroon','16:00','brazil') +
    creatGame('brazil','13:00','switzerland') +
    creatGame('brazil','13:00','switzerland')
  )
  

    
  
    
