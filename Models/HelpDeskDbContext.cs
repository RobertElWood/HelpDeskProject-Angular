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

    public virtual DbSet<Bookmarked> Bookmarked { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HelpDeskDB;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bookmarked>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Bookmark__3214EC0798B939E1");

            entity.ToTable("Bookmarked");

            entity.HasOne(d => d.Tickets).WithMany(p => p.Bookmarked)
                .HasForeignKey(d => d.TicketsId)
                .HasConstraintName("FK__Bookmarke__Ticke__4CA06362");

            entity.HasOne(d => d.User).WithMany(p => p.Bookmarked)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Bookmarke__UserI__4BAC3F29");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Tickets__3214EC070860C06D");

            entity.Property(e => e.Answer).HasMaxLength(200);
            entity.Property(e => e.Commenter).HasMaxLength(25);
            entity.Property(e => e.Poster).HasMaxLength(25);
            entity.Property(e => e.Problem).HasMaxLength(200);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC074096251B");

            entity.Property(e => e.Poster).HasMaxLength(30);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
