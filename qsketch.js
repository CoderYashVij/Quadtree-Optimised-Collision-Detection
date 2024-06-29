let qtree;

let count = 0;

function setup(){
    createCanvas(600,600);
    background(255);
    let boundary = new Rectangle(300,300,300,300);
    qtree = new QuadTree(boundary, 4);
    for(let i=0;i<300;i++){
        let x= randomGaussian(width/2,width/8);
        let y= randomGaussian(height/2,height/8);
        let p = new Point(x,y);
        qtree.insert(p);
    }
}

function draw(){
    background(0);
    qtree.show();

    stroke(0,255,0);
    rectMode(CENTER);
    let range = new Rectangle(mouseX,mouseY,100,100);
    rect(range.x, range.y, range.w *2, range.h*2);
    let points = qtree.query(range);
    //console.log(points);
    for(let p of points){
        strokeWeight(4);
        point(p.x,p.y);
    }
}