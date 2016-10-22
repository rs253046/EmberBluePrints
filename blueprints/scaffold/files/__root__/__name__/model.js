import DS from 'ember-data';

export default DS.model.extend({
	<%=modelAttrs%>,
	toS: Ember.computed.alias('name')
});