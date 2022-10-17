import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SaleDTO } from './sale.dto';

@Injectable()
export class SaleService {
	constructor(private prisma: PrismaService) {}

	async create(data: SaleDTO) {
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

		const sale = await this.prisma.sale.create({
			data
		});

		return sale;
	}

	async findAll() {
		return this.prisma.sale.findMany();
	}

	async update(saleId: string, data: SaleDTO) {
		const saleExists = await this.prisma.sale.findUnique({
			where: {
				saleId
			}
		});

		if (!saleExists) {
			throw new Error('Esta venda não foi realizada!');
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

		return await this.prisma.sale.update({
			data,
			where: {
				saleId
			}
		});
	}

	async delete(saleId: string) {
		const saleExists = await this.prisma.sale.findUnique({
			where: {
				saleId
			}
		});

		if (!saleExists) {
			throw new Error('Esta venda não foi realizada!');
		}

		return await this.prisma.sale.delete({
			where: {
				saleId
			}
		});
	}
}
