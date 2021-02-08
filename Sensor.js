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

    drawStation() {
        fill('rgba(0, 0, 0, 1)');
        circle(this.X, this.Y, 10);
        text(this.NAME, this.X-10, this.Y-10);
        return 1;
    }

    drawSafe(ideal = this.LEN) {
        fill(color('rgba(0, 255, 0, 0.2)'));
        arc(this.X, this.Y, ideal*sizescale, ideal*sizescale, 0-this.DEG, this.H_FOV-this.DEG, PIE);
        return 1;
    }

    drawUnsafe() {
        fill(color('rgba(255, 0, 0, 0.5)'));
        arc(this.X, this.Y, 0.5*sizescale, 0.5*sizescale, 0-this.DEG, this.H_FOV-this.DEG, PIE);
        return 1;
    }

    drawAll() {
        this.drawSafe();
        this.drawUnsafe();
        this.drawStation();
    }

    setSync() {
        this.sync = true;
        return 1;
    }
}