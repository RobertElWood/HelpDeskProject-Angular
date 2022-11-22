import { Component, OnInit, Input } from '@angular/core';
import { Bookmarked } from 'src/Interfaces/Bookmarked';
import { Ticket } from 'src/Interfaces/Ticket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-bookmarked-list',
  templateUrl: './bookmarked-list.component.html',
  styleUrls: ['./bookmarked-list.component.css'],
})
export class BookmarkedListComponent implements OnInit {
  bmTickets: Bookmarked[] = [];

  bookmarkResults: Ticket[] = [];

  // just one object
  // ticketToDelete: Bookmarked = {} as Bookmarked;

  constructor(private helpdeskAPI: HelpDeskServiceService) {}

  ngOnInit(): void {
    this.getBookmarks();
  }

  getBookmarks() {
    this.helpdeskAPI.getBookmarkedTickets().subscribe((results: Ticket[]) => {
      this.bookmarkResults = results;
    });
  }
  getDeleteIndex(index: number) {
    this.helpdeskAPI.deleteBookmarkTicket(index).subscribe((result: any) => {
      console.log(result);
      this.deleteBookmark(index);
    });
  }

  deleteBookmark(i: number): void {
    this.bookmarkResults.splice(i, 1);
    this.getBookmarks();
  }
}
