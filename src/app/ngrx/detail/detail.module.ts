import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DetailEffects } from './detail.effects';
import { reducer, detailsFeatureKey } from './detail.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(detailsFeatureKey, reducer),
        EffectsModule.forFeature([DetailEffects])
    ]
})
export class DetailModule {}
