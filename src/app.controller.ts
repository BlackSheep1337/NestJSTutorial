import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import Id from './shared/Id';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: PrismaService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post()
  createUser(@Body() user: any) {
    return this.appService.create('user', {
      ...user,
      id: user.id ?? Id.create(),
    });
  }

  @Get()
  findUsers() {
    return this.appService.findMany('user');
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.appService.delete('user', id);
  }
}
