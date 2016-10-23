import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	management(i) {
		return 'Management' + i
	},
  studentName(i) {return "test" + i},
  class(i) {return "test" + i},
  isPass: false

});
