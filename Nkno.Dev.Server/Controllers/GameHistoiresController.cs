using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Controllers
{
   
    [Route("api/[controller]")]
    public class GameHistoriesController : ControllerBase
    {
        private IGameHistoryData _dataSource;
        public GameHistoriesController(IGameHistoryData dataSource)
        {
            _dataSource = dataSource;
        }
        [HttpGet]
        [Route("getHistories")]
        public IEnumerable<GameHistory> Get(int take = 25, int page = 0)
        {
            return _dataSource.GetGameHistories(take, page);
        }

        [HttpPost("addHistory")]
        public void AddGameHistory(GameHistory history)
        {
            _dataSource.AddGameHistory(history);
        }

        [HttpPost]
        [Route("addVersion")]
        public void AddExpansionsVersion(GameHistory history, ExpansionsVersion exp)
        {
            _dataSource.AddExpansionsVersion(history, exp);
        }

        [HttpPost]
        [Route("editHistory")]
        public void EditGameHistory(GameHistory history)
        {
            _dataSource.EditGameHistory(history);
        }

        [HttpPost]
        [Route("editVersion")]
        public void EditExpansionsVersion(GameHistory history, ExpansionsVersion exp)
        {
            _dataSource.EditExpansionsVersion(history, exp);
        }

        [HttpPost]
        [Route("deleteHistory")]
        public void DeleteGameHistory(GameHistory history)
        {
            _dataSource.DeleteGameHistory(history);
        }

        [HttpPost]
        [Route("deleteVersion")]
        public void DeleteExpansionsVersion(GameHistory history, ExpansionsVersion exp)
        {
            _dataSource.DeleteExpansionsVersion(history, exp);
        }
    }
}
