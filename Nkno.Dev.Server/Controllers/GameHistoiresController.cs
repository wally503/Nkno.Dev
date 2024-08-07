using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameHistoriesController : ControllerBase
    {
        private IGameHistoryDataService _dataSource;
        public GameHistoriesController(IGameHistoryDataService dataSource)
        {
            _dataSource = dataSource;
        }
        [HttpGet]
        [Route("histories")]
        public IEnumerable<GameHistory> Get(int take = 25, int page = 0)
        {
            return _dataSource.GetGameHistories(take, page);
        }

        [HttpGet]
        [Route("add")]
        public void AddHistory(GameHistory history)
        {
            _dataSource.AddGameHistory(history);
        }
    }
}
