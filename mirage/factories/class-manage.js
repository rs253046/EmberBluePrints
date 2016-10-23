import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	classManage(i) {
		return 'ClassManage' + i
	},
  studentName(i) {return "test" + i},
  class(i) {return "test" + i},
  isPass: false

});
