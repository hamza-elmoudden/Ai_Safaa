import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AiProductsService { 
    
  private products: any[] = [];

  constructor() {
    const filePath = path.join(process.cwd(), 'src/Data.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    this.products = JSON.parse(rawData);
  }

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find(p => p.id === id);
  }

  filterByConcern(concern: string) {
    return this.products.filter(p =>
      p.concerns?.includes(concern)
    );
  }
}
