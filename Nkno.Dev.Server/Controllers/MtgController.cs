using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Model;
using Nkno.Dev.Server.Model.MtgModels;
using Nkno.Dev.Server.Static;
using System.Text.Json;

namespace Nkno.Dev.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MtgController : ControllerBase, IMtgController
    {
        private readonly ILogger<MtgController> _logger;
        private readonly IMtgApiDataSource _mtgController;

        public MtgController(ILogger<MtgController> logger, IMtgApiDataSource mtgController)
        {
            _logger = logger;
            _mtgController = mtgController;
        }


        //TODO: Pagination
        [HttpGet("GetSets")]
        public IEnumerable<MtgSet> GetSets(string? setId, int page = 0, int pageSize = 20)
        {
            try
            {
                return _mtgController.GetSets(setId, page, pageSize);
            }
            catch (Exception ex)
            {
                //TODO: something reporting
                Console.WriteLine(ex.Message);
            }
            return new List<MtgSet>();
        }

        [HttpGet("GetSetCardsById")]
        public IEnumerable<MtgCardDetail> GetCardsInSetById(string setId, int page=0, int pageSize = 20)
        {
            try
            {
                return _mtgController.GetCardsInSetById(setId, page, pageSize);
            }
            catch (Exception ex)
            {
                //something reporting
                Console.WriteLine(ex.Message);
            }
            return new List<MtgCardDetail>();
        }

        [HttpGet("GetCardById")]
        public MtgCardDetail GetCardById(string cardId)
        {
            try
            {
                return _mtgController.GetCardById(cardId);
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
