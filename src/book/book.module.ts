import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { BookSchema } from './schemas/book_schema';

@Module({
  providers: [BookService],
  controllers: [BookController],
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
})
export class BookModule {}
