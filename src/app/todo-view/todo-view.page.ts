import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiService, Todo, User } from '../services/api.service';

@Component({
    selector: 'app-todo-view',
    templateUrl: './todo-view.page.html',
    styleUrls: ['./todo-view.page.scss'],
})
export class TodoViewPage implements OnInit {
    public todo: Todo;
    public user: User;
    constructor(
        private modal: ModalController,
        private params: NavParams,
        private api: ApiService,
    ) {
        this.api.getTodo(Number(params.get('id'))).then(todo => {
            this.api.getUser(todo.userId).then(user => {
                this.todo = todo;
                this.user = user;
            });
        });
    }

    ngOnInit() {}

    public closePage() {
      this.modal.dismiss();
    }
}
