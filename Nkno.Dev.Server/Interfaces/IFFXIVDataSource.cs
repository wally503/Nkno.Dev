using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Interfaces
{
    public interface IFFXIVDataSource
    {
        public IEnumerable<FFXIVInstanceData> GetAllEncounters();
    }
}
