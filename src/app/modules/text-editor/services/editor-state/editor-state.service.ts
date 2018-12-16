import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class TxEditorStateService {
  private content: BehaviorSubject<string> = new BehaviorSubject('');
  private selection: BehaviorSubject<Selection> = new BehaviorSubject(undefined);

  constructor() {
  }

  getContent(): Observable<string> {
    return this.content;
  }

  setContent(content: string): void {
    this.content.next(content);
  }

  getSelection(): Observable<Selection> {
    return this.selection.pipe(
      filter((state) => Boolean(state))
    );
  }

  getSelectionSnapshot(): Selection {
    return this.selection.getValue();
  }

  setSelection(selection: Selection): void {
    this.selection.next(selection);
  }
}
