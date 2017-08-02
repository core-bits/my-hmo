import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLayoutsComponent } from "app/pages/layouts/layouts.component";
import { PageSignIn1Component } from "app/pages/extra-pages/sign-in-1/sign-in-1.component";
import { PageSignIn3Component } from "app/pages/extra-pages/sign-in-3/sign-in-3.component";
import { PageSignUp1Component } from "app/pages/extra-pages/sign-up-1/sign-up-1.component";
import { PageForgotComponent } from "app/pages/extra-pages/forgot/forgot.component";
import { PageConfirmComponent } from "app/pages/extra-pages/confirm/confirm.component";
import { Page404Component } from "app/pages/extra-pages/page-404/page-404.component";
import { Page500Component } from "app/pages/extra-pages/page-500/page-500.component";
import { DefaultLayoutComponent } from "app/layouts/default/default.component";
import { DefaultCLayoutComponent } from "app/layouts/default-c/default-c.component";
import { BoxedLayoutComponent } from "app/layouts/boxed/boxed.component";
import { BoxedCLayoutComponent } from "app/layouts/boxed-c/boxed-c.component";
import { ExtraLayoutComponent } from "app/layouts/extra/extra.component";
import { PageDashboardComponent } from "app/pages/dashboard/dashboard.component";
import { PageDashboard2Component } from "app/pages/dashboard-2/dashboard-2.component";
import { PageTypographyComponent } from "app/pages/typography/typography.component";
import { PageWidgetsComponent } from "app/pages/widgets/widgets.component";
import { PageCalendarComponent } from "app/pages/calendar/calendar.component";
import { PageButtonComponent } from "app/pages/material-components/button/button.component";
import { PageCardComponent } from "app/pages/material-components/card/card.component";
import { PageCheckboxComponent } from "app/pages/material-components/checkbox/checkbox.component";
import { PageChipsComponent } from "app/pages/material-components/chips/chips.component";
import { PageDialogComponent } from "app/pages/material-components/dialog/dialog.component";
import { PageIconComponent } from "app/pages/material-components/icon/icon.component";
import { PageInputComponent } from "app/pages/material-components/input/input.component";
import { PageListComponent } from "app/pages/material-components/list/list.component";
import { PageMenuComponent } from "app/pages/material-components/menu/menu.component";
import { PageProgressBarComponent } from "app/pages/material-components/progress-bar/progress-bar.component";
import { PageProgressSpinnerComponent } from "app/pages/material-components/progress-spinner/progress-spinner.component";
import { PageRadioButtonComponent } from "app/pages/material-components/radio-button/radio-button.component";
import { PageSelectComponent } from "app/pages/material-components/select/select.component";
import { PageSliderComponent } from "app/pages/material-components/slider/slider.component";
import { PageSlideToggleComponent } from "app/pages/material-components/slide-toggle/slide-toggle.component";
import { PageSnackbarComponent } from "app/pages/material-components/snackbar/snackbar.component";
import { PageTabsComponent } from "app/pages/material-components/tabs/tabs.component";
import { PageToolbarComponent } from "app/pages/material-components/toolbar/toolbar.component";
import { PageTooltipComponent } from "app/pages/material-components/tooltip/tooltip.component";
import { PageNiAlertsComponent } from "app/pages/ni-components/alert/alert.component";
import { PageNiBadgesComponent } from "app/pages/ni-components/badge/badge.component";
import { PageNiBreadcrumbsComponent } from "app/pages/ni-components/breadcrumb/breadcrumb.component";
import { PageNiButtonsComponent } from "app/pages/ni-components/buttons/buttons.component";
import { PageNiCardsComponent } from "app/pages/ni-components/card/card.component";
import { PageSignIn2Component } from "app/pages/extra-pages/sign-in-2/sign-in-2.component";
import { PageNiFilesComponent } from "app/pages/ni-components/file/file.component";
import { PageSignUp2Component } from "app/pages/extra-pages/sign-up-2/sign-up-2.component";
import { PageAboutUsComponent } from "app/pages/pages-service/about-us/about-us.component";
import { PageFaqComponent } from "app/pages/pages-service/faq/faq.component";
import { PageTimelineComponent } from "app/pages/pages-service/timeline/timeline.component";
import { PageInvoiceComponent } from "app/pages/pages-service/invoice/invoice.component";
import { PageNg2ChartsComponent } from "app/pages/charts/ng2-charts/ng2-charts.component";
import { PageNgxChartsComponent } from "app/pages/charts/ngx-charts/ngx-charts.component";
import { PageAmchartsComponent } from "app/pages/charts/amcharts/amcharts.component";
import { PageSimpleTableComponent } from "app/pages/tables/simple-table/simple-table.component";
import { PageBootstrapTablesComponent } from "app/pages/tables/bootstrap-tables/bootstrap-tables.component";
import { PageEditingTableComponent } from "app/pages/tables/editing-table/editing-table.component";
import { PageFilteringTableComponent } from "app/pages/tables/filtering-table/filtering-table.component";
import { PagePaginationTableComponent } from "app/pages/tables/pagination-table/pagination-table.component";
import { PageFormElementsComponent } from "app/pages/forms/form-elements/form-elements.component";
import { PageFormLayoutComponent } from "app/pages/forms/form-layout/form-layout.component";
import { PageFormValidationComponent } from "app/pages/forms/form-validation/form-validation.component";
import { PageGoogleMapComponent } from "app/pages/maps/google-map/google-map.component";
import { PageLeafletMapComponent } from "app/pages/maps/leaflet-map/leaflet-map.component";
import { PageNotFoundComponent } from "app/pages/not-found/not-found.component";
import { LoginComponent } from "app/auth-pages/login/login.component";

