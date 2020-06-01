import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDecimalDigitsOnly]'
})
export class DecimalDigitsOnlyDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const value = this.element.nativeElement.value;

    this.element.nativeElement.value = value.replace(/[^0-9\.]*/g, '');
    if (value !== this.element.nativeElement.value) {
      event.stopPropogation();
    }
  }
}
