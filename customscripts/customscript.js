var server = require('../server/server'); // To access models and database


// This find and subsequent create or updateAll should trigger something to appear in the changestream.
server.models.Mymodel.find(null, function (err, modelsToProcess) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    if (modelsToProcess.length < 1){
       console.log('None found.');
	   server.models.Mymodel.create({name: "Test " + Math.random()},function (err, instance) {
		   console.log(instance);
     process.exit(0);   
	 });
    }else{
		modelsToProcess.updateAll({id: modelsToProcess[0].id},{name: "Test " + Math.random()},function (err, instance) {
			console.log(instance);
     process.exit(0);   
	 });
	}
});