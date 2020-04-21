import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient:HttpClient) { }

  getJSONData(data):Observable<any>{
    console.log("IIn serivce",data)
    return this.httpClient.post("http://localhost:3000/admin/fetchRecordsWithMssql",{
      "pageNum":data.pageNum,
      "NoOfRecords":data.NoOfRecords,
      sort:data.sortParamtersFinal,
      requiredColumns:data.requiredColumnsListFinal,
      filters:data.filterColumnsList
    })
  }
  
  fetchTotal():Observable<any>{
    console.log("In Servicve")
    return this.httpClient.get("http://localhost:3000/admin/getTotal");
  }

  download(){
    return this.httpClient.get("http://localhost:3000/admin/downloadCSV",{
        responseType : 'blob',
        headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  
}
