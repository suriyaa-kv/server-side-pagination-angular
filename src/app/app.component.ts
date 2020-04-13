import { Component, OnInit } from '@angular/core';
import { EmpployeeService } from "./empployee.service"
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .content-wrapper {
    border: 1px solid #ddd; 
    border-radius: 4px; 
    padding-left: 10px; 
    margin-bottom: 10px;
  }
`]
})
export class AppComponent implements OnInit {
  title = 'ngxBootstarp';
  totalItems = 1;
  currentPage = 1;
  itemsPerPage =1000;
  empRecords;
  constructor(private empService: EmpployeeService) { }

  ngOnInit() {
    this.empService.fetchTotal().subscribe(total => {
      this.totalItems = total.count[0].TotalCount
      this.empService.getJSONData({ pageNum: this.currentPage, NoOfRecords: this.itemsPerPage }).subscribe(rows => {
        this.empRecords = rows;
      })
    })
  }

  getPage() {
    console.log("CurrentPAge", this.currentPage)
    this.empService.getJSONData({ pageNum: this.currentPage, NoOfRecords: this.itemsPerPage }).subscribe(rows => {
      this.empRecords = rows;
      let arr = []
      for (let i of rows) {
        arr.push(i.RollNo)
      }
      console.log(arr)
    })
  }

  downloadCSV(){
    this.empService.download().subscribe(data => 
        saveAs(data, 'kbvs.csv'),
        error => console.error(error)
    );
  }
}


