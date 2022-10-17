import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async create(@Body() data: UserDTO) {
		return this.userService.create(data);
	}

	@Get()
	async findAll() {
		return this.userService.findAll();
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: UserDTO) {
		return this.userService.update(id, data);
	}

	@Delete()
	async delete(@Param('id') id: string) {
		return this.userService.delete(id);
	}
}
