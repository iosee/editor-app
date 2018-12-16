import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';

import {
  TxBodyComponent,
  TxControlPanelActionGroupComponent,
  TxControlPanelComponent,
  TxEditorComponent,
  TxEditorTipsComponent
} from './components';
import { TX_PLUGINS_COMPONENTS, TX_PLUGINS_PROVIDERS } from './plugins';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ColorPickerModule
  ],
  declarations: [
    TxBodyComponent,
    TxControlPanelComponent,
    TxEditorComponent,
    TxControlPanelActionGroupComponent,
    TxEditorTipsComponent,
    ...TX_PLUGINS_COMPONENTS
  ],
  exports: [ TxEditorComponent ],
  entryComponents: [ ...TX_PLUGINS_COMPONENTS ],
  providers: [
    ...TX_PLUGINS_PROVIDERS
  ]
})
export class TxEditorModule {
}
