import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private helpdeskAPI: HelpDeskServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.helpdeskAPI.getTickets().subscribe((results: Ticket[]) => {
      this.tickets = results;
    });
  }

}
