import { InjectionToken, Provider, Type } from '@angular/core';

export interface TxPluginManifest<T = any> {
  groupID?: string | number;
  component: Type<T>;
  componentOptions?: { [key in keyof T]?: T[key] };
}

export const TX_EDITOR_PLUGIN_MANIFEST = new InjectionToken<TxPluginManifest[]>('TX_EDITOR_PLUGIN_MANIFEST');

export function providePluginManifest(pluginManifest: TxPluginManifest): Provider {
  return {
    provide: TX_EDITOR_PLUGIN_MANIFEST,
    multi: true,
    useValue: pluginManifest
  };
}
