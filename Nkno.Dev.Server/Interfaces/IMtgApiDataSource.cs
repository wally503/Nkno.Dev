using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Model.MtgModels;

namespace Nkno.Dev.Server.Interfaces
{
    public interface IMtgApiDataSource
    {
        [HttpGet("GetSets")]
        public IEnumerable<MtgSet> GetSets(string? setId, int page = 0, int pageSize = 20);
        [HttpGet("GetSetCardsById")]
        public IEnumerable<MtgCardDetail> GetCardsInSetById(string setId, int page = 0, int pageSize = 20);

        [HttpGet("GetCardById")]
        public MtgCardDetail GetCardById(string cardId);
    }
}
