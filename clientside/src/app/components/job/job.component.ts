import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/Job';
import { JobsService } from '../../services/jobs.service';
import { Domains } from '../../models/Domains';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  bylink: boolean = false
  @Output() listAdd = new EventEmitter<any>()
  @Input() jobData: Job|undefined = {
    id: 0,
    name: '',
    domain: Domains.Graphics,
    hoursScope: 0,
    area: '',
    requirements: '',
    hybrid: false
  }
  constructor(private jobsSvc:JobsService,private router: ActivatedRoute) {
  }
  ngOnInit(): void {
    if (this.jobData?.id == 0 && this.router.params) {
      this.bylink = true;
      this.router.params.subscribe(params=>this.jobData = this.jobsSvc.getJobById(parseInt(params['id'])))
    }
  }
  sendCV(){
    if((localStorage.getItem('current-user')))
      localStorage.setItem('current-user',(parseInt(localStorage.getItem('numOfSends')!)+1).toString())
    else
      localStorage.setItem('numOfSends','1');
    this.listAdd.emit({name:this.jobData?.name})
  }
}
