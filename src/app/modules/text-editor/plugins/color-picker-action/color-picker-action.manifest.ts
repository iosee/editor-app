import {
  providePluginManifest,
  TxPluginManifest
} from '../../tokens/editor-plugin-manifest/editor-plugin-manifest.token';
import { TxColorPickerActionComponent } from './components/color-picker-action/color-picker-action.component';
import { Provider } from '@angular/core';

const TX_FORE_COLOR_ACTION_MANIFEST: TxPluginManifest<TxColorPickerActionComponent> = {
  component: TxColorPickerActionComponent,
  groupID: 0.1
};

export const TX_COLOR_PICKER_ACTION_PROVIDER: Provider = providePluginManifest(TX_FORE_COLOR_ACTION_MANIFEST);
