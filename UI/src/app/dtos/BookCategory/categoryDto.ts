import { BaseEntityDto } from "../base/baseEntiteDto";

export class CategoryDto extends BaseEntityDto {
    name: string | null;
    description: string | null;
}