import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body('title') title: string) {
    return this.todoService.create(title);
  }

  @Patch(':id/toggle')
  toggle(@Param('id') id: number) {
    return this.todoService.toggle(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
