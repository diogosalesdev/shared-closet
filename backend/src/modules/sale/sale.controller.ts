import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SaleDTO } from './sale.dto';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
	constructor(private readonly saleService: SaleService) {}

	@Post()
	async create(@Body() data: SaleDTO) {
		return this.saleService.create(data);
	}

	@Get()
	async findAll() {
		return this.saleService.findAll();
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: SaleDTO) {
		return this.saleService.update(id, data);
	}

	@Delete()
	async delete(@Param('id') id: string) {
		return this.saleService.delete(id);
	}
}
