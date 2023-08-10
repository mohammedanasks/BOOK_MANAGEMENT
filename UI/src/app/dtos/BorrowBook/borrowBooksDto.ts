import { BaseEntityDto } from "../base/baseEntiteDto";
import { BorrowItemsDto } from "../BorrowBookItems/borrowItemsDto";


export class BorrowBooksDto extends BaseEntityDto {
    fine: number;
    studentName: string | null;
    studentId: number;
    returnDate: string;
    borrowItems: BorrowItemsDto[] | null;
    days:number
}