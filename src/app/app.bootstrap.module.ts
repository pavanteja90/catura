import { NgModule } from "@angular/core";

//Bootstrap Modules
import { AccordionModule } from "ngx-bootstrap/accordion";
import { AlertModule } from "ngx-bootstrap/alert";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { CarouselModule } from "ngx-bootstrap/carousel";
// import * as chronos from "ngx-bootstrap/chronos";
import { CollapseModule } from "ngx-bootstrap/collapse";
// import { ComponentLoader } from "ngx-bootstrap/component-loader";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { RatingModule } from "ngx-bootstrap/rating";
import { SortableModule } from "ngx-bootstrap/sortable";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { TooltipModule } from "ngx-bootstrap/tooltip";

@NgModule({
    imports: [
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        SortableModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TypeaheadModule.forRoot(),
        TooltipModule.forRoot()
    ],
    exports: [
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        BsDatepickerModule,
        BsDropdownModule,
        ModalModule,
        PaginationModule,
        PopoverModule,
        ProgressbarModule,
        RatingModule,
        SortableModule,
        TabsModule,
        TimepickerModule,
        TypeaheadModule,
        TooltipModule
    ]
})
export class AppBootstrapModule{

}