class CV1 extends Sensor {
    //https://www.oculus.com/blog/oculus-roomscale-tips-for-setting-up-a-killer-vr-room/
    static count = 0;
    constructor(X, Y, DEG) {
        const H_FOV = 100;
        const V_FOV = 75;
        const RANGE = 3;
        const NAME = "Oculus Sensor";
        super(X, Y, DEG, H_FOV, V_FOV, RANGE, NAME);
    }

    drawAll() {
        const IDEAL = 1.8;
        const GOOD = 2.4;

        this.drawArc(this.RANGE, 'rgba(255, 128, 128, 0.5)');
        this.drawArc(GOOD, 'rgba(255, 165, 0, 0.4)');
        this.drawArc(IDEAL, 'rgba(0, 255, 0, 0.3)');
        this.drawArc(this.CLOSE, 'rgba(255, 0, 0, 0.2)');
        this.drawStation();
        this.drawMidline();
        return 1;
    }
}