class BaseStation2 extends Sensor {
    //https://www.valvesoftware.com/en/index/base-stations
    //https://enterprise.vive.com/us/support/vive-pro/category_howto/tips-for-setting-up-the-base-stations.html
    
    constructor(X, Y, DEG, VERSION = 1) {
        const H_FOV = VERSION ? 160 : 150;
        const V_FOV = VERSION ? 115 : 110;
        const RANGE = 7;
        const NAME = VERSION ? "Valve Base Station 2.0" : "HTC/Valve Base Station 2.0";
        super(X, Y, DEG, H_FOV, V_FOV, RANGE, NAME);
    }

    drawAll() {
        this.drawArc(this.RANGE, 'rgba(0, 255, 0, 0.5)');
        this.drawArc(this.CLOSE, 'rgba(255, 0, 0, 0.2)');
        this.drawStation();
        this.drawMidline();
        return 1;
    }
}