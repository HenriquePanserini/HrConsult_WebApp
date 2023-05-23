import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {
  alternarComponente: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }
}
