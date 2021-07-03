import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'overview',         icon:'fa-home',       class: '' },
    { path: '/containers',         title: 'add container',        icon:'fa-plus-square-o',    class: '' },
    { path: '/table',          title: 'containers',              icon:'fa-pie-chart',      class: '' },
    { path: '/agnets',          title: 'agnets',              icon:' fa-users',      class: '' },
    { path: '/maps',          title: 'Maps',              icon:'fa-map',      class: '' },

 

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
