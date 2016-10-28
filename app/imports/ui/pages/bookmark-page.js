import {Template} from 'meteor/templating';

Template.Bookmark_Page.onRendered(function () {
  this.$('.ui.rating').rating({
    maxRating: 5,
  });
});
