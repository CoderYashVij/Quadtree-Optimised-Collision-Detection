let dampingFactor = 0.9;
class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        //this.acceleration = createVector(random(-0.1,0.1),random(-0.1,0.1)); // Gravity
        this.size = 5;
        this.highlight = false;
    }

    intersects(other) {
        let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
        return (d<this.size+other.size);
    }

    setHighlight(value){
        this.highlight = value; 
    }

    move() {
        // this.position.x += random(-1,1);   
        // this.position.y += random(-1,1);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    render() {
        noStroke();
        if(this.highlight){
            fill(255);
        }
        else{
            fill(80);
        }
        ellipse(this.position.x, this.position.y, this.size*2);
    }

    bounceOffEdges() {
        // Check for collisions with edges
        if (this.position.x < 0 || this.position.x > width) {
            this.velocity.x *= -1; // Invert x velocity
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.velocity.y *= -1; // Invert y velocity
        }
    }
}