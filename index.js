'use strict';

var each = require('lodash/each'),
    noop = require('lodash/noop');

function EventSource() {}

EventSource.prototype.addEventListener = noop;

function jQuery() {
  return {
    'on': function(eventName, callback) {
      callback();
    }
  };
}

jQuery.each = each;

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
  'jQuery': jQuery,
  'window': {},

  // Node.js mocks.
  'Buffer': Buffer,
  'fs': { 'writeFileSync': noop },
  'path': require('path'),
  'process': process,
  'setImmediate': setImmediate,

  // Lodash v3.10.1 mocks.
  'cwd': '',
  'mage': { 'castSpell': noop },
  'models': { 'todo': {} },
  'throttled': { 'cancel': noop }
};
