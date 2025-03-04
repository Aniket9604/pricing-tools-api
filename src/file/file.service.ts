import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>, // ✅ Injecting Repository<FileEntity>
  ) {}

  async saveFile(fileName: string, fileData: string): Promise<FileEntity> {
    const file = this.fileRepository.create({ fileName, fileData });
    return this.fileRepository.save(file);
  }
}
