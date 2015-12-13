module.exports = {

	index: function *index(next) {
		this.body = "Welcome to koajs-starter";
	},
	
	view: function *index(next) {
		yield this.render('index.ect', {
			title: 'Render view template'
		});
		yield next;
	},

	kitten: function *index(next) {
		yield this.render('kitten.ect');
		yield next;
	},

	bookstore: function *index(next) {
		    var result = yield this.pg.db.client.query_("SELECT * FROM books");
		    this.body = result.rows;
		    // this.body = "dbtest route works";
		    yield next;

	},
	
	test: function *(next, id) {
		this.body = "Get param from controller : "+this.params.id;
	}
};

