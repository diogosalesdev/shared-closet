import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	async create(@Body() data: CategoryDTO) {
		return this.categoryService.create(data);
	}

	@Get()
	async findAll() {
		return this.categoryService.findAll();
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: CategoryDTO) {
		return this.categoryService.update(id, data);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.categoryService.delete(id);
	}
}
