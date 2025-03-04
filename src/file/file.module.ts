import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './file.entity';
import { FileService } from './file.service';
import { FileController } from './file.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],  // ✅ Register FileEntity
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],  // ✅ Export FileService if used in other modules
})
export class FileModule {}
