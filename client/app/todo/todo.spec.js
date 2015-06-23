import Todo from './todo';
import { Injector } from 'angular2/di';
import Item from '../item/item';

describe('Todo list:', ()=>{
	var todo;
	beforeEach( ()=>{
		var injector = Injector.resolveAndCreate([
		  Todo,
		  Item
		]);
		todo = injector.get(Todo);
		
	});
	it('expect Todo to be present', () =>{
		expect(todo).not.toBe(null);
    });
	it('expect Todo constructor to accept a title', ()=>{
		 expect(todo.title).toEqual('Gym');
    });
	it('expect Todo.list property to be Present', function(){
		expect(todo.list).not.toBe(null);
    });
	
	it('expect Todo List property to accept a title:empty', function(){
		 expect(todo.list.title).toEqual('empty');
    });
	
	it('expect Todo Title property to accept a title change', function(){
		 todo.list.setTitle('Work');
		 expect(todo.list.title).toEqual('Work');
    });
	
	// it('expect Todo List property to have an add function', function(){
	// 	 todo.addListItem();
	// 	 expect(todo.list.length).toEqual(2);
    // });
});