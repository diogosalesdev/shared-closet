import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EmployeeDTO } from './employee.dto';

@Injectable()
export class EmployeeService {
	constructor(private prisma: PrismaService) {}

	async create(data: EmployeeDTO) {
		const employeeExists = await this.prisma.employee.findFirst({
			where: {
				cpf: data.cpf
			}
		});

		if (employeeExists) {
			throw new Error('Este funcionário já existe!');
		}

		const employee = await this.prisma.employee.create({
			data
		});

		return employee;
	}

	async findAll() {
		return await this.prisma.employee.findMany();
	}

	async update(id: string, data: EmployeeDTO) {
		const employeeExists = await this.prisma.employee.findUnique({
			where: {
				id
			}
		});

		if (!employeeExists) {
			throw new Error('Este funcionário não existe!');
		}

		return await this.prisma.employee.update({
			data,
			where: {
				id
			}
		});
	}

	async delete(id: string) {
		const employeeExists = await this.prisma.employee.findUnique({
			where: {
				id
			}
		});

		if (!employeeExists) {
			throw new Error('Este funcionário não existe!');
		}

		return await this.prisma.employee.delete({
			where: {
				id
			}
		});
	}
}
