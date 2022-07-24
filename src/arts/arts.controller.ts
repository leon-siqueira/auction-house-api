import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtsService } from './arts.service';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';

@Controller('arts')
export class ArtsController {
  constructor(private readonly artsService: ArtsService) {}

  @Post()
  create(@Body() createArtDto: CreateArtDto) {
    return this.artsService.create(createArtDto);
  }

  @Get()
  findAll() {
    return this.artsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtDto: UpdateArtDto) {
    return this.artsService.update(+id, updateArtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artsService.remove(+id);
  }
}
