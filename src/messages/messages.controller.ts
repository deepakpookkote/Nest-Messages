import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      {
        id: 1,
        text: 'Hello World',
      },
      {
        id: 2,
        text: 'Hello Universe',
      },
    ];
  }

  @Post()
  createMessage() {
    return {
      id: 3,
      text: 'Hello Nest',
    };
  }

  @Get('/:id')
  getMessage(id: number) {
    return {
      id,
      text: 'Hello World',
    };
  }
}
