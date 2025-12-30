import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "",
    loadComponent: () => import("./homepage/homepage.component").then((m) => m.HomepageComponent),
  },
 

];
