// Core Module
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule }               from '@angular/platform-browser/animations';
import { BrowserModule, Title }                  from '@angular/platform-browser';
import { AppRoutingModule }                      from './app-routing.module';
import { NgModule }                              from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import * as global                               from './config/globals';
import 'bootstrap';

// Main Component
import { AppComponent }                    from './app.component';
import { HeaderComponent }                 from './components/header/header.component';
import { SidebarComponent }                from './components/sidebar/sidebar.component';
import { SidebarRightComponent }           from './components/sidebar-right/sidebar-right.component';
import { TopMenuComponent }                from './components/top-menu/top-menu.component';
import { FloatSubMenuComponent }           from './components/float-sub-menu/float-sub-menu.component';
import { MainPanelComponent }              from './components/main-panel/main-panel.component';
import { PanelComponent }                  from './components/panel/panel.component';
import { TablesComponent }                 from './components/tables/tables.component';
import { OrderCardsComponent }             from './components/cards/order-cards/order-cards.component';
import { MainCardsComponent }              from './components/cards/main-cards/main-cards.component';
import { OrderDetailsComponent }           from './components/order-detail/order-details.component';
import { FormCadastroComponent }           from './components/form/form-cadastro/form-cadastro.component';
import { FormAtualizarComponent }          from './components/form/form-atualizar/form-atualizar.component';

// Component Module
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule }                          from 'ngx-countdown';
import { HighlightModule, HIGHLIGHT_OPTIONS }       from 'ngx-highlightjs';
import { NgApexchartsModule }              from 'ng-apexcharts';
import { FullCalendarModule }              from '@fullcalendar/angular';
import dayGridPlugin                       from '@fullcalendar/daygrid';
import timeGridPlugin                      from '@fullcalendar/timegrid';
import interactionPlugin                   from "@fullcalendar/interaction";
import listPlugin                          from '@fullcalendar/list';
import bootstrapPlugin                     from '@fullcalendar/bootstrap';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin,
  bootstrapPlugin
]);

import { LoadingBarRouterModule }          from '@ngx-loading-bar/router';
import { CalendarModule, DateAdapter }     from 'angular-calendar';
import { adapterFactory }                  from 'angular-calendar/date-adapters/date-fns';
import { TrendModule }                     from 'ngx-trend';
import { NgxDaterangepickerMd }            from 'ngx-daterangepicker-material';
import { NgxChartsModule }                 from '@swimlane/ngx-charts';
import { SweetAlert2Module }               from '@sweetalert2/ngx-sweetalert2';
import { NgxEditorModule }                 from 'ngx-editor';
import { ColorSketchModule }               from 'ngx-color/sketch';
import { NgxDatatableModule }              from '@swimlane/ngx-datatable';
import { PerfectScrollbarModule }          from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG }        from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Pages Module
import { HomePage }                       from './pages/home/home.pages';
import { EmailInboxPage }                 from './pages/email/inbox.pages';
import { ParcelamentosPage }              from './pages/parcelamentos/parcelamentos.pages';
import { LoginPage }                      from './pages/login/login.pages';
import { CadastroPage }                   from './pages/cadastro/cadastro.pages';
import { ConsultaPage }                   from './pages/cadastro/consulta/consulta.pages';
import { SignInPage }                     from './pages/login/sign_in/sign_in.pages';

//Pipe Module
import { FiltroCardsPipe } from './services/pipes/filtro.pipe';

//Service Module
import { CadastroService } from './services/cadastro.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    FloatSubMenuComponent,
    MainPanelComponent,
    PanelComponent,
    OrderCardsComponent,
    MainCardsComponent,
    TablesComponent,
    OrderDetailsComponent,
    FormCadastroComponent,
    FormAtualizarComponent,

    HomePage,
    EmailInboxPage,
    ParcelamentosPage,
    LoginPage,
    CadastroPage,
    ConsultaPage,
    SignInPage,
    
    FiltroCardsPipe

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CountdownModule,
    ColorSketchModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    FullCalendarModule,
    HighlightModule,
    LoadingBarRouterModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    NgxDatatableModule,
    NgxEditorModule,
    NgxChartsModule,
    NgxDaterangepickerMd.forRoot(),
    PerfectScrollbarModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    TrendModule
  ],
  providers: [ Title, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, {
		provide: HIGHLIGHT_OPTIONS,
		useValue: {
			coreLibraryLoader: () => import('highlight.js/lib/core'),
			lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
			languages: {
				typescript: () => import('highlight.js/lib/languages/typescript'),
				css: () => import('highlight.js/lib/languages/css'),
				xml: () => import('highlight.js/lib/languages/xml')
			}
		}
	},
  CadastroService],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        var title = 'Color Admin | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}
