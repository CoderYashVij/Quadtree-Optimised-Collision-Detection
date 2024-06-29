let qtree;

function setup(){
    createCanvas(600,600);

    let boundary = new Rectangle(300,300,300,300);
    qtree = new QuadTree(boundary, 4);
}

function draw() {
    if (mouseIsPressed) {
        
        let m = new Point(mouseX, mouseY);
        qtree.insert(m);
    }
    background(0);
    qtree.show()
}