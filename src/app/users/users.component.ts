import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { TemplateRef } from '@angular/core';


// // const headers = new HttpHeaders()
//     .set('Content-Type', 'undefined')
//     .set('Access-Control-Allow-Origin', '*')
//     .set('Access-Control-Allow-Methods', 'POST')
//     .set('Access-Control-Allow-Headers', 'Origin')
//     .set('Access-Control-Allow-Credentials', 'true');
    
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  db_url:string = "https://chittoo-59c66-default-rtdb.firebaseio.com/";
  
  
  output?: string;
  obj : any[] = [
    {Name:"Rahul", Age : 10, Score : 90  },
    {Name:"Rohit", Age : 30, Score : 80  },
    {Name:"Raman", Age : 15, Score : 60  },
    {Name:"Raghav", Age : 16, Score : 91  },
    {Name:"Ronit", Age : 17, Score : 92  },
    {Name:"Rohan", Age : 17, Score : 96  },
    {Name:"Raghu", Age : 25, Score : 95  },
    {Name:"Ram", Age : 18, Score : 85  },
    {Name:"Ravi", Age : 26, Score : 85  },
    {Name:"Ranveer", Age : 11, Score : 85  },

  ]
  displayobj = this.obj.filter(element => element.Age <21);
  displayedColumns: string[] = ["Name", "Age" ,"Score","Addtowinners"];
  WName : string = "";
  WScore : number = 0;
  showTable:boolean = false;
  
  constructor(private http : HttpClient,private dialog : MatDialog) { }

  ngOnInit(): void {
    
    this.output = JSON.stringify(this.obj);
  }

  addUsers():void{
    this.http.post(this.db_url+"users.json",this.output).subscribe(Response => {console.log(Response)});
    this.showTable = true;
  }

  addtoWinners(WName:String, WScore:number):void{

    let winner = {Name : WName, Score : WScore};
    let winnerobj = JSON.stringify(winner);
    this.http.post(this.db_url + "winners.json",winnerobj ).subscribe(Res => {console.log(Res)});
    this.dialog.closeAll();
  }
  openDialog(templateRef:TemplateRef<any>,WName:string, WScore:number) {

    this.WName = WName; 
    this.WScore = WScore;
    let dialogRef = this.dialog.open(templateRef, {
     width: '300px'
   });

  }
}
