import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroArrowLeftOnRectangle,
  heroBell,
  heroCalculator,
  heroMoon,
  heroSun,
  heroUsers,
} from '@ng-icons/heroicons/outline';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroUsers,
      heroCalculator,
      heroArrowLeftOnRectangle,
      heroMoon,
      heroSun,
      heroBell
    }),
  ],
  exports: [IconComponent, NgIconsModule],
})
export class IconModule {}
