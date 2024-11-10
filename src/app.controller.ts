import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import Id from './shared/Id';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: PrismaService) {}
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

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return this.appService.update('user', body, id);
  }
}
