import Ember from 'ember';

export default Ember.Controller.extend({
	newCrud: {
    name: "",
    class: false
    //put attribute here
	},
	actions: {
		save() {
			var crud = this.store.createRecord('crud', this.newCrud);
			crud.save().then((response) => {
				this.transitionTo('crud.show', response);
			});
		}
	}
});