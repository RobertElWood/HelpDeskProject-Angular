import { User } from './Users';
import { Ticket } from './Ticket';

export interface Bookmarked {
  id: number;
  userId: number;
  ticketsId: number;
  tickets: Ticket[];
  user?: User[];
}
