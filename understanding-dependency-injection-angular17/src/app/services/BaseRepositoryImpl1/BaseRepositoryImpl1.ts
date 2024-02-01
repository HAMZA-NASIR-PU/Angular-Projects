import { BaseRepository } from "../BaseRepository/BaseRepository";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseRepositoryImpl1 implements BaseRepository {
    constructor() {
        console.log("Constructor of BaseRepositoryImpl1 called...");
    }

    func1(): void {
        console.log("BaseRepositoryImpl1 func1()");
    }
    func2(): string {
        return "BaseRepositoryImpl1 func2()";
    }
}