import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {


    // @ApiProperty()
    @IsEmail()
    email: string;

    @IsString()// @ApiProperty()
    name: string;

    @MinLength(6)
    // @ApiProperty()
    password: string;
}
