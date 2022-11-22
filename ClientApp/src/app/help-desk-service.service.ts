import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Ticket } from 'src/Interfaces/Ticket';
import { Observable } from 'rxjs';
import { Bookmarked } from 'src/Interfaces/Bookmarked';

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

  getSpecificTicket(id : number): Observable<Ticket> {
    return this.http.get<Ticket>(this.baseURL + `api/Tickets/${id}`);
  }

  getBookmarkedTickets(): Observable<Bookmarked[]> {
    return this.http.get<Bookmarked[]>(this.baseURL + 'api/Bookmarked');
  }

  addBookmarkedTicket(bmTicket: Bookmarked): Observable<any> {
    bmTicket.id = 0;
    console.log(bmTicket);
    return this.http.post(this.baseURL + 'api/Bookmarked', bmTicket);
  }

  deleteBookmarkTicket(index: any): Observable<any> {
    return this.http.delete(this.baseURL + `api/Bookmarked/${index}`);
  }
}
