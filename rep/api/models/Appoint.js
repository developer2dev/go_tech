/**
 * Appoint.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var uuid = require('node-uuid');

module.exports = {

  attributes: {
  			id: {
		type: 'integer',
		autoIncrement: true,
		primaryKey: true
	},
	api_key: {
		type: 'string',
		size: 64,
		defaultsTo: function() {
			return uuid.v4();
		}
	},
	name: {
		type: 'string',
		size: 255,
		required: true
	},
	email: {
		type: 'string',
		size: 64,
		required: true,
		unique: true
	},
	number: {
		type: 'string',
		size: 64,
		required: true,
		unique: true
	},
	laptop_name: {
		type: 'string',
		enum: ['Apple', 'Samsung', 'Panasonic', 'Dell', 'LG', 'Asus', 'Acer', 'Lenovo', 'Toshiba', 'HP'],
		required: true
		
	},

	laptop_type: {
		type: 'string',
		size: 64,
		required: true
		
	},

	laptop_problem:{
		type: 'string',
		size: 1024,
		required: true
	},

	
	status: {
		type:'string',
		enum: ['Repair', 'Service', 'Accessories'],
		required: true
	}



  }
};

