/*
 *  Inserts "doc" into the collection "movies".
 */

exports.insert = function(db, doc, callback) {
  // TODO: implement
	db.collection('movies').insert(doc, callback);
	//callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
	// TODO: implement
	db.collection('movies').find({"director": director}).sort({"title":1}).toArray(function(error, docs){
		if(error){
			console.log(error);
			process.exit(1);
		};
		callback(null, docs);
	});
   //callback(null, []);
};