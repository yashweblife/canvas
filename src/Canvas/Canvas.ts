import { Color } from "./Color";

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
