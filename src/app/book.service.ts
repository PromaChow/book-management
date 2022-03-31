import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
	books: Book[] = [{id:1 , name:"C programming", year:2008, availability:true},
					{id:2 , name:"OOP", year:2010, availability:false}]
  	constructor() { }
	bookToBeUpdated = new Book()
	bookIndexTobeUpdated : number = 0;
	getBooks(): Book[]{
		return this.books;
	}

	deleteBook(givenBook: Book): Book[]{
		this.books = this.books.filter(book => givenBook.id != book.id )
		return this.books;
	}

	
	setBookToBeUpdated(givenBook: Book, index:number){
		this.bookToBeUpdated = givenBook;
		this,this.bookIndexTobeUpdated = index;
	}
	getBookToBeUpdated(): Book{
		return this.bookToBeUpdated;
	}

	updateSpecificBook(givenbook : Book){
		this.books.splice(this.bookIndexTobeUpdated, 1, givenbook);

	}
	insertBook(givenBook:Book){
	 	const index = this.books.length;
		givenBook["id"] = index;
		this.books.push(givenBook);

	}
}