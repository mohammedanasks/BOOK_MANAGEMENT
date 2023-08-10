import { BaseEntityDto } from "../base/baseEntiteDto";
import { BookAuthorDto } from "./bookAuthorDto";

export class AuthorDto extends BaseEntityDto {
    name: string | null;
    author_books: BookAuthorDto[] | null;
}