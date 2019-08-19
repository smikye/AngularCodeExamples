import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SetImageService {
  constructor(
    private router: Router,
  ) { }

  @Output() public readonly imageSave: EventEmitter<string> = new EventEmitter();

  public setImage(image: string): void {
    this.imageSave.emit(image);
  }

  public showPopup(): void {
    this.router.navigate([{ outlets: { popup: 'setImage' } }]);
  }
}
