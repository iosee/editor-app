import {
  providePluginManifest,
  TxPluginManifest
} from '../../tokens/editor-plugin-manifest/editor-plugin-manifest.token';
import { TxSynonymsActionComponent } from './components/synonyms-action/synonyms-action.component';
import { Provider } from '@angular/core';

const TX_SYNONYMS_ACTION_MANIFEST: TxPluginManifest<TxSynonymsActionComponent> = {
  component: TxSynonymsActionComponent,
  groupID: 3
};

export const TX_SYNONYMS_ACTION_PROVIDER: Provider = providePluginManifest(TX_SYNONYMS_ACTION_MANIFEST);
