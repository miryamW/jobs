using JobsServer.Models;
using Microsoft.AspNetCore.Mvc;
using UsersServer.Services;

namespace JobsServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        UsersService usersService = new();
        [HttpGet]
        public ActionResult<User> GetUser(string userName,string password)
        {
            return usersService.GetUser(userName,password);
        }
    }
}
