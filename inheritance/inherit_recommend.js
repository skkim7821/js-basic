// Kyle Simpson OLOO

// ex1 
var Widget = {
	init: function(width, height) {
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	},
	insert: function($where) {
		if (this.$elem) {
			this.$elem.css({
				width: this.width + 'px',
				height: this.height + 'px'
			}).appendTo($where);
		}
	}
};

var Button = Object.create( Widget );

Button.setup = function(width, height, label) {
	this.init( width, height );
	this.label = label || 'Default';
	this.$elem = $('<button>').text(this.label);
};

Button.build = function($where) {
	this.insert( $where );
	this.$elem.click( this.onClick.bind(this) );
};

Button.onClick = function(evt) {
	console.log(this.label + ' 버튼이 클릭됨!');
};

$(document).ready(function(){
	var $body = $(document.body);

	var btn1 = Object.create(Button);
	btn1.setup( 125, 30, 'Hello');

	var btn2 = Object.create(Button);
	btn2.setup(150, 40, 'World');

	btn1.build($body);
	btn2.build($body);
});


// ex2 
var LoginController = {
	errors: [],
	getUser: function() {
		return document.getElementById('login_username').value;
	},
	getPassword: function() {
		return document.getElementById('login_password').value;
	},
	validateEntry: function(user, pw) {
		user = user || this.getUser();
		pw = pw || this.getPassword();

		if (!(user && pw)) {
			return this.failure('ID와 비밀번호를 입력하여 주십시오!');
		} else if (user.length < 5) {
			return this.failure('비밀번호는 5자 이상이어야 합니다');
		}
	},
	showDialog: function(title, msg) {
		// 사용자 다이얼로그에 성공했다는 메시지를 표시
	},
	failure: function(err) {
		this.errors.push(err);
		this.showDialog('에러', '로그인 실패' + err);
	}
};

var AuthController = Object.create(LoginController);

AuthController.errors = [];
AuthController.checkAuth = function() {
	var user = this.getUser();
	var pw = this.getPassword();

	if (this.validateEntry(user, pw)) {
		this.server('/check-auth', {
			user: user,
			pw: pw
		})
		.then(this.accepted.bind(this))
		.fail(this.rejected.bind(this));
	}
};

AuthController.server = function(url, data) {
	return $.ajax({
		url: url,
		data: data
	});
};
AuthController.accepted = function() {
	this.showDialog('성공', '인증 성공!');
};
AuthController.rejected = function(err) {
	this.failure('인증 실패: ' + err);
};
