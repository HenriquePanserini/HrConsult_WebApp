import { Component, HostListener, Renderer2, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import appSettings from './config/app-settings';
import global from './config/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private titleService: Title, private router: Router, private renderer: Renderer2) {
    router.events.subscribe((e) => {
			if (e instanceof NavigationStart) {
			  if (window.innerWidth < 768) {
			    this.appSettings.appSidebarMobileToggled = false;
			    this.appSettings.appSidebarEndMobileToggled = false;
			  }
			}
    });
  }

  appSettings;

	// window scroll
  appHasScroll;

  ngOnInit() {
    // page settings
    this.appSettings = appSettings;
    
    if (this.appSettings.appDarkMode) {
			this.onAppDarkModeChanged(true);
		}
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top > 0 && this.appSettings.appHeaderFixed) {
      this.appHasScroll = true;
    } else {
      this.appHasScroll = false;
    }
  }

  // set page minified
  onAppSidebarMinifiedToggled(val: boolean): void {
  	this.appSettings.appSidebarMinified = !this.appSettings.appSidebarMinified;
	}

  // set app sidebar end toggled
  onAppSidebarEndToggled(val: boolean): void {
  	this.appSettings.appSidebarEndToggled = !this.appSettings.appSidebarEndToggled;
	}

  // hide mobile sidebar
  onAppSidebarMobileToggled(val: boolean): void {
  	this.appSettings.appSidebarMobileToggled = !this.appSettings.appSidebarMobileToggled;
	}

  // toggle right mobile sidebar
  onAppSidebarEndMobileToggled(val: boolean): void {
  	this.appSettings.appSidebarEndMobileToggled = !this.appSettings.appSidebarEndMobileToggled;
	}

	onAppDarkModeChanged(val: boolean): void {
		if (this.appSettings.appDarkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
		global.color = {
			componentColor: window.getComputedStyle(document.body).getPropertyValue('--app-component-color').trim(),
			componentBg: window.getComputedStyle(document.body).getPropertyValue('--app-component-bg').trim(),
			dark: window.getComputedStyle(document.body).getPropertyValue('--bs-dark').trim(),
			light: window.getComputedStyle(document.body).getPropertyValue('--bs-light').trim(),
			blue: window.getComputedStyle(document.body).getPropertyValue('--bs-blue').trim(),
			indigo: window.getComputedStyle(document.body).getPropertyValue('--bs-indigo').trim(),
			purple: window.getComputedStyle(document.body).getPropertyValue('--bs-purple').trim(),
			pink: window.getComputedStyle(document.body).getPropertyValue('--bs-pink').trim(),
			red: window.getComputedStyle(document.body).getPropertyValue('--bs-red').trim(),
			orange: window.getComputedStyle(document.body).getPropertyValue('--bs-orange').trim(),
			yellow: window.getComputedStyle(document.body).getPropertyValue('--bs-yellow').trim(),
			green: window.getComputedStyle(document.body).getPropertyValue('--bs-green').trim(),
			success: window.getComputedStyle(document.body).getPropertyValue('--bs-success').trim(),
			teal: window.getComputedStyle(document.body).getPropertyValue('--bs-teal').trim(),
			cyan: window.getComputedStyle(document.body).getPropertyValue('--bs-cyan').trim(),
			white: window.getComputedStyle(document.body).getPropertyValue('--bs-white').trim(),
			gray: window.getComputedStyle(document.body).getPropertyValue('--bs-gray').trim(),
			lime: window.getComputedStyle(document.body).getPropertyValue('--bs-lime').trim(),
			gray100: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-100').trim(),
			gray200: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-200').trim(),
			gray300: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-300').trim(),
			gray400: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-400').trim(),
			gray500: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-500').trim(),
			gray600: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-600').trim(),
			gray700: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-700').trim(),
			gray800: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-800').trim(),
			gray900: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-900').trim(),
			black: window.getComputedStyle(document.body).getPropertyValue('--bs-black').trim(),
			componentColorRgb: window.getComputedStyle(document.body).getPropertyValue('--app-component-color-rgb').trim(),
			componentBgRgb: window.getComputedStyle(document.body).getPropertyValue('--app-component-bg-rgb').trim(),
			darkRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-dark-rgb').trim(),
			lightRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-light-rgb').trim(),
			blueRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-blue-rgb').trim(),
			indigoRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-indigo-rgb').trim(),
			purpleRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-purple-rgb').trim(),
			pinkRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-pink-rgb').trim(),
			redRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-red-rgb').trim(),
			orangeRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-orange-rgb').trim(),
			yellowRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-yellow-rgb').trim(),
			greenRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-green-rgb').trim(),
			successRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-success-rgb').trim(),
			tealRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-teal-rgb').trim(),
			cyanRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-cyan-rgb').trim(),
			whiteRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-white-rgb').trim(),
			grayRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-rgb').trim(),
			limeRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-lime-rgb').trim(),
			gray100Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-100-rgb').trim(),
			gray200Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-200-rgb').trim(),
			gray300Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-300-rgb').trim(),
			gray400Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-400-rgb').trim(),
			gray500Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-500-rgb').trim(),
			gray600Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-600-rgb').trim(),
			gray700Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-700-rgb').trim(),
			gray800Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-800-rgb').trim(),
			gray900Rgb: window.getComputedStyle(document.body).getPropertyValue('--bs-gray-900-rgb').trim(),
			blackRgb: window.getComputedStyle(document.body).getPropertyValue('--bs-black-rgb').trim()
		};
		document.dispatchEvent(new CustomEvent('theme-change'));
	}
	

	onAppThemeChanged(val: boolean): void {
		const newTheme = 'theme-' + this.appSettings.appTheme;
		for (let x = 0; x < document.body.classList.length; x++) {
			if ((document.body.classList[x]).indexOf('theme-') > -1 && document.body.classList[x] !== newTheme) {
				document.body.classList.remove(document.body.classList[x]);
			}
		}
		document.body.classList.add(newTheme);
	}
}
