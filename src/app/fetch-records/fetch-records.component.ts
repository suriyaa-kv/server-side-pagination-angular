import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service"
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-fetch-records',
  templateUrl: './fetch-records.component.html',
  styleUrls: ['./fetch-records.component.css']
})
export class FetchRecordsComponent implements OnInit {
  totalItems = 1;
  currentPage = 1;
  itemsPerPage =1000;
  empRecords;
  constructor(private empService: EmployeeService) { }

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
