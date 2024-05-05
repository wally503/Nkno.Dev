using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Nkno.Dev.Server.Model;
using Nkno.Dev.Server.Model.MtgModels;
using Nkno.Dev.Server.Static;
using System.Text.Json;

namespace Nkno.Dev.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MtgController : ControllerBase
    {
        private readonly ILogger<MtgController> _logger;

        public MtgController(ILogger<MtgController> logger)
        {
            _logger = logger;
        }


        //TODO: Pagination
        [HttpGet("GetSets")]
        public IEnumerable<MtgSet> GetSets(string? setId, int page = 0, int pageSize = 20)
        {
            try
            {
                var baseUrl = "https://api.magicthegathering.io/v1/sets";
                if (setId != null)
                    baseUrl += "//" + setId;
                if(setId == null) 
                    baseUrl += $"?pageSize={pageSize}&page={page}";
                var response = ApiCall.GetExternalApiResponse(baseUrl).GetAwaiter().GetResult();
                if (response != null)
                {
                    MtgSetCollection collection = JsonSerializer.Deserialize<MtgSetCollection>(response)!;
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

        [HttpGet("GetSetCardsById")]
        public IEnumerable<MtgCard> GetCardsInSetById(string setId, int page=0, int pageSize = 20)
        {
            try
            {
                var baseUrl = $"https://api.magicthegathering.io/v1/cards?set={setId}";
                baseUrl += $"&pageSize={pageSize}&page={page}";
                var response = ApiCall.GetExternalApiResponse(baseUrl).GetAwaiter().GetResult();
                if (response != null)
                {
                    MtgCardCollection collection = JsonSerializer.Deserialize<MtgCardCollection>(response)!;
                    if (collection != null)
                        return collection.Cards ?? new List<MtgCard>();
                }
            }
            catch (Exception ex)
            {
                //something reporting
                Console.WriteLine(ex.Message);
            }
            return new List<MtgCard>();
        }
    }
}
