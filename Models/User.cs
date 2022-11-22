using System;
using System.Collections.Generic;

namespace HelpDeskSystem___Angular_Project.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Poster { get; set; }

    public virtual ICollection<Bookmarked> Bookmarked { get; } = new List<Bookmarked>();
}
