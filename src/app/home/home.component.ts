import { Component, OnInit } from '@angular/core';
import { debug } from 'util';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: String = 'Add an item';
  goalText: String = 'life goal...';
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem(): void {
    if (this.goalText !== '') {
      this.goals.push(this.goalText);
      this.itemCount = this.goals.length;
      this.goalText = '';
      this._data.changeGoal(this.goals);
    }
  }

  deleteItem(i: number): void {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
