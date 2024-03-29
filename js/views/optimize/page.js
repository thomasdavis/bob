define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/optimize/page.html'
], function($, _, Backbone, optimizePageTemplate){
  var OptimizePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(_.template(optimizePageTemplate, {_:_}));
    }
  });
  return OptimizePage;
});
