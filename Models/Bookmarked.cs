using System;
using System.Collections.Generic;

namespace HelpDeskSystem___Angular_Project.Models;

public partial class Bookmarked
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? TicketsId { get; set; }

    public virtual Ticket? Tickets { get; set; }

    public virtual User? User { get; set; }
}
