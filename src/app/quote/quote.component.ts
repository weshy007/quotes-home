import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] = [
    new Quote ('Waithaka Waweru', 'The big secret in life is that there is no big secret. Whatever your goal, you can get there if you are willing to work', 'Oprah Winfrey', new Date(2020, 11, 25),0,0),
    new Quote ('Wanjiku Kiragu', ' Stay hungry and stay foolish', ' Steve Harvey', new Date(2021, 0, 31),0,0),
    new Quote ('Dr Kimanzi', ' The scariest moment is always before you start', 'Stephen King', new Date(2019,5,6),0,0),
    new Quote ('Moringa School', ' Learn one new thing everyday', ' Unknown', new Date(2017,4,28),0,0),
    new Quote ('Davy Django', 'Winning does not always mean being first, it means you are doing better than you have done before', 'Bonnie Blair', new Date(2021,0,1),0,0)
  ];

  toggleDetails(index:any){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the quote posted by ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote:any){
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  // upVote(val:any,index:any){
  //   if (val === 1) {
  //     this.quotes[index].upVote = +1;
  //   }
  //   if (val === -1) {
  //     this.quotes[index].downVote = +1;
  //   }
  // }
  upvotes = 0;
downvotes = 0;

  upVote(quote:any) {
    quote.upVote = quote.upVote + 1;
    
    }
    // downVote(quote:any) {
    // quote.downVote = quote.downVote + 1;
    
    // } 

  constructor() { }

  ngOnInit(): void {
  }

}
