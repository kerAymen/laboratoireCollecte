import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';



@Injectable()
export class RoomsService {
  private readonly rooms: Room[] = [];



  create(createRoomDto: CreateRoomDto) {
    const { code, buildingId, floor, type, capacity } = createRoomDto;
 
    const newRoom = new Room(
      code,
      buildingId,
      floor,
      type,
      capacity,
    );


  this.rooms.push(newRoom);

   return newRoom;
  }



  findAll() {

    return `This action returns all rooms`;
  }



  findOne(id: string) {
    return `This action returns a #${id} room`;
  }



  update(id: string, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }



  remove(id: string) {
    return `This action removes a #${id} room`;
  }
}