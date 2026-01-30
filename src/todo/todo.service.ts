import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.todo.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  create(title: string) {
    return this.prismaService.todo.create({ data: { title } });
  }
}
