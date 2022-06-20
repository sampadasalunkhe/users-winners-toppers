import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {

  db_url:string = "";
  obj :any;
  displayobj : any;
  displayedColumns: string[] = ["Name","Age","Score"];

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.db_url = "https://chittoo-59c66-default-rtdb.firebaseio.com/"
    this.getdata();
  }
  getdata():void{

    this.http.get(this.db_url + 'users.json/' ).subscribe((Res) => {
      
      const map = new Map(Object.entries(Res));
      const values = Array.from(map.values());
      console.log(values);
      this.obj = values[0];
      this.displayobj = this.obj.filter(element => element.Score > 90)
    });
    
   
  }

}
