import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/about', {
  name: 'About_Us_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Us_Page' });
  },
});

FlowRouter.route('/category', {
  name: 'Category_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Category_Page' });
  },
});

FlowRouter.route('/electronics', {
  name: 'Electronics_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Electronics_Page' });
  },
});

FlowRouter.route('/item', {
  name: 'Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Item_Page' });
  },
});

FlowRouter.route('/message', {
  name: 'Message_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Message_Page' });
  },
});

FlowRouter.route('/miscellaneous', {
  name: 'Miscellaneous_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Miscellaneous_Page' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/sell', {
  name: 'Sell_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Sell_Page' });
  },
});

FlowRouter.route('/add-contact', {
  name: 'Add_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Contact_Page' });
  },
});

FlowRouter.route('/list-stuff', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/edit-profile', {
  name: 'Edit_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Profile_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
