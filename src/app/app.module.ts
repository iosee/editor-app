import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './shared/services/text-service/text.service';
import { BodyComponent } from './shared/components/body/body.component';
import { TxEditorModule } from './modules/text-editor/text-editor.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TxEditorModule
  ],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
