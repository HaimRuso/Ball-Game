const playingField = document.getElementById("playing-field")
const block=document.getElementById("block")
block.style.backgroundColor="yellow"
//create element h1
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")// add atribute to your element
document.getElementById("container").style.marginTop="300px"

//create new element h2
const subHeader=document.createElement("h2")
subHeader.innerHTML="Created by Haim Ruso"
subHeader.style.color="green"
subHeader.style.fontFamily = "Helvetica"
document.body.appendChild(subHeader)
subHeader.setAttribute("class", "my-sub-header")

//stroe in clickers in variables
let ball = document.getElementById("block")
let field=document.getElementById("playing-field")
let up=document.getElementById("up")
let down=document.getElementById("down")
let right=document.getElementById("right")
let left=document.getElementById("left")
let arrows=document.getElementById('arrows')

//methoeds
//move up
up.onclick=function(){
    up = parseInt(ball.style.bottom) || 0
    up -= 15
   if(up>=0){
       ball.style.bottom = up + "px"
   }
   ball.style.top=ball.style.bottom
}

//move down
down.onclick=function(){
    down = parseInt(ball.style.top) || 0
    down += 15
   if(down <= field.offsetHeight - ball.offsetWidth - arrows.offsetHeight){
   ball.style.top = down + "px"
   }
   ball.style.bottom=ball.style.top
}

//move right
    right.onclick = function() {
    right = parseInt(ball.style.left) || 0
        right+=15
    if(right <= (field.offsetWidth-ball.offsetWidth-10)) {
        ball.style.left = right + "px"
    }
    ball.style.right=ball.style.left
}
//move left

    left.onclick=function(){
    left=parseInt(ball.style.right) || 0
    left-=15
    if(left>=0){
    ball.style.right =left+"px"
    }
    ball.style.left=ball.style.right
}

