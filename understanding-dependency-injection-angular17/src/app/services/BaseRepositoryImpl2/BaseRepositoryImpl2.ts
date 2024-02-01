import { BaseRepository } from "../BaseRepository/BaseRepository";
import { Injectable } from '@angular/core';

@Injectable()
export class BaseRepositoryImpl2 implements BaseRepository {
    constructor() {
        console.log("Constructor of BaseRepositoryImpl2 called...");
    }

    func1(): void {
        console.log("BaseRepositoryImpl2 func1()");
    }
    func2(): string {
        return "BaseRepositoryImpl2 func2()";
    }
}