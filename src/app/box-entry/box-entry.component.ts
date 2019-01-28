import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BoxService } from "../box.service";
import { Box } from "../box";

@Component({
  selector: "app-box-entry",
  templateUrl: "./box-entry.component.html",
  styleUrls: ["./box-entry.component.css"]
})
export class BoxEntryComponent implements OnInit {
  editBoxIndex: number = null;
  qtys: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];
  boxes: Box[] = [];

  addBox(width: number, depth: number, height: number, selectedQty: number) {
    this.boxes.push(new Box(width, depth, height, selectedQty));
  }
  deleteBox(i: number) {
    this.boxes.splice(i, 1);
    console.log(i);
  }
  editBox(i: number) {
    this.editBoxIndex = i;
    console.log(this.editBoxIndex);
  }
  saveBox(i: number, width: number, depth: number, height: number) {
    console.log("a");
    this.editBoxIndex = null;
    console.log(width);
    this.boxes[i] = new Box(width, depth, height, 1);
  }
  // changeQty(qty: number) {
  //   this.selectedQty = qty;
  // }
  goToThreeTest() {
    this.boxService.boxes = this.boxes;
    this.router.navigate(["/optimized-boxes"]);
  }
  constructor(private router: Router, private boxService: BoxService) {}

  ngOnInit() {}
}
