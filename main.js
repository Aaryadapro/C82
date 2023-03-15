var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="black";
width=5;

canvas.addEventListener("mouseDown", my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
console.log("event is mouseDown");
}
canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
console.log("event is mouseUp");
}
canvas.addEventListener("mouseLeave", my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseLeave";
console.log("event is mouseLeave");
}
canvas.addEventListener("mouseMove", my_mousemove);
function my_mousemove(){
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        
        console.log("Last position of x = "+ last_position_of_x +", Last position of y = "+ last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x = "+ current_position_of_x +", Current position of y = "+ current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);

        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
