import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client/client.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { CategoryModule } from './modules/category/category.module';
import { ClotheModule } from './modules/clothe/clothe.module';
import { StorageModule } from './modules/storage/storage.module';
import { UserModule } from './modules/user/user.module';
import { EventModule } from './modules/event/event.module';
import { RentModule } from './modules/rent/rent.module';
import { SaleModule } from './modules/sale/sale.module';

@Module({
	imports: [ ClientModule, EmployeeModule, CategoryModule, ClotheModule, StorageModule, UserModule, EventModule, RentModule, SaleModule ],
	controllers: [],
	providers: []
})
export class AppModule {}
