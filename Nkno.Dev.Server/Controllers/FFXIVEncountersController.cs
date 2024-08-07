using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FFXIVEncountersController : ControllerBase
    {
        private IFFXIVDataService _dataSource;
        public FFXIVEncountersController(IFFXIVDataService ffxivDataSource)
        {
            _dataSource = ffxivDataSource;
        }

        [HttpGet]
        [Route("encounters")]
        public IEnumerable<FFXIVInstanceData> GetEncounters()
        {
            // doing a hand filter for now -- adding methods later
            return _dataSource.GetAllEncounters()
                .Where(x => x.Name == "Aeve Fennella")
                .GroupBy(x => x.InstanceId)
                .Select(x => x.First());
        }
    }
}
