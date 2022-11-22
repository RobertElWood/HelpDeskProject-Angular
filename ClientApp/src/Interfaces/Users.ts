import { Bookmarked } from 'src/Interfaces/Bookmarked';

export interface User {
  id: number;
  poster: string;
  bookmarks: Bookmarked[];

  // ticketsId: number;
}
