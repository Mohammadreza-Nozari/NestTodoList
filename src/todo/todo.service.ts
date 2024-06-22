import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ITodo } from './interfaces/todo.interface';
import { CreateTodoContract } from './contracts/create-todo.contract';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<ITodo>) {}

  // Get all todos
  async getAllTodo(): Promise<ITodo[]> {
    return this.todoModel.find().exec();
  }

  // Get a todo
  async getTodoById(id: string): Promise<ITodo> {
    const todo = await this.todoModel.findById(id).exec();
    return todo;
  }

  // Get a todo by category
  async getTodoByCategory(cat: string): Promise<ITodo[]> {
    const todo = await this.todoModel.find({ category: cat }).exec();
    return todo;
  }

  // Add a todo
  async addTodo(createTodoContract: CreateTodoContract): Promise<ITodo> {
    const newTodo = await new this.todoModel(createTodoContract);
    return newTodo.save();
  }

  // Update a todo
  async updateTodo(
    id: string,
    createTodoDTO: CreateTodoContract,
  ): Promise<ITodo> {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(
      id,
      createTodoDTO,
      { new: true },
    );
    return updatedTodo;
  }

  // Delete a todo
  async deleteTodo(id: string): Promise<any> {
    const deletedTodo = await this.todoModel.findByIdAndDelete(id);
    return deletedTodo;
  }
}
