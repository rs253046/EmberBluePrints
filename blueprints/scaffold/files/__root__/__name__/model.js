import DS from 'ember-data';

export default DS.Model.extend({
	<%=modelAttrs%>,
	toS: Ember.computed.alias('name')
});