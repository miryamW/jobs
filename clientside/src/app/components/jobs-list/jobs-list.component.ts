import { Component, EventEmitter, Output } from '@angular/core';
import { Job } from '../../models/Job';
import { JobsService } from '../../services/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Domains } from '../../models/Domains';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent {
  jobs: Job[] = [];
  myJobs: any[] = [];
  filter = { domain: '', area: '' }
  constructor(private jobSvc: JobsService, private userSvc: UsersService, private router: ActivatedRoute) { }
  ngOnInit() {
    if (!localStorage.getItem('current-user')) {
      alert('please login for get jobs list')
      location.href = '/login'
    }
    if (localStorage.getItem('myJobs'))
      this.myJobs = JSON.parse(localStorage.getItem('myJobs')!)

    this.router.queryParams.subscribe(params => {
      if (params['domain']) {
        this.filter.domain = Domains[params['domain']];
      }
      this.applyFilter();
    })
  }
  applyFilter() {
    this.jobs = this.jobSvc.filterJobs(this.filter.domain, this.filter.area)
  }
  sendCV($event: any) {
    let thisJob: any | undefined = this.myJobs.find(job => job.name == $event.name)
    if (thisJob === undefined) {
      this.userSvc.numOfSends++;
      localStorage.setItem('numOfSends', JSON.stringify(this.userSvc.numOfSends))
      this.myJobs.unshift({name:$event.name,count:1})
      localStorage.setItem('myJobs', JSON.stringify(this.myJobs))
    }
    else{
      this.userSvc.numOfSends++;
      localStorage.setItem('numOfSends', JSON.stringify(this.userSvc.numOfSends))
      this.myJobs = this.myJobs.filter(job=>job!=thisJob)
      thisJob.count++;
      this.myJobs.unshift(thisJob)
    }
  }
}

