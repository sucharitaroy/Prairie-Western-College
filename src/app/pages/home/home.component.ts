import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // @ts-ignore
  @ViewChild('content') myButton!: ElementRef<HTMLButtonElement>;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private modalService: NgbModal) {
    setTimeout(function (){
      // @ts-ignore
      document.getElementById("ffight").click();
    },500)

    // this.myButton.nativeElement.click();
  }

  openCustomModal(content: any) {

    this.modalService.open(content,{ size: 'lg'});
  }
}
