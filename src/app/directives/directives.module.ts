import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParallaxDirective } from './parallax.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ParallaxDirective],
    exports: [ParallaxDirective],
})
export class DirectivesModule {}
