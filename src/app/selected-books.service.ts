import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedBooksService {
  books: Array<Object>;

  constructor() {
    this.books = [];
  }

  showBooks() {
    if (this.books.length > 0) {
      return this.books;
    } else {
      return false;
    }
  }
}
