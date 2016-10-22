import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
  class: DS.attr('boolean'),
	toS: Ember.computed.alias('name')
});