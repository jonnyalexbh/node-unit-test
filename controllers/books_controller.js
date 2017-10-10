exports.getBooks = function(req, res) {				
	
    var result = req.app.get('data');    
    //console.log(req.app.get('data'));
    res.status(200).json(result);
}

exports.getBookById = function(req, res) {				
	
	var book_id = req.params.book_id;
    var result = req.app.get('data');
    
    if(book_id==1)
        res.status(200).json(result[0]);
    else if(book_id==2)
        res.status(200).json(result[1]);
    else
        res.status(204).json({});
}

exports.createBook = function(req, res) {		
		
	//console.log("[REQUEST] " + JSON.stringify(req.body));
			
    var title = req.body.title;
	var author = req.body.author;
    var year = req.body.year;
    var edition = req.body.edition;
    var id = req.app.get('data').length + 1;    
    
    var newBook = {id:id, title:title, author:author, year:year, edition:edition};
    
    req.app.get('data').push(newBook);
    
    res.status(201).json({id:id});
}