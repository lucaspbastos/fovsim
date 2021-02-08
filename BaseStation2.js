let bs2Array = [];
class BaseStation2 extends Sensor {
    constructor(X, Y, DEG) {
        const H_FOV = INDEX ? 160 : 150;
        const V_FOV = INDEX ? 115 : 110;
        const LEN = 7;
        const NAME = INDEX ? "Valve Base Station 2.0" : "HTC/Valve Base Station 2.0";
        super(X, Y, DEG, H_FOV, V_FOV, LEN, NAME);
        bs2Array.push(this);
        this.id = bs2Array.length-1;
        this.NAME += " #"+int(this.id+1);
    }

    getID() {
        return this.id;
    }

    remove() {
        delete bs2Array[this.id];
    }
}