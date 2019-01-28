import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BoxEntryComponent } from "./box-entry/box-entry.component";
import { OptimizedBoxesComponent } from "./optimized-boxes/optimized-boxes.component";

const appRoutes: Routes = [
  { path: "optimized-boxes", component: OptimizedBoxesComponent },
  { path: "box-entry", component: BoxEntryComponent },
  { path: "", redirectTo: "/box-entry", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, BoxEntryComponent, OptimizedBoxesComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BoxEntryComponent, OptimizedBoxesComponent]
})
export class AppModule {}
