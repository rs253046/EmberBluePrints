import DS from 'ember-data';

export default DS.Model.extend({
	student: DS.attr('string'),
	name: DS.attr('string'),
  description: DS.attr('string'),
  isValid: DS.attr('boolean'),
	toS: Ember.computed.alias('name')
});