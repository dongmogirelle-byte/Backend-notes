const mongoose = require('mongoose')
const dns = require('dns')
dns.setServers(["1.1.1.1", "8.8.8.8"])

require('dotenv').config()

const url = process.env.MONGODB_URI || 'mongodb+srv://dongmogirelle_db_user:Prestige0@cluster0.ayufcop.mongodb.net/NotesApp?appName=Cluster0'

mongoose.set('strictQuery', false)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)

mongoose.connect(url)
  .then(() => {
    console.log('Connecté à MongoDB')

    const note = new Note({
      content: 'js is easy',
      important: true,
    })

    return note.save()
  })
  .then(() => {
    return Note.find({ important: true })
  })
  .then(result => {
    result.forEach(note => {
      console.log(note)
    })
    return mongoose.connection.close()
  })
  .then(() => {
    console.log('Connexion fermée')
  })
  .catch(error => {
    console.error('Erreur:', error.message)
    process.exit(1)
  })
