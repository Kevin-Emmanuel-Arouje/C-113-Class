function preload(){

}
function setup(){
    canvas=createCanvas(650, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
    color="";
}
function draw(){
    image(video,0,0,650,480);
    tint(color);
}
function takeSnapshot(){
    save("img.jpg");
}
function filterTint(){
 color=document.getElementById("color_name").value;
}