
const express = require('express')
const cors = require('cors')
 const app = express()
 
 app.use(express.static('dist'))
 app.use(express.json())
 app.use(cors())
 const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:', request.path)
    console.log('Body:', request.body)
    console.log('--')
    next()
   }
   app.use(requestLogger)

 let notes = [
 {
 id: 1,
 content: "HTML is easy",
 date: "2022-05-0T17:30:31.098Z",
 important: true },
 {
 id: 2,
 content: "Browser can execute only Javascript",
 date: "2022-05-30T18:39:34.091Z",
 important: false
 },
 {
 id: 3,
 content: "GET and POST are the most important methods of HTTPprotocol",
 date: "2022-05-30T19:20:14.298Z",
 important: true
 }]

 
    
 app.get('/', (request, response) => {
     response.send('<h1>Hello World!</h1>')
    })
   
 app.get('/api/notes', (request, response) => {
 response.json(notes)

    })
    app.get('/api/notes', (request, response) => {
         response.json(notes)
         })
         app.get('/api/notes/:id', (request, response) => {
             const id = request.params.id
             const note = notes.find(note => {
             console.log(note.id, typeof note.id, id, typeof id, note.id ===
            id)
             return note.id === id
             })
             console.log(note)
             response.json(note)
            })  

            app.post('/api/notes', (request, response) => {
                 const note = request.body
                 console.log(note)
                 response.json(note)
                })
                
                const PORT = process.env.PORT || 3001
                 app.listen(PORT, () => {
                 console.log(`Server running on port ${PORT}`)
                })