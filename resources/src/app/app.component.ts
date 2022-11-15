import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      { name: "description", content: "Mengkombinasikan laravel dengan angular" },
      { name: "author", content: "tony3supriadi" },
      { name: "keywords", content: "laravel, angular" }
    ]);
    this.title.setTitle("Laravel Angular");
  }

}
