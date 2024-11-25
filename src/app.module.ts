import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthleteModule } from './athlete/athlete.module';
import { ExerciseModule } from './exercise/exercise.module';
import { IntensityModule } from './intensity/intensity.module';

@Module({
  imports: [AthleteModule, ExerciseModule, IntensityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
