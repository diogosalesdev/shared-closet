import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async create(data: UserDTO) {
		const userExists = await this.prisma.user.findFirst({
			where: {
				username: data.username
			}
		});

		if (userExists) {
			throw new Error('Este usuário já existe!');
		}

		const user = await this.prisma.user.create({
			data
		});

		return user;
	}

	async findAll() {
		return this.prisma.user.findMany();
	}

	async update(userId: string, data: UserDTO) {
		const userExists = await this.prisma.user.findUnique({
			where: {
				userId
			}
		});

		if (!userExists) {
			throw new Error('Este usuário já existe!d');
		}

		return await this.prisma.user.update({
			data,
			where: {
				userId
			}
		});
	}

	async delete(userId: string) {
		const userExists = await this.prisma.user.findUnique({
			where: {
				userId
			}
		});

		if (!userExists) {
			throw new Error('Este usuário já existe!d');
		}

		return await this.prisma.user.delete({
			where: {
				userId
			}
		});
	}
}
