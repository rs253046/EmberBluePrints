import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	shin(i) {
		return 'Shin' + i
	},
  studentName(i) {return "test" + i},
  class(i) {return "test" + i},
  isPass: false

});
