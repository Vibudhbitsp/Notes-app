const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addNote = function(title,body){
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title ==title)
    
    if (!duplicateNote){
        notes.push(
            {
                title: title,
                body: body,
            }
        )
        saveNotes(notes)
        console.log('New note added!')
    }else{
        console.log('Note title taken')
    }

    
    
}


const saveNotes = function(notes){
      const dataJSON =JSON.stringify(notes)
      fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toLocaleString()
        return JSON.parse(dataJson)
    } catch(e){
        return []
    }
    
}

const removeNote = function(title){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title == title
    })
    if (duplicateNotes.length == 0){
        console.log(chalk.bgRed('note doesnt exist'))}
    else {
        const NOTE = notes.filter(function(note){
            return note.title != title
        })
        saveNotes(NOTE)
        console.log(chalk.bgGreen('your note is deleted'))
    }
}



const ListNote = () => {
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title)=>{
    const notes = loadNotes()
    const noteExist = notes.find((note) => note.title ==title)
    if (noteExist)
    {
        console.log(noteExist.title)
        console.log(noteExist.body)
    }
    else{
        console.log(chalk.red.bgGreen('note doesnt exist'))
    }
}
module.exports = {
    
    addNote : addNote,
    removeNote : removeNote,
    ListNote : ListNote,
    readNote : readNote,
}
