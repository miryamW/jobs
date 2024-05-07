import { Injectable } from '@angular/core';
import { Job } from '../models/Job';
import { HttpClient } from '@angular/common/http';
import { Domains } from '../models/Domains';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs: Job[] = []
  constructor(private http: HttpClient) {
    this.getAllJobs()
  }
  getAllJobs() {
     return this.http.get('https://localhost:7168/Jobs')
  }
  filterJobs(domain: string , area:string):Job[] {
    this.jobs = [];
     this.getAllJobs().subscribe((res:any)=>res.map((job:any)=>(domain===""||Domains[job.domain]==domain)&&(area===""||job.area == area)?this.Jobs.push(job):''));
    return this.Jobs;
  }
  getJobById(id: number): Job | undefined {
    return this.Jobs.find(job => job.id == id)
  }



  public get Jobs() {
    return this.jobs
  }
}
