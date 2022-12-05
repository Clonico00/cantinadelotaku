/*utilizando la libreria PJ5s , hacer un canvas con 3 pelotas que se muevan inicialmente en direcciones aleatoriamente y que 
reboten teniendo en cuenta el borde del circulo, tambien cuando reboten que cambien de color*/
var pelota1;
var pelota2;
var pelota3;
function setup() {
    createCanvas(400, 400);
    pelota1 = new Pelota();
    pelota2 = new Pelota();
    pelota3 = new Pelota();
}
function draw() {
    background(220);
    pelota1.mostrar();
    pelota1.mover();
    pelota1.rebotar();
    pelota2.mostrar();
    pelota2.mover();
    pelota2.rebotar();
    pelota3.mostrar();
    pelota3.mover();
    pelota3.rebotar();
}
class Pelota {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.tam = 20;
        this.velx = random(-5, 5);
        this.vely = random(-5, 5);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }
    mostrar() {
        fill(this.color);
        ellipse(this.x, this.y, this.tam, this.tam);
    }
    mover() {
        this.x = this.x + this.velx;
        this.y = this.y + this.vely;
    }
    rebotar() {
        if (this.x > width || this.x < 0) {
            this.velx = this.velx * -1;
            this.color = color(random(0, 255), random(0, 255), random(0, 255));
        }
        if (this.y > height || this.y < 0) {
            this.vely = this.vely * -1;
            this.color = color(random(0, 255), random(0, 255), random(0, 255));
        }
    }
}




