using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Nkno.Dev.Server.Models
{
    public class GameHistory
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("user")]
        public int UserId { get; set; }
        [BsonElement("UserName")]
        public string? UserName { get; set; }
        [BsonElement("gameName")]
        public string? GameName { get; set; }
        [BsonElement("playTime")]
        public int PlayTime { get; set; }
        [BsonElement("completed")]
        public bool Completed { get; set; }
        [BsonElement("possibleToComplete")]
        public bool PossibleToComplete { get; set; }
        [BsonElement("gameFranchise")]
        public string? GameFranchise { get; set; }
        [BsonElement("expansionsVersions")]
        public List<ExpansionsVersion>? ExpansionsVersions { get; set; }
    }

    public class ExpansionsVersion
    {
        [BsonElement("orderIndex")]
        public int OrderIndex { get; set; }
        [BsonElement("name")]
        public string? Name { get; set; }
        [BsonElement("played")]
        public bool Played { get; set; }
        [BsonElement("physicalOrDigital")]
        public List<string>? PhysicalOrDigital { get; set; }
        [BsonElement("playedOn")]
        public List<string>? PlayedOn { get; set; }
        [BsonElement("meansOfPlay")]
        public List<string>? MeansOfPlay { get; set; }
    }
}




