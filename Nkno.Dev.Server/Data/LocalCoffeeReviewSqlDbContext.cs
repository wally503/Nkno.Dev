using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Nkno.Dev.Server.Models;
using System.Data.Common;

namespace Nkno.Dev.Server.Data
{
    public class LocalCoffeeReviewSqlDbContext : DbContext
    {
        public LocalCoffeeReviewSqlDbContext(DbContextOptions<LocalCoffeeReviewSqlDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>().ToTable("Users");
            modelBuilder.Entity<CoffeeReview>().ToTable("Reviews");
            modelBuilder.Entity<Countries>().ToTable("Countries");
            modelBuilder.Entity<RoastersShops>().ToTable("RoastersShops");
        }
        
        public DbSet<Users> CoffeeReviewUsers { get; set; }
        public DbSet<CoffeeReview> CoffeeReviews { get; set; }
        public DbSet<Countries> CoffeeReviewCountries { get; set; }
        public DbSet<RoastersShops> CoffeeRoasters { get; set; }

    }
}
