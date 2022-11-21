import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Ticket } from 'src/Ticket';
import { Observable } from 'rxjs';
import { BookmarkedTicket } from 'src/BookmarkedTicket';

@Injectable({
  providedIn: 'root',
})
export class HelpDeskServiceService {
  baseURL: string = '';

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private url: string
  ) {
    this.baseURL = url;
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseURL + 'api/Tickets');
  }

  getBookmarkedTickets(): Observable<BookmarkedTicket[]> {
    return this.http.get<BookmarkedTicket[]>(
      this.baseURL + 'api/BookmarkedTickets'
    );
  }

  addBookmarkedTicket(bmTicket: BookmarkedTicket) {
    bmTicket.id = 0;
    console.log(this.baseURL + 'api/BookmarkedTickets');
    console.log(bmTicket);
    return this.http.post(this.baseURL + 'api/BookmarkedTickets', bmTicket);
  }
}
