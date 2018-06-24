const firstNames = [
  'Rupert', 'John', 'Alfred', 'Aaron', 'Patrick', 'Grant', 'Rick', 'Morris', 'Andre', 'Nathan', 'Wilson', 'Shawn', 'Mike', 'Carlos', 'Phoebe', 'Seung', 'Bryce', 'Kayleigh', 'David', 'Daphne', 'Chris', 'Nick', 'Iris', 'Charles', 'Roland', 'Kurt'
]

const lastNames = [
  'Johnson', 'Dean', 'Douglas', 'Swayzee', 'Tesla', 'Sorensen', 'Yu', 'Foley', 'Sanchez', 'Hurt', 'Russel', 'Fincher', 'Grant', 'Dawson', 'Hogan', 'Smith', 'Cunningham', 'Nguyen', 'Lau', 'Reynolds', 'Jones'
]

const parts = ['left knee', 'left foot', 'left shoulder', 'left elbow', 'left arm', 'left hand', 'left eye', 'right knee', 'right foot', 'right shoulder', 'right elbow', 'right arm', 'right hand', 'right eye', 'knees', 'feet', 'shoulders', 'elbows', 'arms', 'hands', 'eyes', 'head', 'neck', 'nose']

const states = ['broken', 'missing', 'bleeding', 'bruised', 'stabbed']

const generateVictims = (latStart, latEnd, lngStart, lngEnd, amount) => {

  let array = []

  for (let i = 0; i < amount; i++) {
    let victim = {}

    let firstName = firstNames[ Math.floor(Math.random() * (firstNames.length)) ]
    let lastName = lastNames[ Math.floor(Math.random() * (lastNames.length)) ]
    victim.name = `${firstName} ${lastName}`

    victim.priority = Math.round(Math.random() * (3 - 1) + 1)

    victim.injured = Math.floor(Math.round(Math.random() * 1)) ? true : false
    if (victim.injured) {

      let state = states[ Math.floor(Math.random() * (states.length)) ]
      let part = parts[ Math.floor(Math.random() * (parts.length)) ]

      victim.injury = `${state} ${part}`
    } else {
      victim.injury = ''
    }

    let day = '' + Math.round(Math.random() * 28)
    let month = '' + Math.round(Math.random() * 12)
    let year = '' + Math.round(Math.random() * (2018 - 1900) + 1900 )

    day = day.length === 1 ? 0 + day : day
    month = month.length === 1 ? 0 + month : month
    day = ( month === 2 && day > 27 ) ? 28 : day

    victim.dob = `${day}${month}${year}`

    victim.stuck =  Math.floor(Math.round(Math.random() * 1)) ? true : false
    
    victim.lat = Math.random() * (latEnd - latStart) + latStart
    victim.lng = Math.random() * (lngEnd - lngStart) + lngStart
    victim.phone_number = Math.round(Math.random() * (4159999999 - 4150000000) + 4150000000)
    array.push(victim)
  }

  return array
}

const victims = generateVictims(33.859139, 33.787692, -117.844121, -118.020417, 999 )

console.log(victims)

module.exports = { victims }