function setup() {
    //Criando Janela Canvas
    createCanvas(400,400);
    //Definindo medida 
    angleMode(DEGREES);
  }
  
  function draw() {
   //Setando Horário Local.
   let horas = hour();
   let minutos = minute();
   let segundos = second();
   
   background(0);
   translate(200, 200);
   rotate(-90);
   strokeWeight(8);
   noFill();
   
   //Definindo Arco Hora.
   stroke(255, 100, 255);
   let rotacaoHoras = map(horas % 12, 0, 12, -90, 360);
   arc(0, 0, 260, 260, 0, rotacaoHoras);

   //Definindo Arco Minutos.
   stroke(255, 100, 150);
   let rotacaoMinutos = map(minutos, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, rotacaoMinutos);

   //Definindo Arco Segundos.
   stroke(100, 255, 100);
   let rotacaoSegundos = map(segundos, 0, 60, 0, 360);
   arc(0, 0, 300, 300, 0, rotacaoSegundos);

   //Horário Local
   //text(horas + ':' + minutos + ':' + segundos,10,200);
  }