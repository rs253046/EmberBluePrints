import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	classManagement(i) {
		return 'ClassManagement' + i
	},
  studentName(i) {return "test" + i},
  class(i) {return "test" + i},
  isPass: false

});
