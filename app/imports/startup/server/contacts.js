import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Philip',
    last: 'Johnson',
    address: '1680 East-West Rd.',
    telephone: '808-956-3489',
    email: 'johnson@hawaii.edu',
  },
  {
    first: 'Henri',
    last: 'Casenova',
    address: '1680 East-West Rd.',
    telephone: '808-956-2649',
    email: 'henric@hawaii.edu',
  },
  {
    first: 'Kim',
    last: 'Binsted',
    address: '1680 East-West Rd.',
    telephone: '808-956-6107',
    email: 'binsted@hawaii.edu',
  },
  {
    first: 'Random',
    last: 'Person',
    address: '1680 East-West Rd.',
    telephone: '808-956-8456',
    email: 'random@hawaii.edu',
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function contactsStuffs(stuff) {
    Contacts.insert(stuff);
  });
}
