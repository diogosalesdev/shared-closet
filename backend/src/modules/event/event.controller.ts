import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventDTO } from './event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@Post()
	async create(@Body() data: EventDTO) {
		return await this.eventService.create(data);
	}

	@Get()
	async findAll() {
		return await this.eventService.findAll();
	}
}
