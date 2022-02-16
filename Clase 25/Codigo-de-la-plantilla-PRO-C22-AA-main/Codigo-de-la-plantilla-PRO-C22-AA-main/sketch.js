const World = Matter.World 
const Bodies = Matter.Bodies
const Engine = Matter.Engine 

var world 
var engine 
var pistola, a=15, balas, a
var fondo, torre, barco, municionMatriz=[]



function preload() {
fondo = loadImage("assets/background.gif")
torre = loadImage("assets/tower.png")
}

function setup() {
createCanvas(1200,600)
angleMode(DEGREES)
a=15
engine = Engine.create();
world = engine.world;
pistola = new ClaseCannon(140,130,130,100,a)

barco = new ClaseBarcos(1250,500,20,40)





}

function draw() {
image(fondo,0,0,width,height)
image(torre,50,210,150,300)
Engine.update(engine);
pistola.Mostrar()

barco.MostrarBarco()
//barco=Matter.Body.setVelocityX(-10)
//disparar()
for(var I = 0;I<municionMatriz.length;I++){
    Mostrarbalas(municionMatriz[I],I)

}

}

function keyPressed(){
    if(keyCode===DOWN_ARROW){
    //balas.Disparos()
    balas = new ClaseBalas(pistola.x,pistola.y) 
    balas.trayectoBala=[]
    Matter.Body.setAngle(balas.body,pistola.a)    
    municionMatriz.push(balas)
    console.log("indicadorBalas",municionMatriz.length)
   
    }

}
  
function Mostrarbalas(bala,index){
    if(bala){
     bala.MostrarBala() 
    }
   
}

function keyReleased(){
    if(keyCode===DOWN_ARROW){
        municionMatriz[municionMatriz.length-1].Disparos();
    }
}
