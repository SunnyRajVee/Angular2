import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import{JokeFormComponent} from './app.jokeForm';
import{Joke} from './joke';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })



@Component({
  selector:'joke',
  template:`
<div class="card card-block">
<h4 class="card-title">{{jok.setup}}</h4>
<p class="card-text"
[hidden]="jok.hide">{{jok.punchline}}</p>
<a (click)=jok.toggle()
class="btn btn-warning">Tell Me
</a>
<a (click)=remove(this.jok)
class="btn btn-warning">Remove Joke
</a>

</div>
`
})

export class JokeComponent{
  @Input()jok : Joke;
  @Output('jokeRemoved') jokeRemove  = new EventEmitter<Joke>();
  remove(joke : Joke){
    this.jokeRemove.emit(joke);
  }
}

@Component({
selector: 'joke-list',
template: `
<joke-form
(jokeCreated)="addJoke($event)">
</joke-form>
<joke *ngFor="let j of jokes" [jok]="j" (jokeRemoved)="removeJoke($event)"></joke>

`,
})
export class JokeListComponent {
jokes: Joke[];
constructor() {
this.jokes = [

  new Joke(
"What did the cheese say when it looked in the mirror?",
"Hello-Me (Halloumi)")
,

    new Joke(
"What kind of cheese do you use to disguise a small horse?",
"Mask-a-pony (Mascarpone)"),

new Joke("A kid threw a lump of cheddar at me",
"I thought ‘That’s not very mature")
];
}
addJoke(joke) {
 
this.jokes.unshift(joke);
 console.log(this.jokes);
}
removeJoke(joke){
  console.log(joke);
this.jokes.splice(this.jokes.indexOf(joke,0),1);
}
}

@Component({
selector: 'app',
template: `
<joke-list></joke-list>
`
})
export class AppComponent {

}
