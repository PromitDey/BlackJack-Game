//let firstCard = getrandomcard()
//let secondCard = getrandomcard()
//let sum = firstCard + secondCard
//let card = [firstCard, secondCard] 
let player = {
    name : "Promit",
    creds : 150
}
let sum = 0
let card = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-it")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.creds
//console.log(card)
//let sumEl = document.getElementById("sum-el")
function getrandomcard()
{
    number = Math.floor((Math.random()*13)+1)
    if(number > 10)
    {
        return 10
    }
    else if (number === 1)
    {
        return 11
    }
    else{
        return number
    }
}
function startgame()
{
    isAlive = true
    firstCard = getrandomcard()
    sceondCard = getrandomcard()
    card = [firstCard,sceondCard]
    sum = firstCard + sceondCard
    rendergame()
}
function rendergame()
{
    cardEl.textContent = "cards :"
    for(let i = 0; i<card.length; i++)
    {
        cardEl.textContent += card[i] + " "
    }
    sumEl.textContent = "Sum :" + sum
    //cardEl.textContent = "Cards :" + cards[0] +"   "+ cards[1]
if (sum < 21)
{
    message = "Do you want ot draw a new card ?"
}
else if(sum === 21)
{
    message = "Wohoo !! You have got BlackJack !!"
    hasBlackJack = true
}
else
{
    message = "You are out of the game !!"
    isAlive = false
}
messageEl.textContent = message
//console.log(message)
}
function newcard()
{
    //console.log("A new card will be drawn !!")
    if(isAlive === true && hasBlackJack === false){
    let newcard = getrandomcard()
    sum = sum + newcard
    card.push(newcard)
    rendergame()
    }
}