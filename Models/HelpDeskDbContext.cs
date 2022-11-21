using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HelpDeskSystem___Angular_Project.Models;

public partial class HelpDeskDbContext : DbContext
{
    public HelpDeskDbContext()
    {
    }

    public HelpDeskDbContext(DbContextOptions<HelpDeskDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BookmarkedTicket> BookmarkedTickets { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HelpDeskDB;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BookmarkedTicket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Bookmark__3214EC07860DDE6F");

            entity.Property(e => e.Answer).HasMaxLength(200);
            entity.Property(e => e.Poster).HasMaxLength(25);
            entity.Property(e => e.Problem).HasMaxLength(200);
            entity.Property(e => e.Commenter).HasMaxLength(25);
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Tickets__3214EC0768EC0F1D");

            entity.Property(e => e.Answer).HasMaxLength(200);
            entity.Property(e => e.Poster).HasMaxLength(25);
            entity.Property(e => e.Problem).HasMaxLength(200);
            entity.Property(e => e.Commenter).HasMaxLength(25);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
