using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nkno.Dev.Server.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? UserName { get; set; }
        public string? Location { get; set; }
    }
    public class Countries
    {
        public int Id { get; set; }
        public string? CountryName { get; set; }
    }
    public class RoastersShops
    {
        public int Id { get; set; }
        public string? Name { get; set;}
        public string? CityName { get; set; }
        public int CountryId { get; set; }
    }

    public class CoffeeReview
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int RoasterId { get; set; }
        public int OriginCountryId { get; set; }
        public string? BeanDrinkName { get; set; }
        public string? FlavourNotes { get; set; }
        public string? Review { get; set; }
        public string? Roast { get; set; }
        public string? Presentation { get; set; }

    }
}
