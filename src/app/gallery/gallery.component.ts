import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1, transform: 'scale(1) rotate(0deg)' })),
      state(
        'hidden',
        style({ opacity: 0, transform: 'scale(1.5) rotate(30deg)' })
      ),
      transition(
        'shown => hidden',
        animate(
          '400ms ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ])
        )
      ),
      transition('hidden => shown', animate('300ms ease-in')),
    ]),
  ],
})
export class GalleryComponent implements OnInit {
  btnObj = [
    'Show all',
    'Bridal',
    'Groom',
    'Coloring',
    'Styling',
    'Hair Patch',
    'MakeUp',
  ];
  imgObjData = [
    {
      path: '../../assets/images/bridal.jpg',
      name: 'Bridal',
      details: 'Bridal MakeUp',
    },
    {
      path: '../../assets/images/carousel/c3.jpg',
      name: 'Bridal',
      details: 'Bridal MakeUp',
    },
    {
      path: '../../assets/images/carousel/c4.jpg',
      name: 'Hair Patch',
      details: 'Hair Wig',
    },
    {
      path: '../../assets/images/carousel/c5.jpg',
      name: 'Coloring',
      details: 'Hair Coloring',
    },
    {
      path: '../../assets/images/carousel/c6.jpg',
      name: 'Styling',
      details: 'Hair Styling',
    },
    {
      path: '../../assets/images/carousel/c2.jpg',
      name: 'Styling',
      details: 'Hair Styling',
    },
    {
      path: '../../assets/images/groom_package.jpg',
      name: 'Groom',
      details: 'Groom MakeUp',
    },
    {
      path: '../../assets/images/groom2.jpg',
      name: 'Groom',
      details: 'Groom MakeUp',
    },
    {
      path: '../../assets/images/hair.jpg',
      name: 'Coloring',
      details: 'Hair Coloring',
    },
    {
      path: '../../assets/images/carousel/c1.jpg',
      name: 'MakeUp',
      details: 'MakeUp & Styling',
    },
  ];
  imgObj;
  visiblityState;
  isPreviousSelected;
  //isButtonActive = false;
  selectedIndex: number = 0;
  closeResult: string;
  imagePath: string;
  constructor(private modalService: NgbModal) {
    this.imgObj = this.imgObjData;
    this.visiblityState = 'shown';
    this.isPreviousSelected = 'Show all';
  }

  ngOnInit(): void {}
  filterImgObj(event, index) {
    // this.visiblityState = 'true';
    //this.isButtonActive = true;
    this.selectedIndex = index;
    if (event.target.innerText !== 'Show all') {
      this.imgObj = this.imgObjData.filter(
        (obj) => obj.name === event.target.innerText
      );
    } else {
      //this.visiblityState = 'shown';

      this.imgObj = this.imgObjData;
    }

    this.visiblityState = 'hidden';
    setTimeout(() => {
      if (this.visiblityState === 'shown') this.visiblityState = 'hidden';
      else this.visiblityState = 'shown';
    }, 301);
  }
  open(content, imgPath) {
    this.imagePath = imgPath;
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        backdropClass: 'light-blue-backdrop',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  setImagePath(imgPathCarasoul, next, prev) {
    let imageArray: any = this.imgObj;
    let index = null;

    for (let img in imageArray) {
      if (imageArray[img].path === imgPathCarasoul) {
        index = Number(img);
        index = next ? index + 1 : index - 1;
      }
    }

    this.imagePath =
      imageArray.length > index && index >= 0
        ? imageArray[index].path
        : this.imagePath;
    //this.imagePath = imageArray[index + 1].path;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
