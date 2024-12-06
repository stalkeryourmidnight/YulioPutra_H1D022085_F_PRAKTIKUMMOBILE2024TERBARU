import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-pahlawan.page.html',
  styleUrls: ['./add-pahlawan.page.scss'],
})
export class AddBookPage {
  book = { title: '', author: '', description: '' };

  constructor(private bookService: BookService, private router: Router) {}

  addBook() {
    this.bookService.addBook(this.book);
    this.router.navigate(['/home']);
  }
}
