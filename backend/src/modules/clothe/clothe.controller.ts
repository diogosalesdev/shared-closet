import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClotheDTO } from './clothe.dto';
import { ClotheService } from './clothe.service';

@Controller('clothe')
export class ClotheController {
	constructor(private readonly clotheService: ClotheService) {}

	@Post()
	async create(@Body() data: ClotheDTO) {
		return this.clotheService.create(data);
	}

	@Get()
	async findAll() {
		return this.clotheService.findAll();
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: ClotheDTO) {
		return this.clotheService.update(id, data);
	}

	@Delete()
	async delete(@Param('id') id: string) {
		return this.clotheService.delete(id);
	}
}
