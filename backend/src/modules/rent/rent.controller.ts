import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RentDTO } from './rent.dto';
import { RentService } from './rent.service';

@Controller('rent')
export class RentController {
	constructor(private readonly rentService: RentService) {}

	@Post()
	async create(@Body() data: RentDTO) {
		return this.rentService.create(data);
	}

	@Get()
	async findAll() {
		return this.rentService.findAll();
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: RentDTO) {
		return this.rentService.update(id, data);
	}

	@Delete()
	async delete(@Param('id') id: string) {
		return this.rentService.delete(id);
	}
}
