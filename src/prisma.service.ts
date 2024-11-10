import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  getHello(): string {
    return 'Hello World!';
  }

  create<T>(model: string, data: T) {
    return this[model].create({ data })
  }

  findMany<T>(model: string) {
    return this[model].findMany();
  }

  delete<T>(model: string, id: T) {
    return this[model].delete({ where: { id } });
  }
}
