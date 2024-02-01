import { BaseRepository } from "../BaseRepository/BaseRepository";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseRepositoryImpl3 implements BaseRepository {
    func1(): void {
        console.log("BaseRepositoryImpl3 func1()");
    }
    func2(): string {
        return "BaseRepositoryImpl3 func2()";
    }
}