const defaultRoutes: Routes = [
    { path: 'dashboard', component: PageDashboardComponent },
    { path: 'dashboard-2', component: PageDashboard2Component },
    { path: 'typography', component: PageTypographyComponent },
    { path: 'widgets', component: PageWidgetsComponent },
    { path: 'calendar', component: PageCalendarComponent },
    { path: 'button', component: PageButtonComponent },
    { path: 'card', component: PageCardComponent },
    { path: 'checkbox', component: PageCheckboxComponent },
    { path: 'chips', component: PageChipsComponent },
    { path: 'dialog', component: PageDialogComponent },
    { path: 'icon', component: PageIconComponent },
    { path: 'input', component: PageInputComponent },
    { path: 'list', component: PageListComponent },
    { path: 'menu', component: PageMenuComponent },
    { path: 'progress-bar', component: PageProgressBarComponent },
    { path: 'progress-spinner', component: PageProgressSpinnerComponent },
    { path: 'radio-button', component: PageRadioButtonComponent },
    { path: 'select', component: PageSelectComponent },
    { path: 'slider', component: PageSliderComponent },
    { path: 'slide-toggle', component: PageSlideToggleComponent },
    { path: 'snackbar', component: PageSnackbarComponent },
    { path: 'tabs', component: PageTabsComponent },
    { path: 'toolbar', component: PageToolbarComponent },
    { path: 'tooltip', component: PageTooltipComponent },
    { path: 'ni-alerts', component: PageNiAlertsComponent },
    { path: 'ni-badges', component: PageNiBadgesComponent },
    { path: 'ni-breadcrumbs', component: PageNiBreadcrumbsComponent },
    { path: 'ni-buttons', component: PageNiButtonsComponent },
    { path: 'ni-cards', component: PageNiCardsComponent },
    { path: 'ni-files', component: PageNiFilesComponent },
    { path: 'sign-in', component: PageSignIn2Component },
    { path: 'sign-up', component: PageSignUp2Component },
    { path: 'about-us', component: PageAboutUsComponent },
    { path: 'faq', component: PageFaqComponent },
    { path: 'timeline', component: PageTimelineComponent },
    { path: 'invoice', component: PageInvoiceComponent },
    { path: 'ng2-charts', component: PageNg2ChartsComponent },
    { path: 'ngx-charts', component: PageNgxChartsComponent },
    { path: 'amcharts', component: PageAmchartsComponent },
    { path: 'simple-table', component: PageSimpleTableComponent },
    { path: 'bootstrap-tables', component: PageBootstrapTablesComponent },
    { path: 'editing-table', component: PageEditingTableComponent },
    { path: 'filtering-table', component: PageFilteringTableComponent },
    { path: 'pagination-table', component: PagePaginationTableComponent },
    { path: 'form-elements', component: PageFormElementsComponent },
    { path: 'form-layout', component: PageFormLayoutComponent },
    { path: 'form-validation', component: PageFormValidationComponent },
    { path: 'google-map', component: PageGoogleMapComponent },
    { path: 'leaflet-map', component: PageLeafletMapComponent },
    { path: 'layouts', component: PageLayoutsComponent },
    { path: '**', component: PageNotFoundComponent },
];

