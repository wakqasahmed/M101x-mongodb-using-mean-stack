//Run in shell one by one
for(var i=0;i<5000000;++i){ db.names.insert({name: '' + i}); }

db.names.insert({name: 'John'}); //delay will be here

db.names.createIndex({name: 1});
db.names.find({name: 'John'}); //no delay because of index