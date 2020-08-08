var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/catsapp", {

	useNewUrlParser : true,
	useUnifiedTopology : true,

});

var CatSchema = new mongoose.Schema({

  name : String,
  age : Number,
  temperamant: String

});


var Cat = mongoose.model("Cat", CatSchema);

/* var pussy = new Cat({

	name : "Twe",
	age : 1,
	temperamant : "Ca"
});

pussy.save((err,cat)=>{

	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log(cat);
	}
});

*/

Cat.create({

	name : "Sameer",
	age: 51,
	temperamant : "Angry"
}, (err,cat)=>{

	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log(cat);
	}
})

Cat.find({}, (err,cats)=>{

	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log(cats);
	}
})