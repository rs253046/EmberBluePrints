import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	student(i) {
		return 'Student' + i
	},
  name(i) {return "test" + i},
  description(i) {return "test" + i},
  isValid: false

});
