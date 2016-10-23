import Ember from 'ember';

export default Ember.Controller.extend({
	newStudent: {
    name: "",
    description: "",
    isValid: false
    //put attribute here
	},
	actions: {
		save() {
			var student = this.store.createRecord('student', this.newStudent);
			student.save().then((response) => {
				this.transitionToRoute('students.student.show', response);
			});
		}
	}
});