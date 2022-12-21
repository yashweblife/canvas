export class Color {
    public r: number = 0;
    public g: number = 0;
    public b: number = 0;
    public a: number = 1;
    constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 1) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
    public toString = () => {
      return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    };
  }