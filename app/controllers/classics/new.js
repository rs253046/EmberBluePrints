import Ember from 'ember';

export default Ember.Controller.extend({
	newClassic: {
    tess: "",
    clas: false
    //put attribute here
	},
	actions: {
		save() {
			var classic = this.store.createRecord('classic', this.newClassic);
			classic.save().then((response) => {
				this.transitionToRoute('classics.classic.show', response);
			});
		}
	}
});