using System;
using System.Collections.Generic;

namespace HelpDeskSystem___Angular_Project.Models;

public partial class Ticket
{
    public int Id { get; set; }

    public bool? IsResolved { get; set; }

    public string Problem { get; set; } = null!;

    public string? Answer { get; set; }

    public string PostedBy { get; set; } = null!;

    public string? ResolvedBy { get; set; }
}
