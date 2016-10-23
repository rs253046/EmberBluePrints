import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save() {
			this.get('model').save().then(() => {
				this.transitionToRoute('class-managements.class-management.show');
			});
		}
	}
});