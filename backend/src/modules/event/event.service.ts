import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EventDTO } from './event.dto';

@Injectable()
export class EventService {
	constructor(private prisma: PrismaService) {}

	async create(data: EventDTO) {
		return await this.prisma.event.create({
			data
		});
	}

	async findAll() {
		return await this.prisma.event.findMany();
	}
}
