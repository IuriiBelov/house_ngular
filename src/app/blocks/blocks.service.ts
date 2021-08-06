import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Block} from "./model/block";
import {Flat} from "../flats/model/flat";

@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private http: HttpClient){}

  getAllBlocks(): Block[] {

    const url: string = "http://localhost:8080/blocks?page=1&size=5";

    let allBlocks: Block[] = [];

    this.http
        .get<Block[]>(url)
        .subscribe((data:Block[]) => {
          for (const elem of data) {
              allBlocks.push(elem);
          }
        });

    return allBlocks;
  }

  getBlockFlats(blockId: number): Flat[] {

      const url: string = "http://localhost:8080/blocks/" + blockId + "/flats";

      let flats: Flat[] = [];

      this.http
          .get<Flat[]>(url)
          .subscribe((data:Flat[]) => {
              for (const elem of data) {
                  flats.push(elem);
              }
          });

      return flats;
  }
}
