export class Box {
  public id: number;
  public x: number;
  public y: number;
  public z: number;
  public width: number;
  public depth: number;
  public height: number;
  public qty: number;
  constructor(width, depth, height, qty) {
    this.width = width;
    this.depth = depth;
    this.height = height;
    this.qty = qty;
  }
}
