import { Component } from '@angular/core';
import { cards } from '../utility/cards'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list-app';
  cards = cards;
  count: number = 0;
  addDisable: boolean = false;
  deleteDisable: boolean = false;
  resetDisable: boolean = false;
  
  add(){
  
      this.count += 1
      this.deleteDisable = true
      this.resetDisable = true
      if(this.count >= 11){
        this.addDisable = true
        alert('You are not able to add new cards your limit reached')
      }
     
  }
  delete(){
    this.count -= 1
  
    this.addDisable = false
    if(this.count === 0){
        this.deleteDisable = false
        this.resetDisable = false
    }
  
  }
  reset(){
      this.count -= this.count
      this.deleteDisable = false
      this.addDisable = false
        if(this.count<=0){
            this.count = 0;
            this.resetDisable = false
        }       
  }
}
