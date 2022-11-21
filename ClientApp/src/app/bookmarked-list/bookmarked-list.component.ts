import { Component, OnInit, Input } from '@angular/core';
import { BookmarkedTicket } from 'src/BookmarkedTicket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-bookmarked-list',
  templateUrl: './bookmarked-list.component.html',
  styleUrls: ['./bookmarked-list.component.css'],
})
export class BookmarkedListComponent implements OnInit {
  
  bmTickets: BookmarkedTicket[] = [];

  constructor(private helpdeskAPI: HelpDeskServiceService) {}

  ngOnInit(): void {
    this.helpdeskAPI
      .getBookmarkedTickets()
      .subscribe((results: BookmarkedTicket[]) => {
        this.bmTickets = results;
      });
  }
}
