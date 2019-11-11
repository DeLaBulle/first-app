import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  units = ['sans', 'CS', 'CC', 'g', 'ml'];
  constructor() { }

  ngOnInit() {
  }

}
