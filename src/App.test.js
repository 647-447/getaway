import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Queries from './database/queries.js'

//=============================//
//========== QUERIES ==========//
//=============================//


//=========== SELECT =============//

test('selectAccount should return account details from a phone number', done => {
  function callback(data) {
    expect(data.length).toBeGreaterThan(0)
    console.log('selectAccount', data)
    done()
  }

  Queries.selectAccount(4153358620, callback)
})

test('selectVictims should return a list of victims', done => {
  function callback(data) {
    expect(data.length).toBeGreaterThan(0)
    console.log('selectVictims', data)
    done()
  }

  Queries.selectVictims(callback)
})

test('selectUpdates should return a list of dated notes', done => {
  function callback(data) {
    expect(data.length).toBeGreaterThan(0)
    console.log('selectUpdates', data)
    done()
  }

  Queries.selectUpdates(4153358620, callback)
})

test('selectLocationHistory should return a list of dated locations', done => {
  function callback(data) {
    expect(data.length).toBeGreaterThan(0)
    console.log('selectLocationHistory', data)
    done()
  }

  Queries.selectLocationHistory(4153358620, callback)
})

test('selectDebris should return a list of debris', done => {
  function callback(data) {
    expect(data.length).toBeGreaterThan(0)
    console.log('selectDebris', data)
    done()
  }

  Queries.selectDebris(callback)
})

//=========== INSERT =============//


test('insertVictim should add a new victim to the database', done => {
  function callback(data) {
    console.log('insertVictim', data)
    done()
  }

  Queries.insertVictim(1234567890, true, true, true, 1, callback)
})

test('insertUpdate should add a new update to the database', done => {
  function callback(data) {
    console.log('insertUpdate', data)
    done()
  }

  Queries.insertUpdate(1234567890, 'Please Hurry!', callback)
})

test('updateLocation should add a new location to the database', done => {
  function callback(data) {
    console.log('updateLocation', data)
    done()
  }

  Queries.updateLocation(4153358620, '37.538', '-122.085', callback)
})

test('insertDebris should add a new debris to the database', done => {
  function callback(data) {
    console.log('insertDebris', data)
    done()
  }

  Queries.insertDebris(4153358620, 2, '37.5497', '-122.081', 'is anyone out there? big hole on the ground', callback)
})