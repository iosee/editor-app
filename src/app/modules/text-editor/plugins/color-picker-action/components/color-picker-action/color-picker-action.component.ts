import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TxEditorActionService, TxEditorCommand, TxEditorStateService } from '../../../../services';

@Component({
  selector: 'app-color-picker-action',
  templateUrl: './color-picker-action.component.html'
})
export class TxColorPickerActionComponent implements OnInit, OnDestroy {
  icon = 'format_color_text';
  color = '#000000';

  private commandName = TxEditorCommand.ForeColor;
  private selectionChangeSubscription: Subscription;

  constructor(
    private editorStateService: TxEditorStateService,
    private editorActionService: TxEditorActionService
  ) {
  }

  onSelect(color: string): void {
    this.editorActionService.execCommand(TxEditorCommand.StyleWithCSS, true);
    this.editorActionService.execCommand(this.commandName, color);
    this.editorActionService.execCommand(TxEditorCommand.StyleWithCSS, false);
  }

  ngOnInit(): void {
    this.selectionChangeSubscription = this.editorStateService.getSelection().subscribe(() => {
      this.color = this.editorActionService.queryCommandValue(this.commandName);
    });
  }

  ngOnDestroy(): void {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
  }
}
