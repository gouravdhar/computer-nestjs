import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private power: PowerService) {}
  getData() {
    console.log('Get 20 watts of power');
    this.power.supplyPower(20);
    return 'data!';
  }
}
