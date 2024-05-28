using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Model.MtgModels;
using Nkno.Dev.Server.Static;
using System.Text.Json;

namespace Nkno.Dev.Server.APIs
{
    public class MagicCardsApi : IMtgApiDataSource
    {
        public IEnumerable<MtgSet> GetSets(string? setId, int page = 0, int pageSize = 20)
        {
            try
            {
                var baseUrl = "https://api.magicthegathering.io/v1/sets";
                if (setId != null)
                    baseUrl += "//" + setId;
                if (setId == null)
                    baseUrl += $"?pageSize={pageSize}&page={page}";
                var response = ApiCall.GetExternalApiResponse(baseUrl).GetAwaiter().GetResult();
                if (response != null)
                {
                    MtgSetCollectionResponse collection = JsonSerializer.Deserialize<MtgSetCollectionResponse>(response)!;
                    if (collection != null)
                        return collection.Sets ?? new List<MtgSet>();
                }
            }
            catch (Exception ex)
            {
                //TODO: something reporting
                Console.WriteLine(ex.Message);
            }
            return new List<MtgSet>();
        }

        public IEnumerable<MtgCardDetail> GetCardsInSetById(string setId, int page = 0, int pageSize = 20)
        {
            try
            {
                var baseUrl = $"https://api.magicthegathering.io/v1/cards?set={setId}";
                baseUrl += $"&pageSize={pageSize}&page={page}";
                var response = ApiCall.GetExternalApiResponse(baseUrl).GetAwaiter().GetResult();
                if (response != null)
                {
                    MtgCardCollectionResponse collection = JsonSerializer.Deserialize<MtgCardCollectionResponse>(response)!;
                    if (collection != null)
                        return collection.Cards ?? new List<MtgCardDetail>();
                }
            }
            catch (Exception ex)
            {
                //something reporting
                Console.WriteLine(ex.Message);
            }
            return new List<MtgCardDetail>();
        }

        public MtgCardDetail GetCardById(string cardId)
        {
            try
            {
                var baseUrl = $"https://api.magicthegathering.io/v1/cards/{cardId}";
                var response = ApiCall.GetExternalApiResponse(baseUrl).GetAwaiter().GetResult();
                if (response != null)
                {
                    MtgCardResponse collection = JsonSerializer.Deserialize<MtgCardResponse>(response)!;
                    if (collection != null)
                        return collection.Card ?? new MtgCardDetail();
                }
            }
            catch (Exception ex)
            {
                //something reporting
                Console.WriteLine(ex.Message);
            }
            return new MtgCardDetail();
        }
    }
}
