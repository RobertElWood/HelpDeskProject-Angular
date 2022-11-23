import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/Interfaces/Ticket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  newTicket : Ticket = {} as Ticket;

  constructor(private helpDeskAPI : HelpDeskServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  createNewTicket()
  {
    this.newTicket.resolved = false;
    this.helpDeskAPI.addNewTicket(this.newTicket)
    .subscribe(() => {
    this.onBack();
    });
  }

  onBack() : void {
    this.router.navigate(['tickets-list']);
  }
}
