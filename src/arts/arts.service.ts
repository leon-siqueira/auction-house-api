import { Injectable } from '@nestjs/common';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';

@Injectable()
export class ArtsService {
  create(createArtDto: CreateArtDto) {
    return 'This action adds a new art';
  }

  findAll() {
    return `This action returns all arts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} art`;
  }

  update(id: number, updateArtDto: UpdateArtDto) {
    return `This action updates a #${id} art`;
  }

  remove(id: number) {
    return `This action removes a #${id} art`;
  }
}
