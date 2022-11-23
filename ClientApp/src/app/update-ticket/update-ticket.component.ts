import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Ticket } from 'src/Interfaces/Ticket';
import { HelpDeskServiceService } from '../help-desk-service.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  searchID : any;

  foundTicket : Ticket = {} as Ticket;

  constructor(private helpdeskAPI : HelpDeskServiceService, private route : ActivatedRoute, private router : Router) { }

  sub : any;

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
    this.searchID = params.get('id');
    this.helpdeskAPI.getSpecificTicket(this.searchID).subscribe((result : Ticket) => {this.foundTicket = result});
    });
  }

  updateTicketAnswer() 
  {
    this.foundTicket.resolved = true;
    this.helpdeskAPI.updateSpecificTicket(this.foundTicket.id, this.foundTicket)
    .subscribe(() => {
    this.onBack();    
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onBack() : void {
    this.router.navigate([`ticket-detail/${this.foundTicket.id}`]);
  }

}
