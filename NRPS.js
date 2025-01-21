let userScr=0;
let compScr=0;

let choices =document.querySelectorAll(".choice");
let mes=document.querySelector("#mes");

let userScore=document.querySelector("#user");
let compScore=document.querySelector("#comp");

const genCompChoice=()=>{
    const option=["Rock", "Paper", "Scissor"];
    const ind=Math.floor(Math.random()*3);
    return option[ind];
}

const gameDraw=()=>{
    // console.log("Game draw");
    mes.innerText="Game was Drawn";
    mes.style.backgroundColor="black";
}

const showWinner=(userWin, yourChoice,compChoice)=>{
    if(userWin){
        // console.log("User Win!");
        userScr++;
        userScore.innerText=userScr;
        mes.innerText=`You Win! Your ${yourChoice} beats ${compChoice}`;
        mes.style.backgroundColor="green";
    }
    else{
        // console.log("Your Lost (|");
        compScr++;
        compScore.innerText=compScr;
        mes.innerText=`You Lost. ${compChoice} beats your ${yourChoice}`;
        mes.style.backgroundColor="red";
    }
}

const playGame=(yourChoice)=>{
    // console.log("your choice: ", yourChoice);

    const compChoice=genCompChoice();
    // console.log("Comp choice: ", compChoice);

    if(yourChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin=true;

        if(yourChoice==="Rock"){
            //paper, sci
            userWin=compChoice==="Paper"? false:true;
        }
        else if(yourChoice==="Paper"){
            //rock, sci
            userWin=compChoice==="Scissor"? false:true;
        }
        else{
            //paper, rock
            userWin=compChoice==="Rock"? false:true;
        }
        showWinner(userWin, yourChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        // console.log("clicked");
        const yourChoice=choice.getAttribute("id");
        playGame(yourChoice);
    });
});


// math.random() generate any random number which less than the 1
// we want random no btw 0 to 2 so we multipled by 3 to math.random() 
// if we want random no btw 0 to 9 then we will multipling by 10 to math.random() 
// Math.floor(Math.random())  -it will give the int values rather than the floot values