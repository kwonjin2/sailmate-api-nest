import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

type Gathering = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private gatherings: Gathering[] = [];

  getGatherings() {
    return this.gatherings;
  }

  postGatherings(title: string, description: string): Gathering {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const result: Gathering = {
      id,
      title,
      description,
      createdAt,
    };
    this.gatherings.push(result);
    return result;
  }
}
