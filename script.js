let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", () =>{
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName !== "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
        }
        if(click){
            draw.innerHTML = "Now you can draw";
        }
        else{
            draw.innerHTML = "Click to begin drawing";
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("What canvas size would you like?")
    let message = document.querySelector("#message");
    if (input === ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provide number between 1 and 100";
    }
    else{
        message.innerHTML = "Creating Canvas";
        return input;
    }
}

function colorDiv(){
    if(click){   
        if (color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = "black"
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}