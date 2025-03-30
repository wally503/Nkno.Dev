using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoffeeBlogController : ControllerBase
    {
        private ICoffeeReviewData _dataSource;
        public CoffeeBlogController(ICoffeeReviewData dataSource)
        {
            _dataSource = dataSource;
        }

        [HttpGet]
        [Route("reviews")]
        public IEnumerable<CoffeeReview> GetReviews()
        {
            return _dataSource.GetReviews();
        }

        [HttpPost]
        [Route("addreview")]
        public void AddReview(CoffeeReview newReview)
        {
            _dataSource.AddReview(newReview);
        }

        [HttpPost]
        [Route("update")]
        public void UpdateReview(CoffeeReview review)
        {
             _dataSource.UpdateReview(review);
        }
    }
}
