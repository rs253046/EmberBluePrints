import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	shinchan(i) {
		return 'Shinchan' + i
	},
  studentName(i) {return "test" + i},
  class(i) {return "test" + i},
  isPass: false

});
