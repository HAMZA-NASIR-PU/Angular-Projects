import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class BaseRepository {
    abstract func1(): void;
    abstract func2(): string;
}