using Microsoft.EntityFrameworkCore;
using Nkno.Dev.Server.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.EntityFrameworkCore.Extensions;

namespace Nkno.Dev.Server.Data
{
    public class LocalMongoDbContext : DbContext
    {
        
        public LocalMongoDbContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<GameHistory>().ToCollection("gameHistory");
        }

        public DbSet<GameHistory> GameHistories { get; init; }
    }
}
