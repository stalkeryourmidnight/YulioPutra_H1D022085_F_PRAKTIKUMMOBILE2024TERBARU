import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  books: any[] = [];

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (data: any[]) => {
        this.books = data;
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      },
    });
  }
}
