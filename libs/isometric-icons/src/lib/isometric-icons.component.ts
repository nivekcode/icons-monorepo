import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';

import { isometricIcon } from './isometric-icons';
import { IsometricIconsRegistry } from './isometric-icons-registry.service';

@Component({
  selector: 'isometric-icon',
  template: ` <ng-content></ng-content> `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsometricIconComponent {
  private svgIcon: SVGElement | undefined;

  @Input()
  set name(iconName: isometricIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.isometricIconsRegistry.getIcon(iconName);

    if (!svgData) {
      return;
    }

    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private isometricIconsRegistry: IsometricIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
