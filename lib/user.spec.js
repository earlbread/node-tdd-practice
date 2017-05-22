'use strict';

const expect = require('chai').expect;
const User = require('./user');

describe('User module', () => {
  describe('"up"', () => {
    it('should export a function', () => {
      expect(User.up).to.be.a('function');
    });

    it('should return a Promise', () => {
      const userUpResult = User.up();
      expect(userUpResult.then).to.be.a('function');
      expect(userUpResult.catch).to.be.a('function');
    });
  });
});
