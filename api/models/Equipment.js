/**
 * Equipment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    identify: 'string',
    serialCode: 'string',
    name: 'string',
    description: 'string',
    client: {
      model: 'client'
    }

  }
};
