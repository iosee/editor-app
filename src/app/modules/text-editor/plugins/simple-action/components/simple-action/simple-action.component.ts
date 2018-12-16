import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TxEditorActionService, TxEditorCommand, TxEditorStateService } from '../../../../services';

@Component({
  selector: 'app-simple-action',
  templateUrl: './simple-action.component.html'
})
export class TxSimpleActionComponent implements OnInit, OnDestroy {
  @Input() commandName: TxEditorCommand;
  @Input() icon: string;

  isActive: boolean;

  private selectionChangeSubscription: Subscription;

  constructor(
    private editorStateService: TxEditorStateService,
    private editorActionService: TxEditorActionService
  ) {
  }

  onClick(): void {
    this.editorActionService.execCommand(this.commandName);
  }

  ngOnInit(): void {
    this.selectionChangeSubscription = this.editorStateService.getSelection().subscribe(() => {
      this.isActive = this.editorActionService.queryCommandState(this.commandName);
    });
  }

  ngOnDestroy(): void {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
  }
}
