"use strict";


class Item{
	constructor(){
		this.title = 'empty';
		
	}
	getTitle() {
		return this.title;
	}
	setTitle(val){
		this.title = val
	}

}

export default Item;