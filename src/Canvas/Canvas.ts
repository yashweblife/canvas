class Color {
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
interface Component2D {
  x: number;
  y: number;
}
export class Canvas {
  private dom: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  public size: Component2D = { x: 300, y: 300 };
  constructor(parent: HTMLElement = document.body) {
    this.dom = document.createElement("canvas");
    this.ctx = this.dom.getContext("2d")!;
    parent.appendChild(this.dom);
  }
  public setSize = (x: number, y: number) => {
    this.size.x = x;
    this.size.y = y;
  };
  public clear = () => {
    this.ctx.clearRect(0, 0, this.size.x, this.size.y);
  };
  public begin = () => {
    this.ctx.beginPath();
  };
  public close = () => {
    this.ctx.closePath();
  };
  public fill = (color: Color = new Color()) => {
    this.ctx.fillStyle = color.toString();
    this.ctx.fill();
  };
  public stroke = (color: Color = new Color()) => {
    this.ctx.strokeStyle = color.toString();
    this.ctx.stroke();
  };
}
