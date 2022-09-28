
import {Component, EventEmitter, Output } from "@angular/core" 

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class headerComponent{
  @Output() featureselected=new EventEmitter<string>;

  onselect(feature:string){
    this.featureselected.emit(feature);
  }


}
