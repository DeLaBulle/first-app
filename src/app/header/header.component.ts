import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
