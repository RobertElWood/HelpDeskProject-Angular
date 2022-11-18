import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Ticket } from 'src/Ticket';
import { Observable } from 'rxjs';
import { BookmarkedTicket } from 'src/BookmarkedTicket';

@Injectable({
  providedIn: 'root'
})
export class HelpDeskServiceService {

  baseURL : string = "";

  constructor(private http:HttpClient, @Inject("BASE_URL") private url : string) 
  { 
    this.baseURL = url;
  }

  GetTickets(): Observable<Ticket[]> 
  {
    return this.http.get<Ticket[]>(this.baseURL + "api/Tickets");
  }

  GetBookmarkedTickets(): Observable<BookmarkedTicket[]> 
  {
    return this.http.get<BookmarkedTicket[]>(this.baseURL + "api/BookmarkedTickets");
  }
}
