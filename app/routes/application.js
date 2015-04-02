import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.A([
      {title: "Sip", lat: 40.006811, lng: -105.258087},
    ]);
  }
});
