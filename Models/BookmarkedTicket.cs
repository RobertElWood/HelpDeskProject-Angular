﻿using System;
using System.Collections.Generic;

namespace HelpDeskSystem___Angular_Project.Models;

public partial class BookmarkedTicket
{
    public int Id { get; set; }

    public bool? Resolved { get; set; }

    public string Problem { get; set; } = null!;

    public string? Answer { get; set; }

    public string Poster { get; set; } = null!;

    public string? Commenter { get; set; }
}
