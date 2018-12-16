import { Provider } from '@angular/core';
import { TX_SIMPLE_ACTION_PROVIDERS } from './simple-action/simple-action-plugin.manifest';
import { TX_COLOR_PICKER_ACTION_PROVIDER } from './color-picker-action/color-picker-action.manifest';
import { TX_SYNONYMS_ACTION_PROVIDER } from './synonyms-action/synonyms-action-plugin.manifest';
import { TxSimpleActionComponent } from './simple-action/components/simple-action/simple-action.component';
import { TxColorPickerActionComponent } from './color-picker-action/components/color-picker-action/color-picker-action.component';
import { TxSynonymsActionComponent } from './synonyms-action/components/synonyms-action/synonyms-action.component';

export const TX_PLUGINS_COMPONENTS = [
  TxSimpleActionComponent, TxColorPickerActionComponent, TxSynonymsActionComponent
];

export const TX_PLUGINS_PROVIDERS: Provider[] = [
  ...TX_SIMPLE_ACTION_PROVIDERS,
  TX_COLOR_PICKER_ACTION_PROVIDER,
  TX_SYNONYMS_ACTION_PROVIDER
];
