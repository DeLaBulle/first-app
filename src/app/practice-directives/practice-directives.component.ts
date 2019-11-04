import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.scss']
})
export class PracticeDirectivesComponent implements OnInit {
  display = false;
  displayKey: 'Display' | 'Hide' = 'Display';
  logTime = [];
  constructor() { }

  ngOnInit() {
  }
  onLogDisplay(){
    this.display = !this.display;
    this.displayKey = this.display ? 'Hide' : 'Display';
    this.logTime.push( new Date().getTime() );
  }
  onDeleteLine(index){
    this.logTime.splice(index,1);
  }
}
