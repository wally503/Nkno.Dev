using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore.Storage.Json;
using Microsoft.Identity.Client;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;
using System.Text.RegularExpressions;

namespace Nkno.Dev.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FFXIVEncountersController : ControllerBase
    {
        private IFFXIVData _dataSource;
        public FFXIVEncountersController(IFFXIVData ffxivDataSource)
        {
            _dataSource = ffxivDataSource;
        }

        [HttpGet]
        [Route("encounters")]
        public IEnumerable<FFXIVInstanceData> GetEncounters()
        {
            // doing a hand filter for now -- maybe be more general later?
            return _dataSource.GetAllEncounters()
                .Where(x => x.Name == "Aeve Fennella")
                .GroupBy(x => x.InstanceId)
                .Select(x => x.First());
        }

        [HttpGet]
        [Route("characterpie")]
        public IEnumerable<PieData> GetCharacterEncountersPieData(string name)
        {
            //This is painfully hard enough to do in C#, I don't suspect JS/TS will be any friendlier
            List<PieData> pieDatas = new List<PieData>();

            var data = _dataSource.GetAllEncounters()
                .Where(x => x.Name == name)
                .Select(x => x.InstanceId);

            throw new Exception("need to fix the group by, it doesn't work");

            // Need to group them
            //var jobGroups = data.GroupBy(x => x.Job);
            //foreach(var currentKey in jobGroups.Select(y => y.Key))
            //{
            //    // Need to pull out matching group key (In this case, class Job)
            //    var group = jobGroups.Where(x => x.Key == currentKey).SelectMany(x => x);
            //    // We want the subchart to show counts of deaths to show how much that job has death counts, for science
            //    var subPieDatas = group.GroupBy(x => x.Deaths)
            //                                    .Select(y => new SubPieData()
            //                                    {
            //                                        EncounterCount = y.Count(),
            //                                        Deaths = y.First().Deaths,
            //                                        SubPieEncounters = (List<string>)y.Select(z => z.InstanceId)
            //                                    });
            //    // consolidate into its final model and add to the return api value
            //    PieData pieData = new PieData()
            //    {
            //        SubPie = subPieDatas,
            //        Job = currentKey,
            //        PieEncounters = group.Select(x => x.InstanceId).ToList()
            //    };
            //    pieDatas.Add(pieData);
            //}
            return pieDatas;
        }
    }
}
