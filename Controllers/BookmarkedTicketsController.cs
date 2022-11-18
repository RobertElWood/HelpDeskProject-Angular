using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HelpDeskSystem___Angular_Project.Models;

namespace HelpDeskSystem___Angular_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkedTicketsController : ControllerBase
    {
        private readonly HelpDeskDbContext _context;

        public BookmarkedTicketsController(HelpDeskDbContext context)
        {
            _context = context;
        }

        // GET: api/BookmarkedTickets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookmarkedTicket>>> GetBookmarkedTickets()
        {
            return await _context.BookmarkedTickets.ToListAsync();
        }

        // GET: api/BookmarkedTickets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookmarkedTicket>> GetBookmarkedTicket(int id)
        {
            var bookmarkedTicket = await _context.BookmarkedTickets.FindAsync(id);

            if (bookmarkedTicket == null)
            {
                return NotFound();
            }

            return bookmarkedTicket;
        }

        // PUT: api/BookmarkedTickets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookmarkedTicket(int id, BookmarkedTicket bookmarkedTicket)
        {
            if (id != bookmarkedTicket.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookmarkedTicket).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookmarkedTicketExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BookmarkedTickets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BookmarkedTicket>> PostBookmarkedTicket(BookmarkedTicket bookmarkedTicket)
        {
            _context.BookmarkedTickets.Add(bookmarkedTicket);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookmarkedTicket", new { id = bookmarkedTicket.Id }, bookmarkedTicket);
        }

        // DELETE: api/BookmarkedTickets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookmarkedTicket(int id)
        {
            var bookmarkedTicket = await _context.BookmarkedTickets.FindAsync(id);
            if (bookmarkedTicket == null)
            {
                return NotFound();
            }

            _context.BookmarkedTickets.Remove(bookmarkedTicket);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookmarkedTicketExists(int id)
        {
            return _context.BookmarkedTickets.Any(e => e.Id == id);
        }
    }
}
