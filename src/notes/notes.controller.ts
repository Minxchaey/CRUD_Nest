/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNoteDto } from 'src/dtos/create-note.dto';
import { Note } from './notes.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}


  @Get()
  getNotes(): Note[] {
    return this.noteService.getNotes();
  }


  @Get(':id')
  getNote(@Param('id')id : string): Note {
        return this.noteService.getNote(id);
  }


  @Post('create')
  createNote(@Body()body: CreateNoteDto) : Note {
    return this.noteService.createNote(body);
  }


  @Delete(':id')
  deleteNote(@Param('id')id : string): void {
    this.noteService.deleteNote(id);
  }

  @Patch(':id')
  updateNote(@Param('id')id : string,@Body('title')title: string,@Body('description')description : string):Note{
        return this.noteService.updateNote(id, title, description);
  }
}   
