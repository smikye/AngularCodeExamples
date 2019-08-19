import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { SetImageService } from './set-image.service';

@Component({
  selector: 'set-image',
  templateUrl: './set-image.component.html',
  styleUrls: ['./set-image.component.css'],
})
export class SetImageComponent implements OnInit {
  private imageChangedEvent: any = '';
  private image: any = '';

  constructor(
      private imageService: SetImageService,
      private router: Router,
  ) { }

  public ngOnInit(): void {
  }

  public fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.setImage(event.target);
  }

  public setImage(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  public imageCropped(event: ImageCroppedEvent): void {
    this.image = event.base64;
  }

  public imageLoaded(): void {
  }

  public loadImageFailed(): void {

  }

  public save(): void {
    this.imageService.setImage(this.image);
  }

  public cancel(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
