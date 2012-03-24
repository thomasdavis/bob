define([
  'jquery',
  'underscore',
  'backbone',
	'events',
  'text!templates/footer/footer.html',
	'libs/springy/springyui'
], function($, _, Backbone, Events, footerTemplate, Springy){
  var FooterView = Backbone.View.extend({
    el: '.footer',
    intialize: function () {

    },
    render: function () {
      $(this.el).html(footerTemplate);
	
			Events.on('viewCreated', this.renderSpringy, this);
    },
	
		clean: function () {
			Events.off('viewCreated', this.renderSpringy);
		}
  })

  return FooterView;
});
