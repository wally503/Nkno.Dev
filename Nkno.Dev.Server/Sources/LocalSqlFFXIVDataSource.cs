using Microsoft.EntityFrameworkCore;
using Nkno.Dev.Server.Data;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;
using System.Runtime.CompilerServices;

namespace Nkno.Dev.Server.Sources
{
    public class LocalSqlFFXIVDataSource : IFFXIVDataSource
    {
        private readonly FFXIVLocalSqlDbContext _dbContext;
        public LocalSqlFFXIVDataSource(FFXIVLocalSqlDbContext context) 
        { 
            _dbContext = context;
        }

        public IEnumerable<FFXIVInstanceData> GetAllEncounters()
        {
            try
            {
                var results = _dbContext.InstanceData.ToList();
                return results;
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new List<FFXIVInstanceData>();
        }
    }
}
