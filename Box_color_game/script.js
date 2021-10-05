let colorDiv = document.querySelectorAll(".color");
let boxDiv = document.querySelectorAll(".box");
let colorSelected ;

for(let i = 0 ; i < colorDiv.length ; i++) {
    colorDiv[i].addEventListener("click", function(e){
        colorSelected = e.currentTarget.classList[1];
        console.log("colorSelected", colorSelected);
    });

}

for(let i = 0 ; i < boxDiv.length ; i++) {
    boxDiv[i].addEventListener("click", function(e){
        if(boxDiv[i].classList.length == 1){
           console.log("if")
           e.currentTarget.classList.add(colorSelected);
       } else{
           if(e.target.classList[1] === colorSelected){
                e.target.classList.remove(colorSelected)
           } else{
                let color = e.target.classList[1];
                console.log("color", color);
                e.target.classList.remove(color);
                e.target.classList.add(colorSelected)
                console.log("remved color", color)
           }
       }
    })
}

