import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDigitsOnly]'
})
export class DigitsOnlyDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const value = this.element.nativeElement.value;

    this.element.nativeElement.value = value.replace(/[^0-9]*/g, '');
    if (value !== this.element.nativeElement.value) {
      event.stopPropogation();
    }
  }
}
