import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  isometricIconsBanana,
  isometricIconsDonut,
  isometricIconsOnion,
  IsoMetricIconsModule,
  IsometricIconsRegistry,
} from '@icons-monorepo/isometric-icons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IsoMetricIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconRegistry: IsometricIconsRegistry) {
    iconRegistry.registerIcons([
      isometricIconsOnion,
      isometricIconsBanana,
      isometricIconsDonut,
    ]);
  }
}
