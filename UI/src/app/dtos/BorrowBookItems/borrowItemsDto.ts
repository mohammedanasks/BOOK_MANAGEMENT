import { BaseEntityDto } from "../base/baseEntiteDto";

export class BorrowItemsDto extends BaseEntityDto {
    borrowBooksId: number;
    bookId: number;
    bookName :string;
    bookCopies:number;
}