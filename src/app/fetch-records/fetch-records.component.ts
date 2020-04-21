import { Component, OnInit,TemplateRef  } from '@angular/core';
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
  requiredColumnsList=[]
  filtersConditonsFinal=[]
 
  sortable={
    RollNo:null,
    Name:null,
    Age:null,
    DoB:null,
  }

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.fetchTotal().subscribe(total => {
      this.totalItems = total.count[0].TotalCount
      // this.empService.getJSONData({ pageNum: this.currentPage, NoOfRecords: this.itemsPerPage }).subscribe(rows => {
      //   this.empRecords = rows;
      // })
    })
  }

  getPage() {
    let sortParamtersFinal=this.getSortParams();
    let requiredColumnsListFinal=this.requiredColumnsList
    let filterColumnsList=this.filtersConditonsFinal
    console.log("sortParamtersFinal",sortParamtersFinal)
    console.log("Requied Columns",requiredColumnsListFinal)
    console.log("filter Conditions",filterColumnsList)
    let backendArgs={
      pageNum: this.currentPage, 
      NoOfRecords: this.itemsPerPage ,
      sort:sortParamtersFinal,
      requiredColumns:requiredColumnsListFinal,
      filters:filterColumnsList
    }


    this.empService.getJSONData(backendArgs).subscribe(rows => {
      this.empRecords = rows;
    })
  }

  downloadCSV(){
    this.empService.download().subscribe(data => 
        saveAs(data, 'kbvs.csv'),
        error => console.error(error)
    );
  }

  getSortParams(){
    let sort=[];
    for(let key in this.sortable){
      if(this.sortable[key]!=null){
        if(this.sortable[key]){
          sort.push({'sortBy':key,'sortType':'asc'})
        }else{
          sort.push({'sortBy':key,'sortType':'desc'})
        }
      }
    }
    return sort;
  }

  getRequiredColumnsList(val) {
    let tempArr=[]
    this.requiredColumnsList=[]
    for(let key in val){
      if(val[key]==true){
        tempArr.push(key)
      } 
    }
    this.requiredColumnsList=[...tempArr]
  }

  getFiltersList(val){
   this.filtersConditonsFinal=val
  }

}
