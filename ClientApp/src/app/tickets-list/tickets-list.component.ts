import { Component, OnInit } from '@angular/core';
import { Bookmarked } from 'src/Interfaces/Bookmarked';
import { Ticket } from 'src/Interfaces/Ticket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
})
export class TicketsListComponent implements OnInit {
  tickets: Ticket[] = [];

  ticketToBookmark: Bookmarked = {} as Bookmarked;

  constructor(private helpdeskAPI: HelpDeskServiceService) {}

  ngOnInit(): void {
    this.helpdeskAPI.getTickets().subscribe((results: Ticket[]) => {
      this.tickets = results;
      console.log('this.tickets', this.tickets);
    });
  }

  bookmarkTicket(index: number) {
    this.ticketToBookmark.userId = 1;
    this.ticketToBookmark.ticketsId = index;
    this.helpdeskAPI
      .addBookmarkedTicket(this.ticketToBookmark)
      .subscribe((results: any) => {
        console.log(results);
      });
  }
}
