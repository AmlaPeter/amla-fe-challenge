import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VersionEffects } from './version.effects';
import { reducer, versionsFeatureKey } from './version.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(versionsFeatureKey, reducer),
        EffectsModule.forFeature([VersionEffects])
    ]
})
export class VersionModule {}
