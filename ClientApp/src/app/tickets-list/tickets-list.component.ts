import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/Ticket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  @Input() tickets : Ticket[] = {} as Ticket[]; 

  constructor(private helpdeskAPI : HelpDeskServiceService) { }

  ngOnInit(): void {
    this.helpdeskAPI.GetTickets().subscribe((results : Ticket[]) => {this.tickets = results 
      console.log(results)});
  }

}
