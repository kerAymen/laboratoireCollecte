import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [HealthModule, RoomsModule],
})
export class AppModule {}
