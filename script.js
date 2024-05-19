
let yourscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msgcontainer");
let ys=document.querySelector("#you");
let cs=document.querySelector("#comp");
const compchoi =()=>{
    const option=["rock","paper","scissor"];
    return(option[ Math.floor(Math.random()*3)]);
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin===true){
        msg.innerText=`you win.your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        yourscore++;
        ys.innerText= yourscore;

    }else{
        msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore++; 
        cs.innerText=compscore;

    }
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was a draw. play again!";
    msg.style.backgroundColor="black";
}
const playgame = (userchoice)=>{
    const compchoice= compchoi();
    console.log("userchoice "+ userchoice);
    console.log("compchoice "+ compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compchoice==="scissor"?true:false;
        }else if(userchoice==="paper"){
            userwin= compchoice==="rock"? true:false;
        }else{
            userwin=compchoice==="paper"? true:false;
        }
        showwinner(userwin,userchoice,compchoice);
        }

    }
      
choices .forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        
    })
    
});