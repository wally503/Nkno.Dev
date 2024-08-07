using System.ComponentModel.DataAnnotations.Schema;

namespace Nkno.Dev.Server.Models
{
    public class FFXIVInstanceData
    {
        [Column("Id")]
        public int Id { get; set; }
        [Column("ZoneId")]
        public string? InstanceId { get; set; }
        [Column("Name")]
        public string? Name { get; set; }
        [Column("Job")]
        public string? Job { get; set; }
        [Column("Title")]
        public string? Title { get; set; }
        [Column("StartTime")]
        public DateTime StartTime { get; set; }
        [Column("EndTime")]
        public DateTime EndTime { get; set; }
        [Column("Duration")]
        public int Duration { get; set; }
        [Column("Damage")]
        public long Damage { get; set; }    
        [Column("EncounterDPS")]
        public double EncounterDps { get; set; }
        [Column("Zone")]
        public string? Zone { get; set; }
        [Column("Kills")]
        public int Kills { get; set; }  
        [Column("Deaths")]
        public int Deaths { get; set; }
    }

    public class PieData
    {
        public string Job { get; set; }
        public List<SubPieData> SubPie { get; set; }
        public List<string> PieEncounters { get; set; }
    }
    public class SubPieData
    {
        public int EncounterCount { get; set; }
        public int Deaths { get; set; }
        public List<string> SubPieEncounters { get; set; }
    }
}
