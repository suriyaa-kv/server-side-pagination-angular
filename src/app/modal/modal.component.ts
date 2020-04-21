import { Component, TemplateRef,OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  ngOnInit(){

  }

  @Output() fromModel: EventEmitter<any> = new EventEmitter();
  requiredColumns={
    RollNo:false,
    Name:false,
    Age:false,
  }

  // myFunc(){
  //   this.modalRef.hide();
  // }

  reqClm(){
    this.fromModel.emit(this.requiredColumns)  
      this.modalRef.hide();
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
