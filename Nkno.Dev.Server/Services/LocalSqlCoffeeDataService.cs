using Nkno.Dev.Server.Data;
using Nkno.Dev.Server.Interfaces;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Services
{
    public class LocalSqlCoffeeDataService : ICoffeeReviewData
    {
        private readonly LocalCoffeeReviewSqlDbContext _dbContext;
        public LocalSqlCoffeeDataService(LocalCoffeeReviewSqlDbContext context)
        {
            _dbContext = context;
        }

        public void AddReview(CoffeeReview newReview)
        {
            try
            {
                var targetRow = _dbContext.CoffeeReviews.Add(newReview);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void UpdateReview(CoffeeReview review)
        {
            try
            {
                var targetRow = _dbContext.CoffeeReviews.Update(review);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public IEnumerable<CoffeeReview> GetReviews()
        {
            try
            {
                var results = _dbContext.CoffeeReviews.ToList();
                return results;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new List<CoffeeReview>();
        }
    }
}
