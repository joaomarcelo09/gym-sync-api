export class CreateSheetDto {
  weight: number;
  height: number;
  biotype: string;
  exercises: SheetExercisesWithIntensityDto[];
}

class SheetExercisesWithIntensityDto {
  idIntensity: string;
  idExercise: string;
}
