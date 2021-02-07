import { Controller, Get } from '@nestjs/common';

@Controller('my-first')
export class MyFisrtController { 

    @Get('hello-world')
    index(){
        return {'key': 'values'}
    }

}
