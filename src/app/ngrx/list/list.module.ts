import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ListEffects } from './list.effects';
import { reducer, listsFeatureKey } from './list.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(listsFeatureKey, reducer),
        EffectsModule.forFeature([ListEffects])
    ]
})
export class ListModule {}
