using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Interfaces
{
    public interface IGameHistoryDataService
    {
        IEnumerable<GameHistory> GetGameHistories(int take = 25, int page = 0);
        void AddGameHistory(GameHistory gameHistory);
    }
}
