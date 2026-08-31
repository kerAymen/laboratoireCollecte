import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [HealthModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
