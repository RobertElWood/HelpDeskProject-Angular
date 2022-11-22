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
    public class BookmarkedController : ControllerBase
    {
        private readonly HelpDeskDbContext _context;

        public BookmarkedController(HelpDeskDbContext context)
        {
            _context = context;
        }

        // GET: api/Bookmarked
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bookmarked>>> GetBookmarked()
        {
            return await _context.Bookmarked.ToListAsync();
        }

        // GET: api/Bookmarked/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bookmarked>> GetBookmarkedTicket(int id)
        {
            var bookmarkedTicket = await _context.Bookmarked.FindAsync(id);

            if (bookmarkedTicket == null)
            {
                return NotFound();
            }

            return bookmarkedTicket;
        }

        // PUT: api/Bookmarked/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookmarkedTicket(int id, Bookmarked bookmarkedTicket)
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

        // POST: api/Bookmarked
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bookmarked>> PostBookmarkedTicket(Bookmarked bookmarkedTicket)
        {
            _context.Bookmarked.Add(bookmarkedTicket);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookmarked", new { id = bookmarkedTicket.Id }, bookmarkedTicket);
        }

        // DELETE: api/Bookmarked/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookmarkedTicket(int id)
        {
            var bookmarkedTicket = await _context.Bookmarked.FindAsync(id);
            if (bookmarkedTicket == null)
            {
                return NotFound();
            }

            _context.Bookmarked.Remove(bookmarkedTicket);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookmarkedTicketExists(int id)
        {
            return _context.Bookmarked.Any(e => e.Id == id);
        }
    }
}
