import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TxEditorStateService } from '../../services';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: [ './file.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TxBodyComponent implements OnInit, OnDestroy {
  @ViewChild('editableArea') editableArea: ElementRef;
  private removeSelectionChangeListener: Function;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private editorStateService: TxEditorStateService
  ) {
  }

  ngOnInit(): void {
    this.listenForSelection();
  }

  onInput(): void {
    this.editorStateService.setContent(this.editableArea.nativeElement.innerHTML);
  }

  listenForSelection(): void {
    this.removeSelectionChangeListener = this.renderer.listen(this.document, 'selectionchange', () => {
      this.editorStateService.setSelection(this.document.getSelection());
    });
  }

  ngOnDestroy(): void {
    if (this.removeSelectionChangeListener) {
      this.removeSelectionChangeListener();
    }
  }
}
