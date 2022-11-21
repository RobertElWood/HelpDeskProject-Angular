import { Component, OnInit, Input, Output } from '@angular/core';
import { BookmarkedTicket } from 'src/BookmarkedTicket';
import { Ticket } from 'src/Ticket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
})
export class TicketsListComponent implements OnInit {
  tickets: Ticket[] = [];

  ticketToBookmark: BookmarkedTicket = {} as BookmarkedTicket;

  constructor(private helpdeskAPI: HelpDeskServiceService) {}

  ngOnInit(): void {
    this.helpdeskAPI.getTickets().subscribe((results: Ticket[]) => {
      this.tickets = results;
      console.log('this.tickets', this.tickets);
    });
  }

  bookmarkTicket(index: number) {
    this.ticketToBookmark = this.tickets[index];
    this.helpdeskAPI
      .addBookmarkedTicket(this.ticketToBookmark)
      .subscribe((results: any) => {
        console.log(results);
      });
  }
}
