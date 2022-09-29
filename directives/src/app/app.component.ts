import { Component } from '@angular/core';
import { employlist } from './modules/employe.module';
import { EmpservicesService } from './services/empservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listofemp:employlist[]=[]

  constructor(private epservis:EmpservicesService){

  }

  onclick(){

    this.listofemp=this.epservis.getData()
  }

}
