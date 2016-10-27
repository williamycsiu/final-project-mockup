import {Template} from 'meteor/templating';

Template.Miscellaneous_Page.onRendered(function () {
  this.$('.ui.rating').rating({
    maxRating: 5,
  });
});
