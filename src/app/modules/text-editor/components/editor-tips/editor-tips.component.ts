import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editor-tips',
  templateUrl: './editor-tips.component.html',
  styleUrls: [ './editor-tips.component.css' ]
})
export class TxEditorTipsComponent {
  @Input() tips: string[];
}
