import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository ,FindOneOptions } from 'typeorm';
import { Persona } from './persona.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}

  getPersonas(): Promise<any> {
    return this.personaRepository.find();
  }

  addPersona(obj:any):Promise<any> {
    return this.personaRepository.insert(obj);
  }

  deletePersona(id:string):Promise<any> {
    return this.personaRepository.delete(id);
  }

  getPersona(id: string): Promise<Persona> {
    const options: FindOneOptions<Persona> = { where: { id: parseInt(id) } };
    return this.personaRepository.findOne(options);
  }

  updatePersona(obj: any): Promise<any> {
    const { id, ...datosActualizacion } = obj;
    return this.personaRepository.update(id, datosActualizacion);
  }
  
  

}
