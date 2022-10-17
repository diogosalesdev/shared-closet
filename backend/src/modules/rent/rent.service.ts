import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RentDTO } from './rent.dto';

@Injectable()
export class RentService {
	constructor(private prisma: PrismaService) {}

	async create(data: RentDTO) {
		const clientExists = await this.prisma.client.findUnique({
			where: {
				id: data.clientId
			}
		});

		if (!clientExists) {
			throw new Error('Este client não existe!');
		}

		const employeeExists = await this.prisma.employee.findUnique({
			where: {
				employeeId: data.employeeId
			}
		});

		if (!employeeExists) {
			throw new Error('Este funcionário não existe!');
		}

		const clotheExists = await this.prisma.clothe.findUnique({
			where: {
				clothesId: data.clotheId
			}
		});

		if (!clotheExists) {
			throw new Error('Esta roupa não existe!');
		}

		const available = await this.prisma.storage.findFirst({
			where: {
				available: true
			}
		});

		if (!available) {
			throw new Error('Esta roupa não está disponível');
		}

		const rent = await this.prisma.rent.create({
			data
		});

		return rent;
	}

	async findAll() {
		return await this.prisma.rent.findMany();
	}

	async update(rentId: string, data: RentDTO) {
		const rentExists = await this.prisma.rent.findUnique({
			where: {
				rentId
			}
		});

		if (!rentExists) {
			throw new Error('Este aluguel não foi realizado!');
		}

		const clientExists = await this.prisma.client.findUnique({
			where: {
				id: data.clientId
			}
		});

		if (!clientExists) {
			throw new Error('Este client não existe!');
		}

		const employeeExists = await this.prisma.employee.findUnique({
			where: {
				employeeId: data.employeeId
			}
		});

		if (!employeeExists) {
			throw new Error('Este funcionário não existe!');
		}

		const clotheExists = await this.prisma.clothe.findUnique({
			where: {
				clothesId: data.clotheId
			}
		});

		if (!clotheExists) {
			throw new Error('Esta roupa não existe!');
		}

		const available = await this.prisma.storage.findFirst({
			where: {
				available: true
			}
		});

		if (!available) {
			throw new Error('Esta roupa não está disponível');
		}

		return this.prisma.rent.update({
			data,
			where: {
				rentId
			}
		});
	}

	async delete(rentId: string) {
		const rentExists = await this.prisma.rent.findUnique({
			where: {
				rentId
			}
		});

		if (!rentExists) {
			throw new Error('Este aluguel não foi realizado!');
		}

		return this.prisma.rent.delete({
			where: {
				rentId
			}
		});
	}
}
