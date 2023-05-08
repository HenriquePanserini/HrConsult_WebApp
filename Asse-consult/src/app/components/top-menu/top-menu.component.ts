import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Output, EventEmitter, AfterViewInit, HostListener, ViewChild } 		 from '@angular/core';
import { slideToggle } from '../../composables/slideToggle.js';
import { slideUp } from '../../composables/slideUp.js';
import appSettings from '../../config/app-settings';
import appMenus from '../../config/app-menus';
import * as global 			 from '../../config/globals';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html'
})

export class TopMenuComponent implements AfterViewInit {
  @ViewChild('topMenuContainer', { static: true }) topMenuContainer;

  menus = appMenus;
  appSettings = appSettings;
	mobileMode = (window.innerWidth <= 767) ? true : false;
	desktopMode = (window.innerWidth <= 767) ? false : true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 767) {
      this.mobileMode = true;
      this.desktopMode = false;
    } else {
      this.mobileMode = false;
      this.desktopMode = true;
    }
  }
  
	handlePageLoadMenuFocus() {
		var targetMenu = <HTMLElement>document.querySelector('.app-top-menu .menu');
		if (!targetMenu) {
			return;
		}
		var targetMenuStyle = window.getComputedStyle(targetMenu);
		var bodyStyle = window.getComputedStyle(document.body);
		var targetCss = (bodyStyle.getPropertyValue('direction') == 'rtl') ? 'margin-right' : 'margin-left';
		var marginLeft = parseInt(targetMenuStyle.getPropertyValue(targetCss));
		var viewWidth = document.querySelector('.app-top-menu').clientWidth - 128;
		var prevWidth = 0;
		var speed = 0;
		var fullWidth = 0;

		var elms = [].slice.call(document.querySelectorAll('.app-top-menu .menu > .menu-item'));
		if (elms) {
			var found = false;
			elms.map(function(elm) {
				if (!elm.classList.contains('menu-control')) {
					fullWidth += elm.clientWidth;
					if (!found) {
						prevWidth += elm.clientWidth;
					}
					if (elm.classList.contains('active')) {
						found = true;
					}
				}
			});
		}
	
		if (prevWidth >= viewWidth) {
			var finalScrollWidth = prevWidth - viewWidth + 128;
			if (bodyStyle.getPropertyValue('direction') != 'rtl') {
				targetMenu.style.marginLeft = '-' + finalScrollWidth + 'px';
			} else {
				targetMenu.style.marginRight = '-' + finalScrollWidth + 'px';
			}
		}
	
		var elm = targetMenu.querySelector('.menu-control.menu-control-end');
		if (prevWidth != fullWidth && fullWidth >= viewWidth) {
			elm.classList.add('show');
		} else {
			elm.classList.remove('show');
		}

		var elm = targetMenu.querySelector('.menu-control.menu-control-start');
		if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
			elm.classList.add('show');
		} else {
			elm.classList.remove('show');
		}
	};
	
	handleMenuButtonAction(element, direction) {
		var element = element.target;
		var obj = element.closest('.menu');
		var objStyle = window.getComputedStyle(obj);
		var bodyStyle = window.getComputedStyle(document.querySelector('body'));
		var targetCss = (bodyStyle.getPropertyValue('direction') == 'rtl') ? 'margin-right' : 'margin-left';
		var marginLeft = parseInt(objStyle.getPropertyValue(targetCss));  
		var containerWidth = document.querySelector('.app-top-menu').clientWidth - 80;
		var totalWidth = 0;
		var finalScrollWidth = 0;
	
		var elms = [].slice.call(obj.querySelectorAll('.menu-item'));
		if (elms) {
			elms.map(function(elm) {
				if (!elm.classList.contains('menu-control')) {
					totalWidth += elm.clientWidth;
				}
			});
		}

		switch (direction) {
			case 'next':
				var widthLeft = totalWidth + marginLeft - containerWidth;
				if (widthLeft <= containerWidth) {
					finalScrollWidth = widthLeft - marginLeft - 88;
					setTimeout(function() {
						obj.querySelector('.menu-control.menu-control-end').classList.remove('show');
					}, 300);
				} else {
					finalScrollWidth = containerWidth - marginLeft - 88;
				}

				if (finalScrollWidth !== 0) {
					obj.style.transitionProperty = 'height, margin, padding';
					obj.style.transitionDuration = '300ms';
					if (bodyStyle.getPropertyValue('direction') != 'rtl') {
						obj.style.marginLeft = '-' + finalScrollWidth + 'px';
					} else {
						obj.style.marginRight = '-' + finalScrollWidth + 'px';
					}
					setTimeout(function() {
						obj.style.transitionProperty = '';
						obj.style.transitionDuration = '';
						obj.querySelector('.menu-control.menu-control-start').classList.add('show');
					}, 300);
				}
				break;
			case 'prev':
				var widthLeft = -marginLeft;

				if (widthLeft <= containerWidth) {
					obj.querySelector('.menu-control.menu-control-start').classList.remove('show');
					finalScrollWidth = 0;
				} else {
					finalScrollWidth = widthLeft - containerWidth + 88;
				}
			
				obj.style.transitionProperty = 'height, margin, padding';
				obj.style.transitionDuration = '300ms';
			
				if (bodyStyle.getPropertyValue('direction') != 'rtl') {
					obj.style.marginLeft = '-' + finalScrollWidth + 'px';
				} else {
					obj.style.marginRight = '-' + finalScrollWidth + 'px';
				}
			
				setTimeout(function() {
					obj.style.transitionProperty = '';
					obj.style.transitionDuration = '';
					obj.querySelector('.menu-control.menu-control-end').classList.add('show');
				}, 300);
				break;
				break;
			}
	}

  ngAfterViewInit() {
    setTimeout(() => {
  		this.handlePageLoadMenuFocus();
    }, 50);
  }

	expandCollapseSubmenu(e, currentMenu, allMenu, active) {
		var targetItem = (e.target).closest('.menu-item');
		var target = <HTMLElement>targetItem.querySelector('.menu-submenu');
		slideToggle(target);
	}
}
