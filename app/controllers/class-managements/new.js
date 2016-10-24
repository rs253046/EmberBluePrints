import Ember from 'ember';

export default Ember.Controller.extend({
	newClassManagement: {
    studentName: "",
    class: "",
    isPass: false
    //put attribute here
	},
	actions: {
		save() {
			var classManagement = this.store.createRecord('class-management', this.newClassManagement);
			classManagement.save().then((response) => {
				this.transitionToRoute('class-managements.class-management.show', response);
			});
		}
	}
});