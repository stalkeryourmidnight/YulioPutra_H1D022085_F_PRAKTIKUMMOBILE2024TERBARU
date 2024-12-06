import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  addBook(book: any) {
    return this.authService.getUser().subscribe((user) => {
      if (user) {
        book.userId = user.uid;
        this.firestore.collection('books').add(book);
      }
    });
  }

  getBooks(): Observable<any[]> {
    return this.authService.getUser().pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore
            .collection('books', (ref) => ref.where('userId', '==', user.uid))
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  getBookById(bookId: string) {
    return this.firestore.collection('books').doc(bookId).valueChanges();
  }

  updateBook(bookId: string, book: any) {
    return this.firestore.collection('books').doc(bookId).update(book);
  }

  deleteBook(bookId: string) {
    return this.firestore.collection('books').doc(bookId).delete();
  }
}
