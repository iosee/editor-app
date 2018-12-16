import { Component, Inject, Input } from '@angular/core';
import { groupBy } from 'ramda';

import { TxEditorStateService } from '../../services';
import {
  TX_EDITOR_PLUGIN_MANIFEST,
  TxPluginManifest
} from '../../tokens/editor-plugin-manifest/editor-plugin-manifest.token';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: [ './editor.component.css' ],
  providers: [ TxEditorStateService ] // Each editor should have its own state service
})
export class TxEditorComponent {
  @Input() text = '';

  tips = [ 'Select some word to see the list of synonyms (if any)' ];

  groups: { [ key: string ]: TxPluginManifest[] } = groupBy((plugin) => {
    return String(plugin.groupID != null ? plugin.groupID : 0);
  }, this.plugins);

  constructor(@Inject(TX_EDITOR_PLUGIN_MANIFEST) private plugins: TxPluginManifest[]) {
  }
}
