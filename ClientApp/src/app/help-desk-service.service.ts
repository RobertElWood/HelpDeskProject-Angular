import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Ticket } from 'src/Interfaces/Ticket';
import { Observable } from 'rxjs';
import { Bookmarked } from 'src/Interfaces/Bookmarked';
import { User } from 'oidc-client';

@Injectable({
  providedIn: 'root',
})
export class HelpDeskServiceService {
  baseURL: string = '';

  //josh example
  //Can reference by using: HelpDeskServiceService.currentUser
  // static currentUser : User = {} as User;

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

  updateSpecificTicket(id: number, updateTicket : Ticket): Observable<any> {
    return this.http.put(this.baseURL + `api/Tickets/${id}`, updateTicket)
  }

  addNewTicket(newTicket : Ticket): Observable<any> {
    newTicket.id = 0;
    return this.http.post(this.baseURL + 'api/Tickets', newTicket);
  }

  getBookmarkedTickets(): Observable<Bookmarked[]> {
    return this.http.get<Bookmarked[]>(this.baseURL + 'api/Bookmarked');
  }

  addBookmarkedTicket(bmTicket: Bookmarked): Observable<any> {
    bmTicket.id = 0;
    return this.http.post(this.baseURL + 'api/Bookmarked', bmTicket);
  }

  deleteBookmarkTicket(index: any): Observable<any> {
    return this.http.delete(this.baseURL + `api/Bookmarked/${index}`);
  }
}
