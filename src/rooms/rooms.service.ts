import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { connected } from 'process';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  private readonly rooms: Room [] = []
  create(createRoomDto: CreateRoomDto) {

    const {code, buildingId, floor, type, capacity} = createRoomDto()}
    const newRoom = new Room(createRoomDto);

    object.assign(newRoom, createRoomDto);

    this.rooms.push(newRoom);

    return newRoom;

  }

  findAll() {
    return `This action returns all rooms`;
  }

  findOne(id: string) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
