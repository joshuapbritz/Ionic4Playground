import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { DirectivesModule } from '../directives/directives.module';
import { TodoViewPageModule } from '../todo-view/todo-view.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: HomePage }]),
        DirectivesModule,
        TodoViewPageModule
    ],
    declarations: [HomePage],
})
export class HomePageModule {}
