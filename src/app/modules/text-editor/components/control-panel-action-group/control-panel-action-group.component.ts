import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  Renderer2,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { TxPluginManifest } from '../../tokens/editor-plugin-manifest/editor-plugin-manifest.token';

@Component({
  selector: 'app-control-panel-action-group',
  templateUrl: './control-panel-action-group.component.html',
  styleUrls: [ './control-panel-action-group.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class TxControlPanelActionGroupComponent implements OnInit {
  @Input() plugins: TxPluginManifest[];

  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.plugins.forEach(plugin => {
      this.renderPluginComponent(plugin.component, plugin.componentOptions);
    });
  }

  private renderPluginComponent(component: Type<any>, inputs: {}): void {
    const factory = this.resolver.resolveComponentFactory(component);
    const childComponent = this.viewContainerRef.createComponent(factory);
    Object.assign(childComponent.instance, inputs);
    this.renderer.addClass(childComponent.location.nativeElement, 'editor-action');
  }
}
