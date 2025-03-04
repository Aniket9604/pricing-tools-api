import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('upload')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Temporary save location
      filename: (req, file, callback) => {
        // const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`;
        callback(null, file.originalname);
      }
    })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log("upload file controller",file); // Displaying the uploaded file details for debugging purposes
    return this.fileService.saveFile(file.originalname, file.path);
    // return { message: 'File uploaded successfully!' }; // Returning a success message instead of file data for simplicity
  }
}
