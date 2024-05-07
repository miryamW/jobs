namespace JobsServer.Models
{
  
    public enum Domains 
    {
        Programming, Bookkeeping, Graphics, Architecture, Teaching, Secretariat, Nursing
    }
    public class Job
    {
        public int Id { get; set; }
        public Domains Domain { get; set; }
        public string Name { get; set; }
        public int HoursScope { get; set; }
        public string Area { get; set; }
        public string Requirements { get; set; }
        public bool Hybrid { get; set; }

    }
}
