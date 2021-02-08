let bsArray = [];
class BaseStation extends Sensor {
    constructor(X, Y, DEG) {
        const H_FOV = 120;
        const V_FOV = 120;
        const LEN = 5;
        const NAME = "Base Station 1.0";
        super(X, Y, DEG, H_FOV, V_FOV, LEN, NAME);
        bsArray.push(this);
        this.id = bsArray.length-1;
    }

    getID() {
        return this.id;
    }

    remove() {
        delete bs2Array[this.id];
    }
}