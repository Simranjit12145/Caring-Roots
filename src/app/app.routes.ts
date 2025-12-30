import { Routes } from "@angular/router";
import { MainComponent } from "./layout/main/main.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "",
  },
  {
    path: "",
    component: MainComponent,
    loadChildren: () => import("./modules/afterLoginpages/module-routes").then((m) => m.routes),
  }
];
  