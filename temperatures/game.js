function game (){
    let answer =    parseInt(1+ Math.random() *1000 )
        let gamecurrindex = 0 
        let question
    do  {
        question = prompt("Enter a number")
        gamecurrindex++

        if(question<answer){
            console.log("pls try again , your guess was too low")
        }
        else if (question>answer){
            console.log("pls try again , your guess was too high")
        }
    } while ( answer != question )
    
    console.log("congratulations , you are a great gambler")
   if(gamecurrindex<=10){
    console.log("either you know the secret or you got lucky")
    }
    if(gamecurrindex===10){
        console.log(" Aha you know the secret")
    }
    if(gamecurrindex>10){
        console.log("You should be able to do better")
    }
  

}