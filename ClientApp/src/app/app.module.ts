import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { BookmarkedListComponent } from './bookmarked-list/bookmarked-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { NavComponent } from './nav/nav.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TicketsListComponent,
    BookmarkedListComponent,
    TicketDetailComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'tickets-list', component: TicketsListComponent },
      { path: 'bookmarked-list', component: BookmarkedListComponent },
      { path: 'ticket-detail/:id', component: TicketDetailComponent},
      { path: 'create-ticket', component: CreateTicketComponent},
      { path: 'update-ticket/:id', component: UpdateTicketComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
