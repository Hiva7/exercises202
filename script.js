const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;

const playerImage=new Image();
playerImage.src='bluefire.png';
const spriteWidth=148;
const spriteHeight=235;
let frameX=0;
let frameY=0;
let frameChange=0;
let frameAnimate=0;
const staggerFrame=7;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, 226, 0, spriteWidth ,spriteHeight);
    if(frameAnimate%staggerFrame==0){
        if(frameX<7){
            frameX++;
        }
        else {
            frameX=0;
        }
        if(frameX==7){
            frameY=1;
        }
    }
    frameAnimate++;
    requestAnimationFrame(animate);
};
animate();

function About(){
    document.getElementById("menu").style.display="none";
    document.getElementById("back1").style.display="block";
    document.getElementById("aboutText").style.display="block";
};
function Back1(){
    document.getElementById("menu").style.display="block";
    document.getElementById("back1").style.display="none";
    document.getElementById("aboutText").style.display="none";
};
function Read(){
    document.getElementById("menu").style.display="none";
    document.getElementById("back2").style.display="block";
    document.getElementById("readText").style.display="block";
};
function Back2(){
    document.getElementById("menu").style.display="block";
    document.getElementById("back2").style.display="none";
    document.getElementById("readText").style.display="none";
};
function Social(){
    document.getElementById("menu").style.display="none";
    document.getElementById("back3").style.display="block";
    document.getElementById("socials").style.display="block";
}
function Back3(){
    document.getElementById("menu").style.display="block";
    document.getElementById("back3").style.display="none";
    document.getElementById("socials").style.display="none";
}