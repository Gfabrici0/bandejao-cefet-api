/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  email: string;
  password: string;
  name: string;
  document: string;
  birthDate: string;
}
