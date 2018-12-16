import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SYNONYMS_URL = 'https://api.datamuse.com/words';

export interface TxSynonym {
  word: string;
}

@Injectable({
  providedIn: 'root'
})
export class TxSynonymsService {
  constructor(private http: HttpClient) {
  }

  getSynonyms(word: string): Observable<TxSynonym[]> {
    return this.http.get<TxSynonym[]>(SYNONYMS_URL, {
      params: {
        rel_syn: word
      }
    });
  }
}
