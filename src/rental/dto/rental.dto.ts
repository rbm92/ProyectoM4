import { ApiProperty } from "@nestjs/swagger"

export class RentalDto {
    @ApiProperty({ example: "ua12234ascx" })
    readonly carId: string;
    @ApiProperty({ example: "uuidlap214" })
    readonly userId: string;
}
