import { NgModule } from '@angular/core';

//* Modules 
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';


@NgModule({
    imports: [],
    exports: [
        TooltipModule,
        CardModule,
    ]
})
export class PrimengModule {}