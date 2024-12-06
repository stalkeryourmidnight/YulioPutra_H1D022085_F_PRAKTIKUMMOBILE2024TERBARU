import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './pahlawan-detail.page.html',
  styleUrls: ['./pahlawan-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  bookId: string;
  book: any = {};

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.bookService.getBookById(this.bookId).subscribe((data) => {
      this.book = data;
    });
  }

  updateBook() {
    this.bookService.updateBook(this.bookId, this.book);
    this.router.navigate(['/home']);
  }

  deleteBook() {
    this.bookService.deleteBook(this.bookId);
    this.router.navigate(['/home']);
  }
}
