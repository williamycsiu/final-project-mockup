import {Template} from 'meteor/templating';

Template.Item_Page.onRendered(function () {
  this.$('.ui.rating').rating({
    maxRating: 5,
  });
});
