import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

/**
 * App Modules
 */
import { AngularMaterialModule } from './angular-material/angular-material.module';

/**
 * App Components
 */
import { AppComponent } from './app.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { ObsMergeComponent } from './obs-merge/obs-merge.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReusableAnimationComponent } from './reusable-animation/reusable-animation.component';
import { PipeVsFunctionComponent } from './pipe-vs-function/pipe-vs-function.component';
import { FadeBoxComponent } from './reusable-animation/fade-box/fade-box.component';
import { FadeButtonComponent } from './reusable-animation/fade-button/fade-button.component';

const appRoutes: Routes = [
  { path: 'submit-button', component: SubmitButtonComponent },
  { path: 'obs-merge', component: ObsMergeComponent },
  { path: 'reusable-animation', component: ReusableAnimationComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SubmitButtonComponent,
    ObsMergeComponent,
    ReusableAnimationComponent,
    PipeVsFunctionComponent,
    FadeBoxComponent,
    FadeButtonComponent
  ],
  imports: [
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
