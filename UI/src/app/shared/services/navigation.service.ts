import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [

    

    {
      name: 'TakeBook',
      type: 'link',
      tooltip: 'Dash',
      icon: 'library_books',
      state: 'Book/BorrowBook'
    },

    {
      name: 'Addstudent',
      type: 'link',
      icon: 'list',
      state: 'Student/AddStudent'
    },

    {
      name: 'Addbook',
      type: 'link',
      tooltip: 'Dash',
      icon: 'library_books',
      state: 'Book/AddBook'
    },

    {
      name: 'dashbord',
      type: 'link',
      tooltip: 'dash',
      icon: 'library_books',
      state: 'dashboard/learning-management'
    },
   
    {
      name: 'Add-data',
      type: 'link',
      tooltip: 'EMP',
      icon: 'list',
      state: 'InsertData/AddData'
    },


  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
  constructor() {}

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    // switch (menuType) {
    //   case 'separator-menu':
        // this.menuItems.next(this.separatorMenu);
        // break;
    //   case 'icon-menu':
        this.menuItems.next(this.iconMenu);
        // break;
    //   default:
        // this.menuItems.next(this.plainMenu);
    // }
  }
}
