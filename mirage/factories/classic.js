import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	classic(i) {
		return 'Classic' + i
	},
  tess(i) {return "test" + i},
  clas: false

});
