import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-demo',
  standalone: true,
  templateUrl: './modal-demo.component.html',
  imports: [CommonModule]
})
export class ModalDemoComponent {
  private modalRef?: NgbModalRef;

  @ViewChild('modal') public modal: any;

  constructor(
    private modalService: NgbModal
  ) {}

  public onCloseButton1Click($event: MouseEvent): void {
    this.modalRef?.dismiss();
    $event.preventDefault();
  }

  public onButton1Click($event: MouseEvent): void {
    this.modalRef?.dismiss();
    $event.preventDefault();
  }

  public onButton2Click($event: MouseEvent): void {
    this.modalRef?.close();
    $event.preventDefault();
  }

  public async onButton3Click($event: MouseEvent): Promise<void> {
    this.modalRef = await this.modalService.open(this.modal, {  });
    $event.preventDefault();
  }
}
