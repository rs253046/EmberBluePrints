import DS from 'ember-data';

export default DS.conroller.extend({
	actions: {
		delete() {
			this.get('model').destroyRecord().then(() => {
				this.transitionToRoute('cruds');
			});
		}
	}
});