import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }
  givenBook = new Book();
  ngOnInit(): void {
  }

  insertBook(){
    console.log(this.givenBook);
    this.bookService.insertBook(this.givenBook);
    this.router.navigate(['books']);

  }






}
