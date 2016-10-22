import DS from 'ember-data';

export default DS.conroller.extend({
	new<%=classifiedModuleName%>: {
    <%= newObjectAttrs %>
    //put attribute here
	},
	actions: {
		save() {
			var <%= camelizedModuleName %> = this.store.create('<%= dasherizedModuleName %>', this.new<%=classifiedModuleName%>);
			<%= camelizedModuleName %>.save().then((response) => {
				this.transitionTo('<%= dasherizedModuleName%>.show', response);
			});
		}
	}
});