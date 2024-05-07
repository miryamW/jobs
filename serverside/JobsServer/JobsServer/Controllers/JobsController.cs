using JobsServer.Models;
using JobsServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace JobsServer.Controllers;

[ApiController]
[Route("[controller]")]
    public class JobsController : ControllerBase
    {
        JobsService jobsService = new();

        [HttpGet]
        public ActionResult<List<Job>> Get() 
        {
             return jobsService.GetAll();
        }
    }


        
