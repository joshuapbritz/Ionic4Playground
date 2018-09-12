import { Directive, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appParallax]',
})
export class ParallaxDirective implements AfterViewInit {
    private get _element(): HTMLElement {
        return this.element.nativeElement;
    }
    constructor(private element: ElementRef<HTMLElement>) {}

    public ngAfterViewInit(): void {
        this._element.style.height = this._element.clientHeight + 'px';
    }
}
