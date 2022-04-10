import { Quote } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gen-form',
  templateUrl: './gen-form.component.html',
  styleUrls: ['./gen-form.component.css']
})
export class GenFormComponent implements OnInit {

  newQuote = new Quote('','','','', new Date());
  @Output () addQuote = new EventEmitter<Quote>();
  
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
