import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  @Output() filterModel: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }
  modalRef: BsModalRef;
  key
  value
  finalFilters=[]
 

  generateFilters(){
    this.finalFilters.push({
      [this.key]:this.value
    })
  }

  clearFilters(){
    this.finalFilters=[]
  }

  finish(){
    this.filterModel.emit(this.finalFilters)  
    this.modalRef.hide();
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
