// const
// function
// class

let localVar = 'local variable'; // only local not const
let localVar2 = 'local varaible2';

const S_TITLE = 'deepThink';
const ACTION_TITLE = 'what the fuck';

let title = 'this is temporary title';

function calHeight() {
	return 'calculate windows height';
};

function calWidth(title) {
	return 'calculate window width';
};

// 모듈을 이렇게 만들게 되면 내부적으로 공유하게 된다. 다른 곳에서 부를 때 망하게 됨 

class MyClass {
	constructor(name, title) {
		this.name = name;
		this.title = title;
	};

	get name() {
		return this.name
	};

	set name(name) {
		this.name = name;
	};

	get title() {
		return this.title;
	};

	set title(title) {
		this.title = title;
	}
}

const utils = {
	util1: function() {
		return '좋은 유틸이예요. 많이 써보세요'
	},
	util2: function() {
		return '정말 좋은 유틸이라니까요. '
	}
};


export {
	S_TITLE,
	ACTION_TITLE,
	calHeight,
	calWidth,
	MyClass,
	utils
};
