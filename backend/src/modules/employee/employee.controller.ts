import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeDTO } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Post()
	async create(@Body() data: EmployeeDTO) {
		return this.employeeService.create(data);
	}

	@Get()
	async findAll() {
		return this.employeeService.findAll();
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: EmployeeDTO) {
		return this.employeeService.update(id, data);
	}

	@Delete()
	async delete(@Param('id') id: string) {
		return this.employeeService.delete(id);
	}
}
