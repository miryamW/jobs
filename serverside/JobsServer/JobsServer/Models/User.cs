namespace JobsServer.Models
{/// •	משתמש: מזהה, שם משתמש, סיסמה, תחום חיפוש עבודה.
 /// </summary>
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public Domains  Domain { get; set; }
    }
}
