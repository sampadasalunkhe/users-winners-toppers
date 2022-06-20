import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import winner from './winnersmodel';


@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})



export class WinnersComponent implements OnInit {

  db_url:string = "";
  obj :any;
  displayedColumns: string[] = ["Name","Score"];

  constructor(private http : HttpClient) {}
  

  ngOnInit(): void {

    this.db_url = "https://chittoo-59c66-default-rtdb.firebaseio.com/"
    this.getdata();
  }

  getdata():void{

    this.http.get(this.db_url + 'winners.json/' ).subscribe((Res) => {
      
      const map = new Map(Object.entries(Res));
      const values = Array.from(map.values());
      console.log(values);
      this.obj = values;
    });
    
   
  }
}
