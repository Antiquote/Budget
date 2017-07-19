import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'Barclays',
      name: 'Barclays',
      balance: 1500,
      remaining: 1000
    }]
  }
});
