/*!
 * customize <https://github.com/nknapp/ride-over>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
// /* global before */

// /* global xdescribe */
// /* global xit */

'use strict'

var chai = require('chai')
var expect = chai.expect
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

var overrider = require('../').overrider
var mergeWith = require('lodash.mergewith')
var deep = require('deep-aplus')(Promise)

describe('The custom overrider', function () {
  it('should concatenate arrays', function () {
    expect(mergeWith({ a: [1, 2] }, { a: [3, 4] }, overrider).a).to.deep.equal([1, 2, 3, 4])
  })
  it('should concatenate arrays within promises', function () {
    expect(deep(mergeWith({ a: Promise.resolve([1, Promise.resolve(2)]) }, { a: [3, 4] }, overrider).a)).to.eventually.deep.equal([1, 2, 3, 4])
  })
})
