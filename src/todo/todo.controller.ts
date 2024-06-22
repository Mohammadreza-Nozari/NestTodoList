import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoContract } from './contracts/create-todo.contract';
import { ITodo } from './interfaces/todo.interface';
import { AuthGuard } from '@nestjs/passport';
import { throwError } from 'rxjs';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //add a todo
  @Post()
  // @UseGuards(AuthGuard('jwt'))
  async addTodo(@Body() CreateTodoContract: CreateTodoContract) {
    return this.todoService.addTodo(CreateTodoContract);
  }

  //get all todos
  @Get()
  async getAllTodos(): Promise<ITodo[]> {
    return this.todoService.getAllTodo();
  }

  //get a todo
  @Get(':id')
  async getTodoById(@Param('id') id): Promise<ITodo> {
    return this.todoService.getTodoById(id);
  }

  //get a todo by category
  @Get('/category/:cat')
  async getTodoByCategory(@Param('cat') cat): Promise<ITodo[]> {
    return this.todoService.getTodoByCategory(cat);
  }

  // update a todo
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateTodo(
    @Param('id') id,
    @Body() CreateTodoContract: CreateTodoContract,
  ): Promise<ITodo> {
    return this.todoService.updateTodo(id, CreateTodoContract);
  }

  // delete a todo protected with JWT strategy
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteTodo(@Param('id') id): Promise<ITodo> {
    return this.todoService.deleteTodo(id);
  }
}
