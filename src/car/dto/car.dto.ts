import { ApiProperty } from '@nestjs/swagger'

export class CarDto {
    @ApiProperty({ example: 99 })
    readonly id: string

    @ApiProperty({ example: 'Toyota' })
    readonly brand: string

    @ApiProperty({ example: 'Corolla' })
    readonly model: string

    @ApiProperty({ example: 2018 })
    readonly year: number

    @ApiProperty({ example: 20000 })
    readonly km: number

    @ApiProperty({ example: 'tourism' })
    readonly type: string

    @ApiProperty({ example: 5 })
    readonly seats: number

    @ApiProperty({ example: 'blue' })
    readonly color: string

    @ApiProperty({ example: 'gasoline' })
    readonly engine: string

    @ApiProperty({ example: 7 })
    readonly consum: number

    @ApiProperty({ example: true })
    readonly level: boolean

    @ApiProperty({ example: 700 })
    readonly autonomy: number

    @ApiProperty({ example: 'toyota.png' })
    readonly photo: string

    @ApiProperty({ example: 30 })
    readonly price_day: number

    @ApiProperty({ example: true })
    readonly available: boolean

    @ApiProperty({ example: 1000 })
    readonly bond: number

    @ApiProperty({ example: 'manual' })
    readonly gear: string
}