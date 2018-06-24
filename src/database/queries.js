const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.HOST || '127.0.0.1', 
      user: process.env.USER || 'macbookair', 
      password: process.env.PASSWORD || '', 
      database: process.env.DATABASE || 'getaway'
    }
  })


const selectAccount = function(phone_number, cb) {
  knex
  .select('*')
  .from('accounts')
  .where('phone_number', '=', phone_number)
  .orderBy('phone_number')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const insertVictim = function(phone_number, danger_zone, injured, stuck, priority, cb) {
  knex
  .insert(
    {
      phone_number : phone_number,
      danger_zone : danger_zone,
      injured : injured,
      stuck : stuck,
      priority : priority
    }
  )
  .into('victims')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const selectVictims = function(cb) {
  knex
  .select('*')
  .from('victims')
  .orderBy('phone_number')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const insertUpdate = function(phone_number, note, cb) {
  knex
  .insert(
    {
      phone_number : phone_number,
      note : note
    }
  )
  .into('updates')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const selectUpdates = function(phone_number, cb) {
  knex
  .select('*')
  .from('updates')
  .where('phone_number', '=', phone_number)
  .orderBy('posted')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const updateLocation = function(phone_number, lat, lng, cb) {
  knex
  .insert(
    {
      phone_number : phone_number,
      lat : lat,
      lng : lng
    }
  )
  .into('location_history')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const selectLocationHistory = function(phone_number, cb) {
  knex
  .select('*')
  .from('location_history')
  .where('phone_number', '=', phone_number)
  .orderBy('posted')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const insertDebris = function(phone_number, size, lat, lng, note, cb) {
  knex
  .insert(
    {
      phone_number : phone_number,
      size : size,
      lat : lat,
      lng : lng,
      note : note
    }
  )
  .into('debris')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const selectDebris = function(cb) {
  knex
  .select('*')
  .from('debris')
  .orderBy('posted')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const insertNews = function(header, body, cb) {
  knex
  .insert(
    {
      header : header,
      body : body
    }
  )
  .into('news')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const selectNews = function(cb) {
  knex
  .select('*')
  .from('news')
  .orderBy('posted')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

module.exports = {
  knex: knex,
  selectAccount: selectAccount,
  insertVictim: insertVictim,
  selectVictims: selectVictims,
  insertUpdate: insertUpdate,
  selectUpdates: selectUpdates,
  updateLocation: updateLocation,
  selectLocationHistory: selectLocationHistory,
  insertDebris: insertDebris,
  selectDebris: selectDebris,
  selectNews: selectNews
};