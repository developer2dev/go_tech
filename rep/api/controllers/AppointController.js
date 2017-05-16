/**
 * AppointController
 *
 * @description :: Server-side logic for managing appoints
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	find: function find(req, res) {

		Appoint.find({where: req.query, sort: 'name'}).exec(function(err,rlt){

			if(err) 
				return res.send(404,{msg:'There was a problem with your request.'});
			else
			{
				_.forEach(rlt, function(value) {
		            delete value.password;
		            delete value.api_key;
		            delete value.created;
		          });
				res.send(200,rlt);				
			}

		});
	}
};

