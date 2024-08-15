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
        /// <summary>
        /// FFXIV Job
        /// </summary>
        public string Job { get; set; }
        /// <summary>
        /// SubPieData on Selecting a job, will fork into its own set
        /// </summary>
        public List<SubPieData> SubPieData { get; set; }
        /// <summary>
        /// All encounter data encompassing the job
        /// </summary>
        public List<string> PieEncounters { get; set; }
    }
    public class SubPieData
    {
        /// <summary>
        /// Distinct SubPieEncounter IDs
        /// </summary>
        public int EncounterCount { get; set; }
        /// <summary>
        /// Deaths that occured collectively in the dungeon (maybe w/ or w/o selectee?)
        /// </summary>
        public int Deaths { get; set; }
        /// <summary>
        /// Relative Encounters to the Job + Total Deaths occured (on selection, adjust table view)
        /// </summary>
        public List<string> SubPieEncounters { get; set; }
    }
}
