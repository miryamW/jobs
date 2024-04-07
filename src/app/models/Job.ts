import { Domains } from "./Domains"

export interface Job{
  id:number,
  name:string,
  domain:Domains
  hoursScope:number,
  area:string,
  requirements:string
  hybrid:boolean
}
