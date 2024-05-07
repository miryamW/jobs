using JobsServer.Models;
using Microsoft.AspNetCore.Cors.Infrastructure;
using System.Text.Json;

namespace JobsServer.Services;

public class JobsService
{
    private List<Job> jobs;
    private string fileName ;
    public JobsService()
    {
        this.fileName = Path.Combine(/*webHost.ContentRootPath,*/ "Data", "Job.json");

        using (var jsonFile = File.OpenText(fileName))
        {
            jobs = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
        }
    }
        public List<Job> GetAll() => jobs;
    }

  
   

   

       
       


