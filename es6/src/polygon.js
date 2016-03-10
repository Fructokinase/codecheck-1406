//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square extends Polygon {

  constructor(height) {
    super(height, height);
    this.height = height;
    this.width = height;
    this.name = "Square";
  }

  get area() { return this.height * this.width;}
}

export class Circle extends Polygon {

  constructor(radius){
    super(radius, radius)
    this.radius = radius;
    this.height = radius * 2;
    this.width = radius * 2;
    this.name = "Circle";
  }

  get area() { return (this.radius ** 2) * Math.PI;}
}


