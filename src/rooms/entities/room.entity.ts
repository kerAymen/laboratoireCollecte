import { randomUUID } from "crypto";

export class Room {
    id: string;
    code: string;
    buildingId: string;
    floo: number;
    type?; string;
    capacity: number;
    createAt: Date;
    updateAt: Date;

    constructor(code: string, buildingId: string, floor: string, type?: string, capacity?: number){
        this.id = randomUUID();
        this.code = code;
        this.buildingId = buildinId;
        this.floor = floor;
        this ?? this.type;
        capacity ?? this.capacity;
    }


}
