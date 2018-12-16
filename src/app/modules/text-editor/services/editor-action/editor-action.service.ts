import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export enum TxEditorCommand {
  Bold = 'bold',
  Indent = 'indent',
  Italic = 'italic',
  JustifyCenter = 'justifyCenter',
  JustifyFull = 'justifyFull',
  JustifyLeft = 'justifyLeft',
  JustifyRight = 'justifyRight',
  Outdent = 'outdent',
  RemoveFormat = 'removeFormat',
  StrikeThrough = 'strikeThrough',
  Underline = 'underline',
  ForeColor = 'foreColor',
  StyleWithCSS = 'styleWithCSS'
}

@Injectable({
  providedIn: 'root'
})
export class TxEditorActionService {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  execCommand(command: TxEditorCommand, value?: any): boolean {
    const range = this.getCurrentRangePosition();
    const result = this.document.execCommand(command, false, value);
    this.setNewRangePosition(range);
    return result;
  }

  queryCommandState(command: TxEditorCommand): boolean {
    return this.document.queryCommandState(command);
  }

  queryCommandValue(command: TxEditorCommand): string {
    return this.document.queryCommandValue(command);
  }

  replaceSelectedText(text: string) {
    const selection = this.document.getSelection();
    if (selection.rangeCount) {
      if (/.+?\s+$/.test(selection.toString())) {
        selection.extend(selection.focusNode, selection.focusOffset - 1);
      }

      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(this.document.createTextNode(text));
    }
  }

  private getCurrentRangePosition(): Range | null {
    const selection = this.document.getSelection();
    if (selection && selection.type === 'Caret' && selection.getRangeAt && selection.rangeCount) {
      return selection.getRangeAt(0);
    }
    return null;
  }

  private setNewRangePosition(range?: Range) {
    if (range) {
      const selection = this.document.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}
