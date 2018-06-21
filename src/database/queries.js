const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.HOST || '127.0.0.1', 
      user: process.env.USER || 'macbookair', 
      password: process.env.PASSWORD || '', 
      database: process.env.DATABASE || 'getaway'
    }
  })

const setVictim = function(phone_number, danger_zone, injured, stuck, priority, cb) {
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

const getVictims = function(cb) {
  knex
  .select('*')
  .from('victims')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const setUpdate = function(phone_number, note, cb) {
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

const getUpdate = function(phone_number, cb) {
  knex
  .select('*')
  .from('updates')
  .where('phone_number', '=', phone_number)
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const selectAccount = function(phone_number, cb) {
  knex
  .select('*')
  .from('accounts')
  .where('phone_number', '=', phone_number)
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

const getLocationHistory = function(phone_number, cb) {
  knex
  .select('*')
  .from('location_history')
  .where('phone_number', '=', phone_number)
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

const setDebris = function(phone_number, size, lat, lng, note, cb) {
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

const getDebris = function(cb) {
  knex
  .select('*')
  .from('debris')
  .then( (result) => cb(result) )
  .catch( (error) => cb(error) )
}

module.exports = {
  knex: knex,
  setVictim: setVictim,
  getVictims: getVictims,
  setUpdate: setUpdate,
  getUpdate: getUpdate,
  updateLocation: updateLocation,
  getLocationHistory: getLocationHistory,
  setDebris: setDebris,
  getDebris: getDebris
};