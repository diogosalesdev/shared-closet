export type RentDTO = {
	rentId?: string;
	clotheId: string;
	clientId: string;
	employeeId: string;
	withdrawalDate: Date;
	returnDate: Date;
	createdAt?: Date;
	updatedAt?: Date;
};
