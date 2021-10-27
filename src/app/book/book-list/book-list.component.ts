import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 books: Book[]=[]
  error = [];
 message = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
 this.getAllBook()
  }
  getAllBook(){
   this.bookService.getAll().subscribe(res => {
     console.log(res)
     this.books = res
   })
  }

   status(id: any){
       this.bookService.changStatus(id).subscribe(res => {
         res.status = false
         this.books = res
       })
   }
}
