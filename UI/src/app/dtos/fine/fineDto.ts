import { BaseEntityDto } from "../base/baseEntiteDto";

export class FineDto  extends BaseEntityDto {
    amount: number;
    studentName: string | null;
    studentId: number;
}