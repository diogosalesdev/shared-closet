import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ClientDTO } from './client.dto';

@Injectable()
export class ClientService {
	constructor(private prisma: PrismaService) {}

	async create(data: ClientDTO) {
		const clientExists = await this.prisma.client.findFirst({
			where: {
				email: data.email
			}
		});

		if (clientExists) {
			throw new Error('Este cliente já existe!');
		}

		const client = await this.prisma.client.create({
			data
		});

		return client;
	}

	async findAll() {
		return await this.prisma.client.findMany();
	}

	async update(id: string, data: ClientDTO) {
		const clientExists = await this.prisma.client.findUnique({
			where: {
				id
			}
		});

		if (!clientExists) {
			throw new Error('Este cliente não existe!');
		}

		return await this.prisma.client.update({
			data,
			where: {
				id
			}
		});
	}

	async delete(id: string) {
		const clientExists = await this.prisma.client.findUnique({
			where: {
				id
			}
		});

		if (!clientExists) {
			throw new Error('Este cliente não existe!');
		}

		return await this.prisma.client.delete({
			where: {
				id
			}
		});
	}
}
