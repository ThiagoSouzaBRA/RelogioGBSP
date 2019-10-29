//Definindo Cores
let corHora = (56, 72, 131);
let corMinuto = (228, 93, 80);
let corSegundo = (185, 239, 163);
let corBackground = (255, 241, 241);

function setup() {
    //Criando Canvas
    createCanvas(800,800);
    //Definindo medida 
    angleMode(DEGREES);
  }
  
  function draw() {
   background(corBackground);
   //Setando Horário Local.
   let horas = hour();
   let minutos = minute();
   let segundos = second();
   
   
   translate(400, 400);
   rotate(-90);
   noFill();
   
   //Definindo Arco Hora.
   stroke(255, 100, 255);
   let rotacaoHoras = map(horas % 12, 0, 12, -90, 360);
   strokeWeight(21);
   arc(0, 0, 520, 520, 0, rotacaoHoras);

   push();
   rotate(rotacaoHoras);
   strokeWeight(8);
   stroke(corHora);
   line(0, 0, 60, 0);
   pop();

   //Definindo Arco Minutos.
   stroke(255, 100, 150);
   let rotacaoMinutos = map(minutos, 0, 60, 0, 360);
   strokeWeight(21);
   arc(0, 0, 560, 560, 0, rotacaoMinutos);

   push();
   rotate(rotacaoMinutos);
   strokeWeight(4);
   stroke(corMinuto);
   line(0, 0, 100, 0);
   pop();
   
   //Definindo Arco Segundos.
   stroke(100, 255, 100);
   let rotacaoSegundos = map(segundos, 0, 60, 0, 360);
   strokeWeight(21);
   arc(0, 0, 600, 600, 0, rotacaoSegundos);

   push();
   rotate(rotacaoSegundos);
   strokeWeight(2);
   stroke(corSegundo);
   line(0, 0, 120, 0);
   pop();

   //Horário Local
   noStroke();
   rotate(90);
   fill(0);
   textSize(50);
   text(horas + ':' + minutos + ':' + segundos,-80,200);

   
 
}