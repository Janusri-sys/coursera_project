// const randomfruit=(fruits)=>{
//     const randomNum=Math.floor(Math.random()*fruits.length)
//     return fruits[randomNum]

// }

// let fruits=['banana','grape','apple']
// console.log(randomfruit(fruits))
// const weatherScorer=(weather)=>{
//     let score;
//     if(weather=='rainy'){
//         score=1
//     }
//     else if(weather=='sunny'){
//         score=-1
//     }
//     else{score=0}
//     return score

// }  
// weatherArray=['rainy','sunny','overcast']
// const randomweather=weatherArray[Math.floor(Math.random()*weatherArray.length)]
// console.log(weatherScorer(randomweather)) 


const totalScore={computerScore:0,playerScore:0}

function getComputerChoice(){
    const rpsChoice=['Rock','Paper','Scissors']
    return rpsChoice[Math.floor(Math.random()*3)]
}
function getResult(playerChoice,computerChoice){
    //won or lost
    let score
    if (playerChoice==computerChoice){
        score=0
    }
    else if(playerChoice=='Rock' && computerChoice=='Scissors'){
        score=1
    }
    else if(playerChoice=='paper' && computerChoice=='Rock'){
        score=1
    }
    else if(playerChoice=='Scissors' && computerChoice=='Rock'){
        score=1
    }
    else {
        score=-1
    }
    return score
}
function showResult(score,playerChoice,computerChoice){
    const resultDiv=document.getElementById('result')
    const handsDiv=document.getElementById('hands')
    const playerScoreDiv=document.getElementById('player-score')
    const computerScoreDiv=document.getElementById('computer-score')

    if(score==-1){
        resultDiv.innerText='You lose'
    }
    else if(score==0){
        resultDiv.innerText="It's a tie"

    }
    else{
        resultDiv.innerText="You won"
    }
    handsDiv.innerText=`${playerChoice} vs ${computerChoice}`
    playerScoreDiv.innerText=`PlayerScore : ${totalScore['playerScore']}`
    computerScoreDiv.innerText=`ComputerScore : ${totalScore['computerScore']}`



}
function onClickRPS(playerChoice){
    
   // console.log({playerChoice})
    const computerChoice=getComputerChoice()
    //console.log({computerChoice})
    const score=getResult(playerChoice,computerChoice)
    totalScore['playerScore']+=score
    totalScore['computerScore']-=score
    //console.log({score})
    //console.log(totalScore)
    showResult(score,playerChoice,computerChoice)


}
function playGame(){
    const rpsButtons=document.querySelectorAll('.rpsButton')
    

    rpsButtons.forEach(rpsButton=>{
        rpsButton.onclick=()=>onClickRPS(rpsButton.value)
    })
    const endGameButton=document.getElementById('endGameButton')
    endGameButton.onclick=()=>endGame(totalScore)
}
function endGame(totalScore){
    totalScore['playerScore']=0
    totalScore['computerScore']=0

    const resultDiv=document.getElementById('result')
    const handsDiv=document.getElementById('hands')
    const playerScoreDiv=document.getElementById('player-score')

    resultDiv.innerText=""
    handsDiv.innerText=""
    playerScoreDiv.innerText=""

}
playGame()