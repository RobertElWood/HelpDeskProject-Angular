import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmarked } from 'src/Interfaces/Bookmarked';
import { Ticket } from 'src/Interfaces/Ticket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  searchID : any;
 
  tickets : Ticket[] = [];

  constructor(private helpdeskAPI: HelpDeskServiceService, private route : ActivatedRoute, private router : Router) { }

  ticketToBookmark: Bookmarked = {} as Bookmarked;

  sub : any

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
    this.searchID = params.get('id');
    this.helpdeskAPI.getSpecificTicket(this.searchID).subscribe((result : Ticket) => {this.tickets.push(result)});
    });
  }

  bookmarkTicket(index: number) {
    this.ticketToBookmark.userId = 1;
    this.ticketToBookmark.ticketsId = index;
    this.helpdeskAPI
      .addBookmarkedTicket(this.ticketToBookmark)
      .subscribe(() => {
      });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onBack() : void {
    this.router.navigate(['tickets-list']);
  }

}
