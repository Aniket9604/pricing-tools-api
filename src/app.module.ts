
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileModule } from './file/file.module';
import { FileEntity } from './file/file.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Your MySQL username
      password: 'Aniket@9604', // Your MySQL password
      database: 'csv_upload', // Your MySQL database name
      entities: [FileEntity],
      synchronize: true, // Auto-create tables (disable in production)
    }),
    FileModule,
  ],
})
export class AppModule {}

