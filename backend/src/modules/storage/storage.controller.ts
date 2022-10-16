import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StorageDTO } from './storage.dto';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
	constructor(private readonly storageService: StorageService) {}

	@Post()
	async create(@Body() data: StorageDTO) {
		return this.storageService.create(data);
	}

	@Get()
	async findAll() {
		return this.storageService.findAll();
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: StorageDTO) {
		return this.storageService.update(id, data);
	}

	@Delete()
	async delete(@Param('id') id: string) {
		return this.storageService.delete(id);
	}
}
