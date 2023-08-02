import { NgModule } from '@angular/core';

//* Modules 
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { SpeedDialModule } from 'primeng/speeddial';
import { TieredMenuModule} from 'primeng/tieredmenu';
import { MegaMenuModule} from 'primeng/megamenu';
import { PanelMenuModule} from 'primeng/panelmenu';
import { MenuModule} from 'primeng/menu';
import { SplitButtonModule} from 'primeng/splitbutton';
import { ProgressSpinnerModule} from 'primeng/progressspinner';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { DropdownModule} from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [],
    exports: [
        ToastModule,
        TooltipModule,
        CardModule,
        ToolbarModule,
        MegaMenuModule,
        PanelMenuModule,
        MenuModule,
        SplitButtonModule,
        ProgressSpinnerModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        TieredMenuModule,
        SpeedDialModule,
        ConfirmDialogModule,
        ButtonModule,
        TabMenuModule,
        TableModule,
        DynamicDialogModule,
        DialogModule,
        CascadeSelectModule,
        PanelMenuModule,
        MenubarModule,
        PanelMenuModule,
        ConfirmDialogModule,
        PanelModule,
        MessagesModule
    ]
})
export class PrimengModule {}