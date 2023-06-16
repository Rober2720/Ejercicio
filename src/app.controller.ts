import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("/persona/")
  async getPersonas(@Res() res: Response) {
    const data = await this.appService.getPersonas();
    return res.json({ "Usuario": data } )
  }

  @Post("/persona/")
  async addPersona(@Req() req: Request, @Res() res: Response ) {
     const obj = req.body
     const data = await this.appService.addPersona(obj);
     return res.json({ "Guardado": data } )
  }
  
 
 @Delete('/persona/:id')
 async deletePersona(@Req() req: Request, @Res() res: Response ) {
    const { id } = req.params;
    const data = await this.appService.deletePersona(id);
    return res.json({ "mensaje": data } )
  }
  
  @Get("/persona/:id")
  async getPersona(@Req() req: Request,@Res() res: Response) {
    const { id } = req.params;
    const data = await this.appService.getPersona(id);
    return res.json({ "data": data } )
  }

  @Put("/persona/")
  async updatePersona(@Req() req: Request, @Res() res: Response ) {
     const obj = req.body
     const data = await this.appService.updatePersona(obj);
     return res.json({ "msg": data } )
  }
}
