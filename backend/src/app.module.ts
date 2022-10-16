import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client/client.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { CategoryModule } from './modules/category/category.module';
import { ClotheModule } from './modules/clothe/clothe.module';

@Module({
	imports: [ ClientModule, EmployeeModule, CategoryModule, ClotheModule ],
	controllers: [],
	providers: []
})
export class AppModule {}
