import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';
import { AppComponent } from './app.component';
import { CarToolModule } from './car-tool/car-tool.module';
import { SharedModule } from './shared/shared.module';
import { CounterContainerComponent } from './components/counter-container/counter-container.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { TrackbyDemoComponent } from './components/trackby-demo/trackby-demo.component';

@NgModule({
  declarations: [AppComponent, CounterContainerComponent, CounterDisplayComponent, TrackbyDemoComponent],
  imports: [BrowserModule, ColorToolModule, CarToolModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
