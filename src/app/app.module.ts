import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBlockComponent } from './MyComponent/input-block/input-block.component';
import { OutputBlockComponent } from './MyComponent/output-block/output-block.component';
import { InputDateComponent } from './MyComponent/input-date/input-date.component';
import { SubmitButtonComponent } from './MyComponent/submit-button/submit-button.component';
import { FormsModule } from '@angular/forms';
import { ToggleSliderComponent } from './MyComponent/toggle-slider/toggle-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InputBlockComponent,
    OutputBlockComponent,
    InputDateComponent,
    SubmitButtonComponent,
    ToggleSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
