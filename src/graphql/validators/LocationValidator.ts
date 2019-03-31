import { Length, IsOptional, IsInt } from 'class-validator';

interface ILocationValidatorPayload {
  locationName: string;
  malePopulation: number;
  femalePopulation: number;
  parentLocationId: string;
}

export class LocationValidator implements ILocationValidatorPayload {
  @Length(2, 50)
  locationName: string;

  @IsInt()
  malePopulation: number;

  @IsInt()
  femalePopulation: number;

  @IsOptional()
  parentLocationId: string;

  constructor({
    locationName,
    malePopulation,
    femalePopulation,
    parentLocationId,
  }: ILocationValidatorPayload) {
    this.locationName = locationName;
    this.malePopulation = malePopulation;
    this.femalePopulation = femalePopulation;
    this.parentLocationId = parentLocationId;
  }
}
