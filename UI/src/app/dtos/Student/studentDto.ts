import { BaseEntityDto } from "../base/baseEntiteDto";

export class StudentDto extends BaseEntityDto {
    name: string | null;
    departmentId: number;
    department: string | null;
}