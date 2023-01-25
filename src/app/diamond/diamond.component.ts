import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss']
})
export class DiamondComponent implements OnInit {
  aside = new FormControl('');
  alpha = new FormControl('');
  perimeter = new FormControl('');
  area = new FormControl('');

  perimeterVisible = false;
  areaVisible = false;

  constructor() { }

  ngOnInit(): void {
  }
  onKeyup(event:any) {
    if (event.key == "Enter") {
      this.onEnterHandler();
    }
  }
  onEnterHandler() {
    this.startCalculations();
  }
  startCalculations() {
    let aside = Number(this.aside.value);
    let alpha = Number(this.alpha.value);
    let perimeter = this.calcPerimeter(aside);
    let area = this.calcArea(aside, alpha);
    this.perimeter.setValue(String(perimeter));
    this.area.setValue(String(area));
    this.perimeterVisible = true;
    this.areaVisible = true;
  }
  calcPerimeter(aside : number) {
    return aside * 4;
  }
  calcArea(aside: number, alpha: number) {
    let rad = alpha * Math.PI / 180;
    let area = Math.pow(aside, 2) * Math.sin(rad);
    return area;
  }
  onClickCalcButton() {
    this.startCalculations();
  }
}
