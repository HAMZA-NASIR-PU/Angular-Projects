import { BaseRepository } from "../BaseRepository/BaseRepository";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseRepositoryImpl2 implements BaseRepository {
    func1(): void {
        console.log("BaseRepositoryImpl2 func1()");
    }
    func2(): string {
        return "BaseRepositoryImpl2 func2()";
    }
}