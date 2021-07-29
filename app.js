const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')


// add,remove,read,list
//Create add command
yargs.command(
   {
       command : 'add',
       describe :'Add a new note',
       builder:{
           title : {
               describe :'Note title',
               demandOption : true,
               type : 'string'
           },
        body :{
            describe :'Note body',
            demandOption : true,
            type : 'string'
        }   
       },
       handler: function(argv){
          notes.addNote(argv.title,argv.body)
       }
   } 
)

yargs.command(
    {
        command : 'remove',
        describe : 'Remove a note',
        builder:{
            title : {
                describe :'Note title',
                demandOption : true,
                type : 'string'
            }},
        handler: function(argv){
            notes.removeNote(argv.title)
        }
    
    }
    )

yargs.command(
    {
        command : 'list',
        describe : 'list view of note',
        handler: function(){
            notes.ListNote()
        }
    }
)

yargs.command(
    {
        command : 'read',
        describe : 'read in detail',
        builder:{
            title : {
                describe :'Note title',
                demandOption : true,
                type : 'string'
            }},
        handler: function(argv){
            notes.readNote(argv.title)
        }
    }
)

yargs.parse()