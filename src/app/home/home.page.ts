import { Component, OnInit } from '@angular/core';
import { ApiService, Todo } from '../services/api.service';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { TodoViewPage } from '../todo-view/todo-view.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public todoList: Todo[];

    constructor(
        private api: ApiService,
        private router: Router,
        private modalCtrl: ModalController,
    ) {}

    public ngOnInit(): void {
        this.api.getTodos().then(todos => (this.todoList = todos));
    }

    public shout(todoId: number) {
        this.modalCtrl
            .create({
                component: TodoViewPage,
                componentProps: { id: todoId },
            })
            .then(modal => modal.present());
    }
}
