using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Interfaces
{
    public interface IFFXIVData
    {
        public IEnumerable<FFXIVInstanceData> GetAllEncounters();
    }
}
