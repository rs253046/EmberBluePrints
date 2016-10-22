import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	classicCrud(i) {
		return 'ClassicCrud' + i
	},
  name(i) {return "test" + i},
  isValid: false,
  text(i) {return "test" + i}

});
