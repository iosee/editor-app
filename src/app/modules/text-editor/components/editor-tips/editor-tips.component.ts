import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-editor-tips',
  templateUrl: './editor-tips.component.html',
  styleUrls: [ './editor-tips.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TxEditorTipsComponent {
  @Input() tips: string[];
}
