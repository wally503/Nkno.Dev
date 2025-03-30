using Microsoft.AspNetCore.Mvc;
using Nkno.Dev.Server.Models;

namespace Nkno.Dev.Server.Interfaces
{
    public interface ICoffeeReviewData
    {
        IEnumerable<CoffeeReview> GetReviews();
        void AddReview(CoffeeReview newReview);
        void UpdateReview(CoffeeReview review);
    }
}
