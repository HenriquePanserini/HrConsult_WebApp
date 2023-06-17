import { Component, Input, Output, EventEmitter } 		 from '@angular/core';
import appSettings from '../../config/app-settings';
import { slideToggle } from '../../composables/slideToggle.js';

@Component({
  selector: 'float-sub-menu',
  templateUrl: './float-sub-menu.component.html'
})

export class FloatSubMenuComponent {
  appSettings = appSettings;

	@Input() menus;
	@Input() top;
	@Input() left;
	@Input() right;
	@Input() bottom;
	@Input() lineTop;
	@Input() lineBottom;
	@Input() arrowTop;
	@Input() arrowBottom;

	@Output() remainAppSidebarFloatSubMenu = new EventEmitter();
	@Output() hideAppSidebarFloatSubMenu = new EventEmitter();
	@Output() calculateFloatSubMenuPosition = new EventEmitter();

	expandCollapseSubmenu(e, currentMenu, allMenu, active) {
		e.preventDefault();
		var targetItem = (e.target).closest('.menu-item');
		var target = <HTMLElement>targetItem.querySelector('.menu-submenu');
		slideToggle(target);
		this.calculateFloatSubMenuPosition.emit();
	}

	remainMenu() {
	  this.remainAppSidebarFloatSubMenu.emit(true);
	}

	hideMenu() {
	  this.hideAppSidebarFloatSubMenu.emit(true);
	}
}
