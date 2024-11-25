import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthleteModule } from './athlete/athlete.module';
import { GeminiService } from './services/gemini/gemini.service';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [AthleteModule, ExerciseModule],
  controllers: [AppController],
  providers: [AppService, GeminiService],
})
export class AppModule {}
