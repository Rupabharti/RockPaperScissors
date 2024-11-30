let userscor=0;
let cumputerscor=0;
const pic=document.querySelectorAll(".pic");
let result=document.querySelector("#msg");
let yourscor =document.querySelector("#yourscor");

let compscor=document.querySelector("#compscor");

const playgame=(userchoice) =>{
  //  console.log("user choice =",userchoice);
    const gencomp=gencompchoice();
    //console.log( "computer choice =",gencomp);
   // let result=document.querySelector("#msg");
    if(gencomp==userchoice)
        userwin();
    else
    compwin();

};

const userwin=()=>
{
    result.innerText="you win !!"; 
    result.style.backgroundColor = "green";
    userscor  = userscor + 1;
    yourscor.innerText=userscor ;
}
const compwin=()=>
    {
        result.innerText="computer win !"; 
        result.style.backgroundColor = "red";
        cumputerscor= cumputerscor + 1;
        compscor.innerText=cumputerscor;
    }

 const gencompchoice=()=>{
   const options=["rock" ,"paper","scissors"];
   const ranindx=Math.floor(Math.random()*3);
   return options[ranindx];
 }




pic.forEach((pic)=>{
   // console.log(pic);
    pic.addEventListener("click",()=>{
      //  console.log("button was clicked");
        const userchoice =pic.getAttribute("id");
        playgame(userchoice);
    });
});