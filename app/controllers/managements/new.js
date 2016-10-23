import Ember from 'ember';

export default Ember.Controller.extend({
	newManagement: {
    studentName: "",
    class: "",
    isPass: false
    //put attribute here
	},
	actions: {
		save() {
			var management = this.store.createRecord('management', this.newManagement);
			management.save().then((response) => {
				this.transitionToRoute('managements.management.show', response);
			});
		}
	}
});