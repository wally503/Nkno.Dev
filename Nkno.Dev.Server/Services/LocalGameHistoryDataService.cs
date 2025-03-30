using Nkno.Dev.Server.Data;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Sources
{
    public class LocalGameHistoryDataService : IGameHistoryData
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

        public void AddExpansionsVersion(GameHistory gameHistory, ExpansionsVersion expansion)
        {
            if (gameHistory.ExpansionsVersions == null)
                gameHistory.ExpansionsVersions = new List<ExpansionsVersion>() { expansion };
            else
                gameHistory.ExpansionsVersions.Add(expansion);
            _dbContext.Update(gameHistory);
            _dbContext.ChangeTracker.DetectChanges();
            _dbContext.SaveChanges();
        }

        public void EditGameHistory(GameHistory gameHistory)
        {
            _dbContext.Update(gameHistory);
            _dbContext.ChangeTracker.DetectChanges();
            _dbContext.SaveChanges();
        }

        public void EditExpansionsVersion(GameHistory gameHistory, ExpansionsVersion expansion)
        {
            gameHistory.ExpansionsVersions?.Add(expansion);
            _dbContext.Update(gameHistory);
            _dbContext.ChangeTracker.DetectChanges();
            _dbContext.SaveChanges();
        }

        public void DeleteGameHistory(GameHistory gameHistory)
        {
            _dbContext.Remove(gameHistory);
            _dbContext.ChangeTracker.DetectChanges();
            _dbContext.SaveChanges();
        }

        public void DeleteExpansionsVersion(GameHistory gameHistory, ExpansionsVersion expansion)
        {
            gameHistory.ExpansionsVersions?.Remove(expansion);
            _dbContext.Update(gameHistory);
            _dbContext.ChangeTracker.DetectChanges();
            _dbContext.SaveChanges();
        }
    }
}
