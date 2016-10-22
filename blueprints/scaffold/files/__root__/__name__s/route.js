import DS from 'ember-data';

export default DS.Route.extend({
	model() {
		return this.store.findAll('<%= dasherizedModuleName %>');
	}
});