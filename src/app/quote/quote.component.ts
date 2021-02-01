import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] = [
    new Quote ('Waithaka Waweru', 'The big secret in life is that there is no big secret. Whatever your goal, you can get there if you are willing to work', 'Oprah Winfrey', new Date(2020, 11, 25)),
    new Quote ('Wanjiku Kiragu', ' Stay hungry and stay foolish', ' Steve Harvey', new Date(2021, 0, 31)),
    new Quote ('Dr Kimanzi', ' The scariest moment is always before you start', 'Stephen King', new Date(2019,5,6)),
    new Quote ('Moringa School', ' Learn one new thing everyday', ' Unknown', new Date(2017,4,28)),
    new Quote ('Davy Django', 'Winning does not always mean being first, it means you are doing better than you have done before', 'Bonnie Blair', new Date(2021,0,1))
  ];

  toggleDetails(index:any){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
