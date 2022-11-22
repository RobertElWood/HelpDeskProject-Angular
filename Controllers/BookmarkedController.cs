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
        public async Task<ActionResult<Bookmarked>> GetBookmarked(int id)
        {
            var bookmarked = await _context.Bookmarked.FindAsync(id);

            if (bookmarked == null)
            {
                return NotFound();
            }

            return bookmarked;
        }

        // PUT: api/Bookmarked/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookmarked(int id, Bookmarked bookmarked)
        {
            if (id != bookmarked.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookmarked).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookmarkedExists(id))
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
        public async Task<ActionResult<Bookmarked>> PostBookmarked(Bookmarked bookmarked)
        {
            _context.Bookmarked.Add(bookmarked);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookmarked", new { id = bookmarked.Id }, bookmarked);
        }

        // DELETE: api/Bookmarked/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookmarked(int id)
        {
            var bookmarked = await _context.Bookmarked.FindAsync(id);
            if (bookmarked == null)
            {
                return NotFound();
            }

            _context.Bookmarked.Remove(bookmarked);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookmarkedExists(int id)
        {
            return _context.Bookmarked.Any(e => e.Id == id);
        }
    }
}
