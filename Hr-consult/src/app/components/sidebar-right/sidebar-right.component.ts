import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Input, Output, EventEmitter } 		 from '@angular/core';
import * as global from '../../config/globals';

@Component({
  selector: 'sidebar-right',
  templateUrl: './sidebar-right.component.html'
})

export class SidebarRightComponent {
  global = global;
	@Output() appSidebarEndMobileToggled = new EventEmitter<boolean>();
	
	toggleAppSidebarEndMobile() {
		this.appSidebarEndMobileToggled.emit(true);
	}
}
