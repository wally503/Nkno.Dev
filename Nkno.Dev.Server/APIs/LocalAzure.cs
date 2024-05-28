using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Model.MtgModels;
using Nkno.Dev.Server.Static;
using System.Text.Json;

namespace Nkno.Dev.Server.APIs
{
    public class LocalAzure : IMtgApiDataSource
    {
        public IEnumerable<MtgSet> GetSets(string? setId, int page = 0, int pageSize = 20)
        {
            // eventually make a dummy and/or hookup (+the conn string DI + EF)
            return new List<MtgSet>();
        }

        public IEnumerable<MtgCardDetail> GetCardsInSetById(string setId, int page = 0, int pageSize = 20)
        {
            // eventually make a dummy and/or hookup (+the conn string DI + EF)
            return new List<MtgCardDetail>();
        }

        public MtgCardDetail GetCardById(string cardId)
        {
            // eventually make a dummy and/or hookup (+the conn string DI + EF)
            return new MtgCardDetail();
        }
    }
}
