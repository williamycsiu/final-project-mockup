import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import './sell-page.html';

Template.Message_Page.onRendered(function () {
  this.$('.dropdown').dropdown({
    allowAdditions: true,
  });
});