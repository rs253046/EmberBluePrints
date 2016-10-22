import DS from 'ember-data';

export default DS.conroller.extend({
	actions: {
		save() {
			this.get('model').save().then(() => {
				this.transitionToRoute('<%= dasherizedModuleName%>.show');
			});
		}
	}
});