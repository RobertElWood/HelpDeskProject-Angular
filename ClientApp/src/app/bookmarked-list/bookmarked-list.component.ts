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

  constructor(private helpdeskAPI: HelpDeskServiceService) {}

  ngOnInit(): void {
    this.getBookmarks();
  }

  getBookmarks() {
    this.helpdeskAPI.getBookmarkedTickets().subscribe((results: Bookmarked[]) => {
      this.bmTickets = results;
      console.log(results);
      this.getTicketData(); 
    });
  }

  getTicketData() {
    for (let i = 0; i < this.bmTickets.length; i++) {
      this.helpdeskAPI.getSpecificTicket(this.bmTickets[i].ticketsId).subscribe((result: Ticket) => {
        this.bookmarkResults.push(result);
      });
    }
  }

  getDeleteIndex(indexBM: number, indexT : number) {
    this.helpdeskAPI.deleteBookmarkTicket(indexBM).subscribe(() => {
      this.deleteBookmark(indexT);
    });
  }

  deleteBookmark(index : number): void {
    this.bmTickets.splice(index, 1);
    this.bookmarkResults.splice(index, 1);
  }

}