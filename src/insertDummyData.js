const { victims } = require('./victims.js')
const queries = require('./database/queries.js')

for (var i = 0; i < victims.length; i++) {

	let { phone_number, priority, injured, injury, dob, stuck, lat, lng, name } = victims[i];

	queries.insertVictim(phone_number, injured, injury, stuck, priority, console.log)
	queries.updateLocation(phone_number, lat, lng, console.log)
	queries.insertAccount(phone_number, name, dob, console.log)
}