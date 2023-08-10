import { BaseEntityDto } from "../base/baseEntiteDto";
import { BookDto } from "../Book/bookDto";
import { AuthorDto } from "./authorDto";

export class BookAuthorDto extends BaseEntityDto {
        authorId: number | null;
        authorName: string;
        bookName: string;
        bookId: number | null;
    }

