import DS from 'ember-data';

export default DS.Model.extend({
	management: DS.attr('string'),
	studentName: DS.attr('string'),
  class: DS.attr('string'),
  isPass: DS.attr('boolean'),
	toS: Ember.computed.alias('name')
});