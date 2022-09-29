import { Injectable } from '@angular/core';
import { employlist } from '../modules/employe.module';


@Injectable({
  providedIn: 'root'
})
export class EmpservicesService {

list:employlist[]=[{
  id:12,
  name:'Abebe',
  status:true
},
{
  id:23,
  name:'Abel',
  status:false
}
]
  constructor() { }


  getData(){
    return this.list
  }
}
