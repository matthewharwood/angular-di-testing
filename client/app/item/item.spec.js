import { Injector } from 'angular2/di';
import Item from '../item/item';

describe('Item Class:', ()=>{
	var item;
	beforeEach( ()=>{
		var injector = Injector.resolveAndCreate([

		  Item
		]);
		item = injector.get(Item);		
	});
	it('expect Item to be present', () =>{
		console.log(item);
		expect(item).not.toBe(null);
		
    });
	
});