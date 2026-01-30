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

  async toggle(id: number) {
    const todo = await this.prismaService.todo.findUniqueOrThrow({
      where: { id },
    });
    return this.prismaService.todo.update({
      where: { id },
      data: { completed: !todo.completed },
    });
  }

  delete(id: number) {
    return this.prismaService.todo.delete({ where: { id } });
  }
}