const boxedRoutes: Routes = [
    { path: 'layouts', component: PageLayoutsComponent }
];

const boxedCRoutes: Routes = [
    { path: 'layouts', component: PageLayoutsComponent }
];

const defaultCRoutes: Routes = [
    { path: 'layouts', component: PageLayoutsComponent }
];

const extraRoutes: Routes = [
    { path: 'sign-in', component: PageSignIn1Component },
    { path: 'sign-in-social', component: PageSignIn3Component },
    { path: 'sign-up', component: PageSignUp1Component },
    { path: 'forgot', component: PageForgotComponent },
    { path: 'confirm', component: PageConfirmComponent },
    { path: 'page-404', component: Page404Component },
    { path: 'page-500', component: Page500Component }
];

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pages/layout/default/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'layout/default',
        component: DefaultLayoutComponent,
        children: defaultRoutes
    },
    {
        path: 'layout/default-c',
        component: DefaultCLayoutComponent,
        children: defaultCRoutes
    },
    {
        path: 'layout/boxed',
        component: BoxedLayoutComponent,
        children: boxedRoutes
    },
    {
        path: 'layout/boxed-c',
        component: BoxedCLayoutComponent,
        children: boxedCRoutes
    },
    {
        path: 'layout/extra',
        component: ExtraLayoutComponent,
        children: extraRoutes
    },
    {
        path: '**',
        component: DefaultLayoutComponent,
        children: defaultRoutes
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

export const PagesRoutingModuleComponents = [
    PageDashboardComponent,
    PageDashboard2Component,
    PageButtonComponent,
    PageCardComponent,
    PageCheckboxComponent,
    PageChipsComponent,
    PageDialogComponent,
    PageIconComponent,
    PageInputComponent,
    PageListComponent,
    PageMenuComponent,
    PageProgressBarComponent,
    PageProgressSpinnerComponent,
    PageRadioButtonComponent,
    PageSelectComponent,
    PageSliderComponent,
    PageSlideToggleComponent,
    PageSnackbarComponent,
    PageTabsComponent,
    PageToolbarComponent,
    PageTooltipComponent,
    PageNiFilesComponent,
    PageNiCardsComponent,
    PageNiAlertsComponent,
    PageNiBadgesComponent,
    PageNiBreadcrumbsComponent,
    PageTypographyComponent,
    PageNotFoundComponent,
    PageSignIn1Component,
    PageSignIn2Component,
    PageSignIn3Component,
    PageSignUp1Component,
    PageSignUp2Component,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,
    PageAboutUsComponent,
    PageFaqComponent,
    PageTimelineComponent,
    PageInvoiceComponent,
    PageCalendarComponent,
    PageSimpleTableComponent,
    PageBootstrapTablesComponent,
    PageEditingTableComponent,
    PageFilteringTableComponent,
    PagePaginationTableComponent,
    PageFormElementsComponent,
    PageFormLayoutComponent,
    PageFormValidationComponent,
    PageGoogleMapComponent,
    PageLeafletMapComponent,
    PageWidgetsComponent,
    PageLayoutsComponent,
    PageNg2ChartsComponent,
    PageNgxChartsComponent,
    PageAmchartsComponent,
    PageNiButtonsComponent
];