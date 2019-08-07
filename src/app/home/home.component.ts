import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //h1Style: boolean = false;
  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

    //exemple http
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
    );
  }

  // exemple 1
  // firstClick() {
  //   console.log('clicked');
  // }

  //exemple 2 3
  // firstClick() {
  //   this.h1Style = true;
  // }

  //exemple data service
  // firstClick() {
  //   this.data.firstClick();
  // }

}
