using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Nkno.Dev.Server.Models;
using System.Data.Common;

namespace Nkno.Dev.Server.Data
{
    public class LocalFFXIVSqlDbContext : DbContext
    {
        public LocalFFXIVSqlDbContext(DbContextOptions<LocalFFXIVSqlDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FFXIVInstanceData>().ToTable("InstanceData");
        }

        public DbSet<FFXIVInstanceData> InstanceData { get; set; }

    }
}
