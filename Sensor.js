class Sensor {
    constructor(X, Y, DEG, H_FOV, V_FOV, LEN, NAME) {
        this.X = X;
        this.Y = Y;
        this.DEG = DEG;
        this.H_FOV = H_FOV;
        this.V_FOV = V_FOV;
        this.LEN = LEN;
        this.NAME = NAME;
    }


    drawSafe(ideal = this.LEN) {
        let lastX = this.X;
        let lastY = this.Y;
        let x2;
        let y2;
        for (let i = (this.DEG-this.H_FOV/2); i < (this.DEG+this.H_FOV/2); i+=0.5) {
            stroke('green');
            x2 = this.X-cos(180-i)*sizescale*ideal;
            y2 = this.Y-sin(180-i)*sizescale*ideal;
            line(this.X, this.Y, x2, y2);
            line(x2, y2, lastX, lastY);
            lastX = x2;
            lastY = y2;
        }

        return 1;
    }

    drawUnsafe() {
        stroke(color('rgba(255, 0, 0, 0.5)'));
        //arc(this.X, this.Y, 0.5*sizescale, 0.5*sizescale, 0-this.DEG, this.H_FOV-this.DEG, PIE);

        return 1;
    }

    drawMidline() {
        stroke('blue');
        line(this.X, this.Y, this.X-cos(180-this.DEG)*sizescale, this.Y-sin(180-this.DEG)*sizescale);
        return 1;
    }

    drawStation() {
        fill(color('rgba(0, 0, 0, 1)'));
        circle(30,30,10)
    }

    drawAll() {
        this.drawSafe();
        this.drawUnsafe();
        this.drawStation();
        this.drawMidline();
        return 1;
    }

    setSync() {
        this.sync = true;
        return 1;
    }

    setDeg(DEG) {
        this.deg = DEG;
        return 1;
    }

    getDeg() {
        return this.deg;
    }
}