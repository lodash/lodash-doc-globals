'use strict';

var each = require('lodash/each'),
    noop = require('lodash/noop');

function EventSource() {}

EventSource.prototype.addEventListener = noop;

function mockQuery() {
  return {
    'on': function(eventName, callback) {
      callback();
    }
  };
}

mockQuery.each = each;

module.exports = {
  // Example mocks.
  'asyncSave': noop,
  'addContactToList': noop,
  'batchLog': noop,
  'calculateLayout': noop,
  'createApplication': noop,
  'data': { 'user': 'mock' },
  'mainText': '',
  'renewToken': noop,
  'sendMail': noop,
  'updatePosition': noop,

  // DOM mocks.
  'document': { 'body': { 'childNodes': [], 'nodeName': 'BODY' } },
  'element': {},
  'EventSource': EventSource,
  'jQuery': mockQuery,
  'window': {},

  // Node.js mocks.
  'Buffer': Buffer,
  'fs': { 'writeFileSync': noop },
  'path': require('path'),
  'process': process,
  'setImmediate': setImmediate,

  // Lodash v3.10.1 mocks.
  'mage': { 'castSpell': noop },
  'models': { 'todo': {} },
  'throttled': { 'cancel': noop }
};
