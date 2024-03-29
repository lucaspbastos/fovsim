class BaseStation extends Sensor {
    //SRC: https://www.vive.com/us/support/vive/category_howto/tips-for-setting-up-the-base-stations.html
    constructor(X, Y, DEG) {
        const H_FOV = 120;
        const V_FOV = 120;
        const RANGE = 5;
        const NAME = "Base Station 1.0";
        super(X, Y, DEG, H_FOV, V_FOV, RANGE, NAME);
    }

    drawAll() {
        this.drawArc(this.RANGE, 'rgba(0, 255, 0, 0.5)');
        this.drawArc(this.CLOSE, 'rgba(255, 0, 0, 0.2)');
        this.drawStation();
        this.drawMidline();
        return 1;
    }

    //TODO: implement sync
    setSync() {
        this.sync = true;
        return 1;
    }
}