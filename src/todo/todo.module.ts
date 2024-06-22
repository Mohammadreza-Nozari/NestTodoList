import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schemas/todo.schema';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    SharedModule,
  ],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
