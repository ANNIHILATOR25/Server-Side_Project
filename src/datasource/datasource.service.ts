import { Injectable } from '@nestjs/common';
import { Expo } from 'src/expos/expo.entity';

@Injectable()
export class DatasourceService {
  private expos: Expo[] = [];

  getExpos(): Expo[] {
    return this.expos;
  }
  findIncomplete(): Expo[] {
    return this.expos
  }
}
