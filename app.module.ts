import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';
import { BindingsComponent } from './bindings/bindings.component';
import { IfcompComponent } from './ifcomp/ifcomp.component';
import { ForcompComponent } from './forcomp/forcomp.component';
import { ForloopComponent } from './forloop/forloop.component';
import { UtilComponent } from './util/util.component';
import { SamplesiteComponent } from './samplesite/samplesite.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    GreenComponent,
    BlueComponent,
    BindingsComponent,
    IfcompComponent,
    ForcompComponent,
    ForloopComponent,
    UtilComponent,
    SamplesiteComponent,
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
