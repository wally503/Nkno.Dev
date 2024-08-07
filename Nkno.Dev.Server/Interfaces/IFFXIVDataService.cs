using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Interfaces
{
    public interface IFFXIVDataService
    {
        public IEnumerable<FFXIVInstanceData> GetAllEncounters();
    }
}
