import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
	books = this.bookService.getBooks();
  	constructor(private bookService : BookService, private router: Router) {

	}
	ngOnInit(): void {
	}
	deleteThis(givenBook: Book){
		// alert(book.id);
		// const index = this.books.indexOf(givenBook);
		// this.books.splice(index, 1);
		this.books = this.bookService.deleteBook(givenBook)
	}

	updateThis(givenBook: Book, index:number){
		this.bookService.setBookToBeUpdated(givenBook,index);
    	this.router.navigate(['updatebook']);
	}

	insert(){
		this.router.navigate(['insertbook'])
	}

}