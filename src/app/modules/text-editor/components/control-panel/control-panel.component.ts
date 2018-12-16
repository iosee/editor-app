import { Component, Input } from '@angular/core';
import { TxPluginManifest } from '../../tokens/editor-plugin-manifest/editor-plugin-manifest.token';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: [ './control-panel.component.css' ]
})
export class TxControlPanelComponent {
  @Input() groups: { [ key: string ]: TxPluginManifest[] };
}
