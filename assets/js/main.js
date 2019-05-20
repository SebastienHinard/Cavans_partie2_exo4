//cette variable me permet de decaler tout le dessin si besoin
var xOff=300;
var c = document.getElementById('logoE2N');
var ctx = c.getContext('2d');
// grille
// ctx.strokeStyle="lightgrey"
// for(var x=50; x<2000; x+=50){
//     ctx.moveTo(x,0);
//     ctx.lineTo(x,2000);
// }
// for(var y=50; y<500; y+=50){
//     ctx.moveTo(0,y);
//     ctx.lineTo(2000,y);
// }
// ctx.stroke();
//lettre E
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth="6";
ctx.moveTo(550+xOff,150);
ctx.lineTo(450+xOff,150);
ctx.lineTo(450+xOff,350);
ctx.lineTo(550+xOff,350);
ctx.moveTo(450+xOff,250);
ctx.lineTo(550+xOff,250);
ctx.stroke();
//lettre N
ctx.moveTo(700+xOff,350);
ctx.lineTo(700+xOff,150);
ctx.lineTo(850+xOff,350);
ctx.lineTo(850+xOff,150);
ctx.stroke();
//chiffre 2
ctx.beginPath();
ctx.lineWidth=14;
ctx.fillStyle="#ea4e1d";
ctx.strokeStyle="#ea4e1d";
ctx.lineCap="square";
ctx.moveTo(550+xOff,150);
ctx.quadraticCurveTo(850+xOff,0,520+xOff,400);
ctx.lineTo(650+xOff,360);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth=1;
ctx.moveTo(655+xOff,352);
ctx.lineTo(665+xOff,344);
ctx.quadraticCurveTo(665+xOff,355,656+xOff,366)
ctx.fill();
//texte
ctx.beginPath();
ctx.fillStyle="#878787";
ctx.font="45px serif";
ctx.fillText("Ecole du numérique",700+xOff,400);
ctx.fillText("du Noyonnais",700+xOff,450);
//losanges
drawDiamond(925+xOff,150,1.5,'#ebebeb');
drawDiamond(900+xOff,185,1.5,'#ebebeb');
drawDiamond(950+xOff,185,1.5,'#595656');
drawDiamond(925+xOff,220,1.5,'#ea4e1d');
drawDiamond(900+xOff,255,1.5,'#595656');
drawDiamond(950+xOff,255,1.5,'#ebebeb');
drawDiamond(980+xOff,200,.8,'#ebebeb');
drawDiamond(1000+xOff,200,.8,'#ea4e1d');
drawDiamond(990+xOff,220,.8,'#595656');
//fonction qui dessine les diamants
function drawDiamond(x,y,size,color){
    ctx.fillStyle=color;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+10*size,y+10*size);
    ctx.lineTo(x+10*size,y+20*size);
    ctx.lineTo(x,y+30*size);
    ctx.lineTo(x-10*size,y+20*size);
    ctx.lineTo(x-10*size,y+10*size);
    ctx.lineTo(x,y);
    ctx.fill();
    return;
};
