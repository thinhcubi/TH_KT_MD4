import { Injectable } from '@angular/core';
import { Book } from '../book';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] =[]
  api_url = 'http://localhost:8081'
  constructor(private http: HttpClient) { }
  getAll(): Observable<any>{
    return this.http.get(this.api_url + '/books')
  }
  changStatus(id: number): Observable<any> {
    return this.http.get(this.api_url + '/books/' + id)
  }
}
