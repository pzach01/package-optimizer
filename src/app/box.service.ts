import { Injectable } from "@angular/core";
import { Box } from "./box";

@Injectable({
  providedIn: "root"
})
export class BoxService {
  public boxes: Box[];

  constructor() {}
}
