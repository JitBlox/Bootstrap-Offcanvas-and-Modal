import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas-demo',
  standalone: true,
  templateUrl: './offcanvas-demo.component.html',
  imports: [CommonModule]
})
export class OffcanvasDemoComponent {
  private offcanvasRef?: NgbOffcanvasRef;

  @ViewChild('offcanvas') public offcanvas: any;

  constructor(
    private offcanvasService: NgbOffcanvas
  ) {}

  public onCloseButton1Click($event: MouseEvent): void {
    this.offcanvasRef?.dismiss();
    $event.preventDefault();
  }

  public async onButton1Click($event: MouseEvent): Promise<void> {
    this.offcanvasRef = await this.offcanvasService.open(this.offcanvas, {  });
    $event.preventDefault();
  }
}
