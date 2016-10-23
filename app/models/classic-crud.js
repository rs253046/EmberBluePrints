import DS from 'ember-data';

export default DS.Model.extend({
	classicCrud: DS.attr('string'),
	name: DS.attr('string'),
  isValid: DS.attr('boolean'),
  text: DS.attr('string'),
	toS: Ember.computed.alias('name')
});