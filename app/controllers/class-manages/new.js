import Ember from 'ember';

export default Ember.Controller.extend({
	newClassManage: {
    studentName: "",
    class: "",
    isPass: false
    //put attribute here
	},
	actions: {
		save() {
			var classManage = this.store.createRecord('class-manage', this.newClassManage);
			classManage.save().then((response) => {
				this.transitionToRoute('class-manages.class-manage.show', response);
			});
		}
	}
});