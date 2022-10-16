import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StorageDTO } from './storage.dto';

@Injectable()
export class StorageService {
	constructor(private prisma: PrismaService) {}

	async create(data: StorageDTO) {
		const storageExists = await this.prisma.storage.findFirst({
			where: {
				clothesId: data.clothesId
			}
		});

		if (storageExists) {
			throw new Error('Este item já existe!');
		}

		const storage = await this.prisma.storage.create({
			data
		});

		return storage;
	}

	async findAll() {
		return await this.prisma.storage.findMany();
	}

	async update(storageId: string, data: StorageDTO) {
		const storageExists = await this.prisma.storage.findUnique({
			where: {
				storageId
			}
		});

		if (!storageExists) {
			throw new Error('Este item não existe!');
		}

		return await this.prisma.storage.update({
			data,
			where: {
				storageId
			}
		});
	}

	async delete(storageId: string) {
		const storageExists = await this.prisma.storage.findUnique({
			where: {
				storageId
			}
		});

		if (!storageExists) {
			throw new Error('Este item não existe!');
		}

		return await this.prisma.storage.delete({
			where: {
				storageId
			}
		});
	}
}
