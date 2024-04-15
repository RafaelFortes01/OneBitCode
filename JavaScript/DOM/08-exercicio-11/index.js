function addPlayer () {
    const  verification = confirm('Tem certeza que deseja escalar este jogador?')

    const players = document.getElementById('players')

    const ul = document.createElement('ul')
    const li = document.createElement('li')

    const positionInput = document.getElementById('position')
    const positionValue = positionInput.value

    const nameInput = document.getElementById('name')
    const nameValue = nameInput.value

    const numberInput = document.getElementById('number')
    const numberValue = numberInput.value

    if(verification) {

        const data = document.createElement('p')
        const playerItem = data
        playerItem.id = 'player-' + numberValue
        data.innerText = positionValue + ': ' + nameValue + ' (' + numberValue + ')'
        
        players.appendChild(ul)
        ul.appendChild(li)
        li.appendChild(data)
    }

    positionInput.value = ''
    nameInput.value = ''
    numberInput.value = ''
    
}

function removePlayer() {
    const number = document.getElementById('removeNumber').value
    const playerToRemove = document.getElementById('player-' + number)

    const verification = confirm('Tem certeza que deseja remover este jogador?')

    if(verification) {
        playerToRemove.remove();
    }

    document.getElementById('removeNumber').value = '';
}