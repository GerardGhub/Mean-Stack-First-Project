import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
    enteredValue = '';
    newPost = 'NO CONTENT';

    onAddPost() {
        // alert("Muret");
        // this.newPost = 'The user\'s post';
        this.newPost = this.enteredValue;
    }
}