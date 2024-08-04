using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FFXIVEncounterController : ControllerBase
    {
        private IFFXIVDataSource _dataSource;
        public FFXIVEncounterController(IFFXIVDataSource ffxivDataSource)
        {
            _dataSource = ffxivDataSource;
        }
        [HttpGet(Name = "GetEncounters")]
        public IEnumerable<FFXIVInstanceData> Get()
        {
            return _dataSource.GetAllEncounters();
        }
    }
}
