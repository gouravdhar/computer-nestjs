import { Controller, Get } from '@nestjs/common';

import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private disk: DiskService,
    private cpu: CpuService,
  ) {}

  @Get()
  run() {
    return [this.cpu.compute(2, 4), this.disk.getData()];
  }
}
