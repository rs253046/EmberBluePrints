import DS from 'ember-data';

export default DS.Model.extend({
	classic: DS.attr('string'),
	tess: DS.attr('string'),
  clas: DS.attr('boolean'),
	toS: Ember.computed.alias('name')
});