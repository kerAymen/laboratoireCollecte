import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty({
    description: 'Code du local',
    example: 'B-204',
  })
  code: string;
  
   @ApiProperty({
    description: 'Identifiant du bâtiment',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  buildingId: string;

  @ApiProperty({
    description: 'Étage du local',
    example: 2,
  })
  floor: number;

  type?: string;
  capacity?: number;
}
