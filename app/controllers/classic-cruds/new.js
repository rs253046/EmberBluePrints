import Ember from 'ember';

export default Ember.Controller.extend({
	newClassicCrud: {
    name: "",
    isValid: false,
    text: ""
    //put attribute here
	},
	actions: {
		save() {
			var classicCrud = this.store.createRecord('classic-crud', this.newClassicCrud);
			classicCrud.save().then((response) => {
				this.transitionToRoute('classic-cruds.classic-crud.show', response);
			});
		}
	}
});