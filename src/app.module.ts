import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthleteModule } from './athlete/athlete.module';
import { GeminiService } from './services/gemini/gemini.service';

@Module({
  imports: [AthleteModule],
  controllers: [AppController],
  providers: [AppService, GeminiService],
})
export class AppModule {}
