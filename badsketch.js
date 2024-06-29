let badparticles = [];

function setup(){
    createCanvas(600,400);
    for (let i=0;i<1000;i++){
        badparticles[i] = new Particle(random(width),random(height));
    }
}

function draw(){
    background(0);
    for (let p of badparticles){
        p.move();
        p.render();
        p.bounceOffEdges();
        p.setHighlight(false);
    }

    for(let p of badparticles) {
        for (let other of badparticles){
            if(p!== other && p.intersects(other)){
                p.setHighlight(true);
            }
        }
    }
}