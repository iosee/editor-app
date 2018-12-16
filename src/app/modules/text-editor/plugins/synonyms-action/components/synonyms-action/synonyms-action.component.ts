import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TxEditorActionService, TxEditorStateService } from '../../../../services';
import { TxSynonym, TxSynonymsService } from '../../services/synonyms/synonyms.service';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { sortBy } from 'ramda';

@Component({
  selector: 'app-synonyms-action',
  templateUrl: './synonyms-action.component.html',
  styleUrls: [ './synonyms-action.component.css' ]
})
export class TxSynonymsActionComponent implements OnInit, OnDestroy {
  @ViewChild('list') list: ElementRef;

  synonyms: TxSynonym[];

  private subscription: Subscription;

  constructor(
    private editorStateService: TxEditorStateService,
    private editorActionService: TxEditorActionService,
    private synonymsService: TxSynonymsService,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.listenForSelection();
  }

  onSelect(synonym: string): void {
    this.editorActionService.replaceSelectedText(synonym);
    this.synonyms = [];
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private listenForSelection(): void {
    this.subscription = this.editorStateService.getSelection().pipe(
      debounceTime(300),
      map(selection => selection.toString().trim()),
      distinctUntilChanged(),
      switchMap(selectedText => this.synonymsService.getSynonyms(selectedText))
    ).subscribe((synonyms: TxSynonym[]) => {
      this.synonyms = sortBy(synonym => synonym.word, synonyms);
      this.adjustListPosition();
    });
  }

  private adjustListPosition() {
    const selection = this.editorStateService.getSelectionSnapshot();
    const el = this.list ? this.list.nativeElement : null;
    if (el && selection.rangeCount) {
      const range = selection.getRangeAt(0);
      if (range) {
        const rect = range.getBoundingClientRect();
        this.renderer.setStyle(el, 'top', `${rect.top + rect.height + 2}px`);
        this.renderer.setStyle(el, 'left', `${rect.left - 4}px`);
      }
    }
  }
}
