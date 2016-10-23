import Ember from 'ember';

export default Ember.Controller.extend({
	newShinchan: {
    studentName: "",
    class: "",
    isPass: false
    //put attribute here
	},
	actions: {
		save() {
			var shinchan = this.store.createRecord('shinchan', this.newShinchan);
			shinchan.save().then((response) => {
				this.transitionToRoute('shinchans.shinchan.show', response);
			});
		}
	}
});