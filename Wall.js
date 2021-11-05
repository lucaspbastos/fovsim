class Wall {
    constructor(vector1, vector2, name) {
        this.x1 = vector1.x;
        this.y1 = vector1.y;
        this.x2 = vector2.x;
        this.y2 = vector2.y;


        this.Boundary = line(vector1.x, vector1.y, vector2.x, vector2.y);
        this.Distance = dist(vector1.x, vector1.y, vector2.x, vector2.y)
        text(round(this.Distance/sizescale, 2)+"m", vector2.x, vector2.y);
    }
}