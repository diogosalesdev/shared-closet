import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client/client.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
	imports: [ ClientModule, EmployeeModule, CategoryModule ],
	controllers: [],
	providers: []
})
export class AppModule {}
