import 'mocha';
import chai = require("chai");
const expect = chai.expect;

import { ConwaySuite } from '../../sources/ConwaySuite';

describe('Conway Suite', function () {

  describe('Should give the right following sequence', function () {

    beforeEach(function () {
      this.suite = new ConwaySuite();
    });

    it('should return 1 1 if 1 given', function () {
      expect(this.suite.getNextSequence('1')).equal('1 1');
    });

    it('should return 1 2 if 2 given', function () {
      expect(this.suite.getNextSequence('2')).equal('1 2');
    });

    it('should return 2 2 if 2 2 given', function () {
      expect(this.suite.getNextSequence('2 2')).equal('2 2');
    });

    it('should return 1 2 1 1 if 2 1 given', function () {
      expect(this.suite.getNextSequence('2 1')).equal('1 2 1 1');
    });

    it('should return 1 2 1 1 1 3 if 2 1 3 given', function () {
      expect(this.suite.getNextSequence('2 1 3')).equal('1 2 1 1 1 3');
    });

    it('should return 1 2 3 1 if 2 1 1 1 given', function () {
      expect(this.suite.getNextSequence('2 1 1 1')).equal('1 2 3 1');
    });

    it('should return 1 2 2 3 1 1 if 2 3 3 1 given', function () {
      expect(this.suite.getNextSequence('2 3 3 1')).equal('1 2 2 3 1 1');
    });

    it('should return 1 2 1 1 1 3 1 1 1 3 1 2 if 2 1 3 1 3 2 given', function () {
      expect(this.suite.getNextSequence('2 1 3 1 3 2')).equal('1 2 1 1 1 3 1 1 1 3 1 2');
    });

  });

  describe('should give the right next n sequences', function () {

    beforeEach(function () {
      this.suite = new ConwaySuite();
    });

    it('should returns the five firsts', function () {
      expect(this.suite.getNextNSequence('1', 5))
        .equal([ '1 1', '2 1', '1 2 1 1', '1 1 1 2 2 1', '3 1 2 2 1 1' ].join('\n'))
    });

    it('should returns the four next', function () {
      expect(this.suite.getNextNSequence('3 1 2 2 1 1', 4))
        .equal( [ '1 3 1 1 2 2 2 1', '1 1 1 3 2 1 3 2 1 1', '3 1 1 3 1 2 1 1 1 3 1 2 2 1'
                , '1 3 2 1 1 3 1 1 1 2 3 1 1 3 1 1 2 2 1 1'
                ].join('\n')
              )
    });

  });

});
