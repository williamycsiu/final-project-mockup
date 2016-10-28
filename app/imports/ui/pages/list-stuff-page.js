import { Template } from 'meteor/templating';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});

Template.List_Stuff_Page.onRendered(function () {
  this.$('.ui.rating').rating({
    maxRating: 5,
  });
});