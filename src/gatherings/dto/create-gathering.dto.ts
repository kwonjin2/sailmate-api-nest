import { IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateGatheringDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(2, 50)
  title: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @Length(10, 1000)
  description: string;
}
