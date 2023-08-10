import { BookAuthorDto } from "../Autors/bookAuthorDto";
import { BaseEntityDto } from "../base/baseEntiteDto";

export class BookDto extends BaseEntityDto {
    name: string | null;
    category: string | null;
    categoryId: number;
    bookAuthors: BookAuthorDto[] | null;
    copies: number;
}