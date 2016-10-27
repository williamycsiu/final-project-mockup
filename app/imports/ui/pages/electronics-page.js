import {Template} from 'meteor/templating';

Template.Electronics_Page.onRendered(function () {
  this.$('.ui.rating').rating({
    maxRating: 5,
  });
});
