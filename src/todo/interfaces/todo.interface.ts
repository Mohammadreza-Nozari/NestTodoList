import { Document } from 'mongoose';

export interface ITodo extends Document {
  readonly title: string;
  readonly category: string;
  readonly completed: boolean;
}
