using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Model.MtgModels;
using Nkno.Dev.Server.Static;
using System.Text.Json;

namespace Nkno.Dev.Server.Interfaces
{
    public interface IMtgController
    {
        [HttpGet("GetSets")]
        public IEnumerable<MtgSet> GetSets(string? setId, int page = 0, int pageSize = 20);
        [HttpGet("GetSetCardsById")]
        public IEnumerable<MtgCardDetail> GetCardsInSetById(string setId, int page = 0, int pageSize = 20);

        [HttpGet("GetCardById")]
        public MtgCardDetail GetCardById(string cardId);
    }
}
