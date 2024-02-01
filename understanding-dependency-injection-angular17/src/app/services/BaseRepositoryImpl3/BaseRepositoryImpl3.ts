import { BaseRepository } from "../BaseRepository/BaseRepository";
import { Injectable } from '@angular/core';

@Injectable()
export class BaseRepositoryImpl3 implements BaseRepository {
    constructor() {
        console.log("Constructor of BaseRepositoryImpl3 called...");
    }

    func1(): void {
        console.log("BaseRepositoryImpl3 func1()");
    }
    func2(): string {
        return "BaseRepositoryImpl3 func2()";
    }
}