"use strict";
import Reflect from 'reflect-metadata';

import { Injector } from 'angular2/di';


class Item{
	constructor(){
		this.title = 'empty';
		
	}
	getTitle() {
		return this.title;
	}
	setTitle(val){
		this.title = val;
	}

}

export default Item;