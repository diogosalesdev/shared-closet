import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async create(data: CategoryDTO) {
		const categoryExists = await this.prisma.category.findFirst({
			where: {
				name: data.name
			}
		});

		if (categoryExists) {
			throw new Error('Esta categoria já existe!');
		}

		const category = await this.prisma.category.create({
			data
		});

		return category;
	}

	async findAll() {
		return this.prisma.category.findMany();
	}

	async update(categoryId: string, data: CategoryDTO) {
		const categoryExists = await this.prisma.category.findUnique({
			where: {
				categoryId
			}
		});

		if (!categoryExists) {
			throw new Error('Esta categoria não existe!');
		}

		return await this.prisma.category.update({
			data,
			where: {
				categoryId
			}
		});
	}

	async delete(categoryId: string) {
		const categoryExists = await this.prisma.category.findUnique({
			where: {
				categoryId
			}
		});

		if (!categoryExists) {
			throw new Error('Esta categoria não existe!');
		}

		return await this.prisma.category.delete({
			where: {
				categoryId
			}
		});
	}
}
