import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  getIdFromUrl(url) {
    var tab[] = url.split('/');
    return tab[tab.length -2];
  }
}
