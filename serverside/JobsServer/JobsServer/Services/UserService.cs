using System.Text.Json;
using JobsServer.Models;

namespace UsersServer.Services;
    public class UsersService
    {
        private List<User> users;
        private string fileName = "User.json";
        public UsersService()
        {
            this.fileName = Path.Combine(/*webHost.ContentRootPath,*/ "Data", "User.json");

            using (var jsonFile = File.OpenText(fileName))
            {
                users = JsonSerializer.Deserialize<List<User>>(jsonFile.ReadToEnd(),
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
            }

        }

      public User GetUser(string userName, string password) 
      {
        User thisUser = users.FirstOrDefault(user => user.UserName == userName&& user.Password == password);
        return thisUser;
      }
      
  
    

}
