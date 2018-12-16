import {
  providePluginManifest,
  TxPluginManifest
} from '../../tokens/editor-plugin-manifest/editor-plugin-manifest.token';
import { TxSimpleActionComponent } from './components/simple-action/simple-action.component';
import { TxEditorCommand } from '../../services';
import { Provider } from '@angular/core';

const TX_ALIGN_ACTIONS_GROUP_ID = 1;
const TX_INDENT_ACTION_GROUP_ID = 2;
const TX_GENERAL_ACTIONS_GROUP_ID = 3;

const TX_BOLD_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.Bold,
    icon: 'format_bold'
  }
};
const TX_ITALIC_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.Italic,
    icon: 'format_italic'
  }
};
const TX_UNDERLINE_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.Underline,
    icon: 'format_underline'
  }
};
const TX_STRIKE_THROUGH_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.StrikeThrough,
    icon: 'format_strikethrough'
  }
};

const TX_ALIGN_JUSTIFY_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  groupID: TX_ALIGN_ACTIONS_GROUP_ID,
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.JustifyFull,
    icon: 'format_align_justify'
  }
};
const TX_ALIGN_LEFT_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  groupID: TX_ALIGN_ACTIONS_GROUP_ID,
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.JustifyLeft,
    icon: 'format_align_left'
  }
};
const TX_ALIGN_CENTER_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  groupID: TX_ALIGN_ACTIONS_GROUP_ID,
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.JustifyCenter,
    icon: 'format_align_center'
  }
};
const TX_ALIGN_RIGHT_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  groupID: TX_ALIGN_ACTIONS_GROUP_ID,
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.JustifyRight,
    icon: 'format_align_right'
  }
};
const TX_INDENT_INCREASE_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  groupID: TX_INDENT_ACTION_GROUP_ID,
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.Indent,
    icon: 'format_indent_increase'
  }
};
const TX_INDENT_DECREASE_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  groupID: TX_INDENT_ACTION_GROUP_ID,
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.Outdent,
    icon: 'format_indent_decrease'
  }
};
const TX_CLEAR_FORMAT_ACTION_MANIFEST: TxPluginManifest<TxSimpleActionComponent> = {
  groupID: TX_GENERAL_ACTIONS_GROUP_ID,
  component: TxSimpleActionComponent,
  componentOptions: {
    commandName: TxEditorCommand.RemoveFormat,
    icon: 'format_clear'
  }
};

export const TX_SIMPLE_ACTION_PROVIDERS: Provider[] = [
  providePluginManifest(TX_BOLD_ACTION_MANIFEST),
  providePluginManifest(TX_ITALIC_ACTION_MANIFEST),
  providePluginManifest(TX_UNDERLINE_ACTION_MANIFEST),
  providePluginManifest(TX_STRIKE_THROUGH_ACTION_MANIFEST),

  providePluginManifest(TX_ALIGN_JUSTIFY_ACTION_MANIFEST),
  providePluginManifest(TX_ALIGN_LEFT_ACTION_MANIFEST),
  providePluginManifest(TX_ALIGN_CENTER_ACTION_MANIFEST),
  providePluginManifest(TX_ALIGN_RIGHT_ACTION_MANIFEST),

  providePluginManifest(TX_INDENT_INCREASE_ACTION_MANIFEST),
  providePluginManifest(TX_INDENT_DECREASE_ACTION_MANIFEST),

  providePluginManifest(TX_CLEAR_FORMAT_ACTION_MANIFEST)
];



