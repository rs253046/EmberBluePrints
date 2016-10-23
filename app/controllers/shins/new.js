import Ember from 'ember';

export default Ember.Controller.extend({
	newShin: {
    studentName: "",
    class: "",
    isPass: false
    //put attribute here
	},
	actions: {
		save() {
			var shin = this.store.createRecord('shin', this.newShin);
			shin.save().then((response) => {
				this.transitionToRoute('shins.shin.show', response);
			});
		}
	}
});