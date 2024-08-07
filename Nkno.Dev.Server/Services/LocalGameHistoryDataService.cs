using Nkno.Dev.Server.Data;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Sources
{
    public class LocalGameHistoryDataService : IGameHistoryDataService
    {
        private readonly LocalMongoDbContext _dbContext;
        public LocalGameHistoryDataService(LocalMongoDbContext context)
        {
            _dbContext = context;
        }

        public IEnumerable<GameHistory> GetGameHistories(int take = 25, int page = 0)
        {
            return _dbContext.GameHistories.Skip((take * page)).Take(take);
        }

        public void AddGameHistory(GameHistory gameHistory)
        {
            _dbContext.GameHistories.Add(gameHistory);
            _dbContext.ChangeTracker.DetectChanges();
            _dbContext.SaveChanges();
        }


    }
}
