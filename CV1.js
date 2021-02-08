let orArray = [];
class CV1 extends Sensor {
    static count = 0;
    constructor(X, Y, DEG) {
        const H_FOV = 100;
        const V_FOV = 75;
        const LEN = 3;
        const NAME = "Oculus Sensor";
        super(X, Y, DEG, H_FOV, V_FOV, LEN, NAME);
        orArray.push(this);
        this.id = orArray.length-1;
    }

    drawSafe() {
        const IDEAL = 1.8;
        const GOOD = 2.4;

        fill(color('rgba(255, 128, 128, 0.5)'));
        arc(this.X, this.Y, this.LEN*sizescale, this.LEN*sizescale, 0-this.DEG, this.H_FOV-this.DEG, PIE);

        fill(color('rgba(255, 165, 0, 0.5)'));
        arc(this.X, this.Y, GOOD*sizescale, GOOD*sizescale, 0-this.DEG, this.H_FOV-this.DEG, PIE);

        super.drawSafe(IDEAL);
    }

    getID() {
        return this.id;
    }

    remove() {
        delete bs2Array[this.id];
    }
}