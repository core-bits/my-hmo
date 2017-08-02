import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiAlertComponent } from './components/ni-alert/ni-alert.component';
import { NiBadgeComponent } from './components/ni-badge/ni-badge.component';
import { NiBreadcrumbComponent } from './components/ni-breadcrumb/ni-breadcrumb.component';
import { NiButtonComponent } from './components/ni-button/ni-button.component';
import { NiCardComponent } from './components/ni-card/ni-card.component';
import { NiFileComponent } from './components/ni-file/ni-file.component';
import { NiHTimelineComponent } from './components/ni-h-timeline/ni-h-timeline.component';

import { ColorDirective } from './components/directives/color/color.directive';
import { BgDirective } from './components/directives/bg/bg.directive';
import { GradientDirective } from './components/directives/gradient/gradient.directive';

const SharedModuleComponents = [
  NiAlertComponent,
  NiBadgeComponent,
  NiBreadcrumbComponent,
  NiButtonComponent,
  NiCardComponent,
  NiFileComponent,
  NiHTimelineComponent,
  ColorDirective,
  BgDirective,
  GradientDirective];

@NgModule({
  imports: [CommonModule],
  declarations: SharedModuleComponents,
  exports: SharedModuleComponents
})
export class SharedModule { }
