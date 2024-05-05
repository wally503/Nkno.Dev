using System.Text.Json;
using System.Text.Json.Serialization;

namespace Nkno.Dev.Server.Model
{
    namespace MtgModels
    {
        public class MtgSetCollection
        {
            [JsonPropertyName("sets")]
            public List<MtgSet>? Sets { get; set; }
        }
        public class MtgSet
        {
            [JsonPropertyName("code")]
            public string? Code { get; set; }
            [JsonPropertyName("name")]
            public string? Name { get; set; }
            [JsonPropertyName("type")]
            public string? Type { get; set; }
            [JsonPropertyName("booster")]
            public List<object>? BoosterComposition { get; set; }
            [JsonPropertyName("releaseDate")]
            public DateOnly? ReleaseDate { get; set; }
            [JsonPropertyName("block")]
            public string? Block { get; set; }
            [JsonPropertyName("onlineOnly")]
            public bool? IsOnlineOnly { get; set; }
        }

        public class MtgCardCollection
        {
            [JsonPropertyName("cards")]
            public List<MtgCard>? Cards { get; set; }
        }

        public class MtgCard
        {
            [JsonPropertyName("name")]
            public string? Name { get; set; }
            [JsonPropertyName("id")]
            public string? Id { get; set; }
            [JsonPropertyName("multiverseid")]
            public string? MultiverseId { get; set; }
            [JsonPropertyName("manaCost")]
            public string? ManaCost { get; set; }
            [JsonPropertyName("cmc")]
            public float? ConvertedManaCost { get; set; }
            [JsonPropertyName("colors")]
            public List<string>? Colours { get; set; }
            [JsonPropertyName("colorIdentity")]
            public List<string>? ColourIdentity { get; set; }
            //TODO: Color -> Struct/Text (I.e. W or {W} -> White, G or {G} -> Green)
            [JsonPropertyName("type")]
            public string? Type { get; set; }
            [JsonPropertyName("types")]
            public List<string>? CardTypes { get; set; }
            [JsonPropertyName("subTypes")]
            public List<string>? SubTypes { get; set; }
            [JsonPropertyName("rarity")]
            public string? Rarity { get; set; }
            [JsonPropertyName("set")]
            public string? Set { get; set; }
            [JsonPropertyName("imageUrl")]
            public string? ImageUrl { get; set; }
            [JsonPropertyName("foreignNames")]
            public List<ForeignLanguageCardDetails>? ForeignNames { get; set; }
        }
        public class ForeignLanguageCardDetails
        {
            [JsonPropertyName("name")]
            public string? Name { get; set; }
            [JsonPropertyName("text")]
            public string? Text { get; set; }
            [JsonPropertyName("type")]
            public string? Type { get; set; }
            [JsonPropertyName("language")]
            public string? Language { get; set; }
        }
    }
}
