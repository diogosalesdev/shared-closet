import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client/client.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
	imports: [ ClientModule, EmployeeModule ],
	controllers: [],
	providers: []
})
export class AppModule {}
