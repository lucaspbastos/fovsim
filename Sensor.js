class Sensor {
    constructor(X, Y, DEG, H_FOV, V_FOV, RANGE, NAME) {
        this.X = X;
        this.Y = Y;
        this.Vector = createVector(this.X, this.Y);
        this.DEG = DEG;
        this.H_FOV = H_FOV;
        this.V_FOV = V_FOV;
        this.RANGE = RANGE;
        this.NAME = NAME;
        this.CLOSE = 0.5;
    }


    drawArc(len, color) {
        let lastX = this.X;
        let lastY = this.Y;
        let x2;
        let y2;

        //TODO: convert to ray objects
        for (let i = (this.DEG-this.H_FOV/2); i < (this.DEG+this.H_FOV/2); i+=0.5) {
            stroke(color);
            x2 = this.X-cos(180-i)*sizescale*len;
            y2 = this.Y-sin(180-i)*sizescale*len;
            line(this.Vector.x, this.Vector.y, x2, y2);
            line(x2, y2, lastX, lastY);
            lastX = x2;
            lastY = y2;
        }
        stroke('black');
        return 1;
    }

    drawMidline() {
        stroke('blue');
        line(this.X, this.Y, this.X-cos(180-this.DEG)*sizescale*this.RANGE, this.Y-sin(180-this.DEG)*sizescale*this.RANGE);
        stroke('black');
        return 1;
    }

    drawStation() {
        fill('black')
        text(this.NAME, this.X - 10, this.Y - 10);
        stroke('black');
        fill(color('rgba(0, 0, 0, 1)'));
        circle(this.X, this.Y, 10);
        return 1;
    }

    setX(X) {
        this.X = X;
        return 1;
    }

    setY(Y) {
        this.Y = Y;
        return 1;
    }

    setDeg(DEG) {
        this.DEG = DEG;
        return DEG;
    }
}