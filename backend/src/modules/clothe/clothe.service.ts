import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ClotheDTO } from './clothe.dto';

@Injectable()
export class ClotheService {
	constructor(private prisma: PrismaService) {}

	async create(data: ClotheDTO) {
		const clotheExists = await this.prisma.clothe.findFirst({
			where: {
				name: data.name
			}
		});

		if (clotheExists) {
			throw new Error('Esta roupa já existe!');
		}

		const clothe = await this.prisma.clothe.create({
			data
		});

		return clothe;
	}

	async findAll() {
		return await this.prisma.clothe.findMany();
	}

	async update(clothesId: string, data: ClotheDTO) {
		const clotheExists = await this.prisma.clothe.findUnique({
			where: {
				clothesId
			}
		});

		if (!clotheExists) {
			throw new Error('Esta roupa não existe!');
		}

		return await this.prisma.clothe.update({
			data,
			where: {
				clothesId
			}
		});
	}

	async delete(clothesId: string) {
		const clotheExists = await this.prisma.clothe.findUnique({
			where: {
				clothesId
			}
		});

		if (!clotheExists) {
			throw new Error('Esta roupa não existe!');
		}

		return await this.prisma.clothe.delete({
			where: {
				clothesId
			}
		});
	}
}
