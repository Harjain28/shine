import { Directive } from '@angular/core';

@Directive({
  selector: '[appChunkpipe]',
  standalone: true

})
export class ChunkpipeDirective {

    transform(array: any[], chunkSize: number): any[][] {
        if (!array || !array.length) {
          return [];
        }
    
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          chunks.push(array.slice(i, i + chunkSize));
        }
    
        return chunks;
      }
  }    
