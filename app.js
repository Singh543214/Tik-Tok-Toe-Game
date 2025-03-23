let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let msgs=document.querySelector("#msg");
let newGamebt=document.querySelector("#newG");
let resetbt=document.querySelector("#reset");
let turn0=true;
let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const Reset=()=>{
    turn0=true;
    enable();
    msgContainer.classList.add("Hide");
    
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msgs.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("Hide");
    disable();
    newgame();
}
const checkWinner=()=>{
    for(let pattern of arr){
        //console.log(pattern);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
    }
}

}
newGamebt.addEventListener("click",Reset);
resetbt.addEventListener("click",Reset);