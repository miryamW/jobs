import { Domains } from "./Domains";
export interface User{
  id:number,
  userName:string,
  password:string,
  domain:Domains
}
