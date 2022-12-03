/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from 'src/dtos/create-note.dto';
import { Note } from './notes.model';
import {v4 as uuidv4} from 'uuid';


@Injectable()
export class NotesService {
  private notes: Note[] = [];
  getNotes(): Note[] {
    return this.notes;
  }
  getNote(id: string): Note {
    const note = this.notes.find(note => note.id === id);
    if(!note){
        throw new NotFoundException();
    }
    return note;

  }
  createNote(note: CreateNoteDto): Note{
    const {title, description} =  note;
    const newNote : Note ={
        id : uuidv4(),
        title,
        description
    }
    this.notes.push(newNote);
    return newNote;
  }
  deleteNote(id: string): void {
    const rs = this.getNote(id);
    this.notes = this.notes.filter(note => note.id !== rs.id);
  }
  updateNote(id: string, title: string, description :string): Note {
     const note = this.getNote(id);
     note.title = title;
     note.description = description;
     return note;

  }
}
