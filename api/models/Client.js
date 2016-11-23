/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    name: 'string',
    lastname: 'string',
    email: 'string',
    phone: 'string',
    cnpj: 'string',
    status: {
      type: 'string',
      enum: ['pending', 'approved', 'denied']
    },
    equipments: {
      collection:'Equipment',
      via: 'client'
    }
  }
};
