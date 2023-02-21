import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventDetailsComponent } from './components/eventDetails-area/add-event-details/add-event-details.component';
import { EventDetailsListComponent } from './components/eventDetails-area/event-details-list/event-details-list.component';

const routes: Routes = [
    {path:"event", component:EventDetailsListComponent},
    {path:"event/new", component:AddEventDetailsComponent},
    {path:"", redirectTo:"event", pathMatch:"full"},
    {path:"**", redirectTo:"event"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
