import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '.app-user-Det'
})
export class UserDetDirective {

  constructor(private el: ElementRef) { }


  private hover(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }


}