import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpployeeService {

  constructor(private httpClient:HttpClient) { }

  getJSONData(data):Observable<any>{
    return this.httpClient.post("http://localhost:3000/admin/fetchRecordsWithMssql",{
      "pageNum":data.pageNum,
      "NoOfRecords":data.NoOfRecords
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
