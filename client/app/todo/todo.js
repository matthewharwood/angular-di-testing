"use strict";
import Reflect from 'reflect-metadata';
import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor, Inject} from 'angular2/angular2';
import { Injector } from 'angular2/di';
import Item from '../item/item';
// import { TestBed} from 'angular2/test';
// console.log(TestBed);

@Component({
	selector: 'my-app',
	appInjector: [Item]
})
@View({
	templateUrl: 'app/todo/todo.tmpl.html', 
	directives: [NgFor]
})
class Todo{
	list = Array;
	constructor(item:Item){
		this.title = 'Gym';
		this.list = item;
		this.collect = [];
		
	}
	
	setTitle(newTitle){
		this.title = newTitle;
	}
	addListItem(@Inject(Item) item){
		this.collect.push(this.list);
		console.log(this.collect);
	}
}

export default Todo;

var injector = Injector.resolveAndCreate([
  Todo,
  Item
]);
var todo = injector.get(Todo);
		
todo.list.setTitle('thingyy');
console.log(todo);
