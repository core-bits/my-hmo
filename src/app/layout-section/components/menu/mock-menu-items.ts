import { IMenuItem } from './menu-item';
import { MENU } from '../../../../settings/menu';

export const MENUITEMS: IMenuItem[] = MENU;

export const LIVE_MENUITEMS: IMenuItem[] = [
    {
        title: 'HMO',
        groupTitle: true
    },
    {
        title: 'Dashboards',
        icon: {
            class: 'fa fa-home',
            bg: '#ea8080',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/private/hmo/dashboard/main',
        badge: {
            text: 'New',
            color: '#fff',
            bg: '#E57373'
        },
        sub: [
            {
                title: 'Dashboard v1',
                routing: '/private/hmo/dashboard/main'
            },
            {
                title: 'Dashboard v2',
                routing: '/pages/layout/default/dashboard-2'
            }
        ]
    },
    {
        title: 'Employees',
        icon: {
            class: 'fa fa-users',
            bg: '#FFCCBC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'List',
                routing: '/private/hmo/employee/list'
            },
            {
                title: 'Form Elements',
                routing: '/pages/layout/default/form-elements'
            },
            {
                title: 'Form Layout',
                routing: '/pages/layout/default/form-layout'
            },
            {
                title: 'Form Validation',
                routing: '/pages/layout/default/form-validation'
            }
        ]
    },
    {
        title: 'Employers',
        icon: {
            class: 'fa fa-university',
            bg: '#B3E5FC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Unassigned',
                routing: '/private/hmo/employer/list'
            },
            {
                title: 'Assigned',
                routing: '/private/hmo/employer/assign'
            },
            {
                title: 'Button',
                routing: '/pages/layout/default/button'
            },
            {
                title: 'Card',
                routing: '/pages/layout/default/card'
            },
            {
                title: 'Checkbox',
                routing: '/pages/layout/default/checkbox'
            },
            {
                title: 'Chips',
                routing: '/pages/layout/default/chips'
            },
            {
                title: 'Dialog',
                routing: '/pages/layout/default/dialog'
            },
            {
                title: 'Icon',
                routing: '/pages/layout/default/icon'
            },
            {
                title: 'Input',
                routing: '/pages/layout/default/input'
            },
            {
                title: 'List',
                routing: '/pages/layout/default/list'
            },
            {
                title: 'Menu',
                routing: '/pages/layout/default/menu'
            },
            {
                title: 'Progress bar',
                routing: '/pages/layout/default/progress-bar'
            },
            {
                title: 'Progress spinner',
                routing: '/pages/layout/default/progress-spinner'
            },
            {
                title: 'Radio Button',
                routing: '/pages/layout/default/radio-button'
            },
            {
                title: 'Select',
                routing: '/pages/layout/default/select'
            },
            {
                title: 'Slider',
                routing: '/pages/layout/default/slider'
            },
            {
                title: 'Slide toggle',
                routing: '/pages/layout/default/slide-toggle'
            },
            {
                title: 'Snackbar',
                routing: '/pages/layout/default/snackbar'
            },
            {
                title: 'Tabs',
                routing: '/pages/layout/default/tabs'
            },
            {
                title: 'Toolbar',
                routing: '/pages/layout/default/toolbar'
            },
            {
                title: 'Tooltip',
                routing: '/pages/layout/default/tooltip'
            }
        ]
    },
    {
        title: 'Hospitals',
        icon: {
            class: 'fa fa-medkit',
            bg: '#B2DFDB',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Assigned',
                routing: '/private/hmo/hospital/list'
            },
            {
                title: 'Unassigned',
                routing: '/private/hmo/hospital/assign'
            },
            {
                title: 'Alerts',
                routing: '/pages/layout/default/ni-alerts'
            },
            {
                title: 'Badges',
                routing: '/pages/layout/default/ni-badges'
            },
            {
                title: 'Breadcrumbs',
                routing: '/pages/layout/default/ni-breadcrumbs'
            },
            {
                title: 'Buttons',
                routing: '/pages/layout/default/ni-buttons'
            },
            {
                title: 'Cards',
                routing: '/pages/layout/default/ni-cards'
            },
            {
                title: 'Files',
                routing: '/pages/layout/default/ni-files'
            }
        ]
    },
    {
        title: 'Reports',
        icon: {
            class: 'fa fa-pie-chart',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Ng2 Charts',
                routing: '/pages/layout/default/ng2-charts'
            },
            {
                title: 'Ngx Charts',
                routing: '/pages/layout/default/ngx-charts'
            }
            ,
            {
                title: 'Amcharts',
                routing: '/pages/layout/default/amcharts'
            }
        ]
    },
    {
        title: 'Settings',
        icon: {
            class: 'fa fa-cog',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Accounts',
                routing: '/private/hmo/setting/account'
            },
            {
                title: 'Notifications',
                routing: '/private/hmo/setting/notification'
            }
        ]     
    },
    {
        title: 'Company',
        groupTitle: true
    },
    {
        title: 'Employees',
        icon: {
            class: 'fa fa-users',
            bg: '#FFCCBC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Form Elements',
                routing: '/pages/layout/default/form-elements'
            },
            {
                title: 'Form Layout',
                routing: '/pages/layout/default/form-layout'
            },
            {
                title: 'Form Validation',
                routing: '/pages/layout/default/form-validation'
            }
        ]
    },
    {
        title: 'HMOs',
        icon: {
            class: 'fa fa-university',
            bg: '#B3E5FC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Button',
                routing: '/pages/layout/default/button'
            },
            {
                title: 'Card',
                routing: '/pages/layout/default/card'
            },
            {
                title: 'Checkbox',
                routing: '/pages/layout/default/checkbox'
            },
            {
                title: 'Chips',
                routing: '/pages/layout/default/chips'
            },
            {
                title: 'Dialog',
                routing: '/pages/layout/default/dialog'
            },
            {
                title: 'Icon',
                routing: '/pages/layout/default/icon'
            },
            {
                title: 'Input',
                routing: '/pages/layout/default/input'
            },
            {
                title: 'List',
                routing: '/pages/layout/default/list'
            },
            {
                title: 'Menu',
                routing: '/pages/layout/default/menu'
            },
            {
                title: 'Progress bar',
                routing: '/pages/layout/default/progress-bar'
            },
            {
                title: 'Progress spinner',
                routing: '/pages/layout/default/progress-spinner'
            },
            {
                title: 'Radio Button',
                routing: '/pages/layout/default/radio-button'
            },
            {
                title: 'Select',
                routing: '/pages/layout/default/select'
            },
            {
                title: 'Slider',
                routing: '/pages/layout/default/slider'
            },
            {
                title: 'Slide toggle',
                routing: '/pages/layout/default/slide-toggle'
            },
            {
                title: 'Snackbar',
                routing: '/pages/layout/default/snackbar'
            },
            {
                title: 'Tabs',
                routing: '/pages/layout/default/tabs'
            },
            {
                title: 'Toolbar',
                routing: '/pages/layout/default/toolbar'
            },
            {
                title: 'Tooltip',
                routing: '/pages/layout/default/tooltip'
            }
        ]
    },
    {
        title: 'Hospitals',
        icon: {
            class: 'fa fa-medkit',
            bg: '#B2DFDB',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Alerts',
                routing: '/pages/layout/default/ni-alerts'
            },
            {
                title: 'Badges',
                routing: '/pages/layout/default/ni-badges'
            },
            {
                title: 'Breadcrumbs',
                routing: '/pages/layout/default/ni-breadcrumbs'
            },
            {
                title: 'Buttons',
                routing: '/pages/layout/default/ni-buttons'
            },
            {
                title: 'Cards',
                routing: '/pages/layout/default/ni-cards'
            },
            {
                title: 'Files',
                routing: '/pages/layout/default/ni-files'
            }
        ]
    },
    {
        title: 'Reports',
        icon: {
            class: 'fa fa-pie-chart',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Ng2 Charts',
                routing: '/pages/layout/default/ng2-charts'
            },
            {
                title: 'Ngx Charts',
                routing: '/pages/layout/default/ngx-charts'
            }
            ,
            {
                title: 'Amcharts',
                routing: '/pages/layout/default/amcharts'
            }
        ]
    },
    {
        title: 'Settings',
        icon: {
            class: 'fa fa-cog',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Accounts',
                routing: '/private/hmo/setting/account'
            },
            {
                title: 'Notification',
                routing: '/private/hmo/setting/notification'
            }
        ]     
    },
    {
        title: 'Hospital',
        groupTitle: true
    },
    {
        title: 'Employees',
        icon: {
            class: 'fa fa-users',
            bg: '#FFCCBC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Form Elements',
                routing: '/pages/layout/default/form-elements'
            },
            {
                title: 'Form Layout',
                routing: '/pages/layout/default/form-layout'
            },
            {
                title: 'Form Validation',
                routing: '/pages/layout/default/form-validation'
            }
        ]
    },
    {
        title: 'HMOs',
        icon: {
            class: 'fa fa-university',
            bg: '#B3E5FC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Button',
                routing: '/pages/layout/default/button'
            },
            {
                title: 'Card',
                routing: '/pages/layout/default/card'
            },
            {
                title: 'Checkbox',
                routing: '/pages/layout/default/checkbox'
            },
            {
                title: 'Chips',
                routing: '/pages/layout/default/chips'
            },
            {
                title: 'Dialog',
                routing: '/pages/layout/default/dialog'
            },
            {
                title: 'Icon',
                routing: '/pages/layout/default/icon'
            },
            {
                title: 'Input',
                routing: '/pages/layout/default/input'
            },
            {
                title: 'List',
                routing: '/pages/layout/default/list'
            },
            {
                title: 'Menu',
                routing: '/pages/layout/default/menu'
            },
            {
                title: 'Progress bar',
                routing: '/pages/layout/default/progress-bar'
            },
            {
                title: 'Progress spinner',
                routing: '/pages/layout/default/progress-spinner'
            },
            {
                title: 'Radio Button',
                routing: '/pages/layout/default/radio-button'
            },
            {
                title: 'Select',
                routing: '/pages/layout/default/select'
            },
            {
                title: 'Slider',
                routing: '/pages/layout/default/slider'
            },
            {
                title: 'Slide toggle',
                routing: '/pages/layout/default/slide-toggle'
            },
            {
                title: 'Snackbar',
                routing: '/pages/layout/default/snackbar'
            },
            {
                title: 'Tabs',
                routing: '/pages/layout/default/tabs'
            },
            {
                title: 'Toolbar',
                routing: '/pages/layout/default/toolbar'
            },
            {
                title: 'Tooltip',
                routing: '/pages/layout/default/tooltip'
            }
        ]
    },
    {
        title: 'Reports',
        icon: {
            class: 'fa fa-pie-chart',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Ng2 Charts',
                routing: '/pages/layout/default/ng2-charts'
            },
            {
                title: 'Ngx Charts',
                routing: '/pages/layout/default/ngx-charts'
            },
            {
                title: 'Amcharts',
                routing: '/pages/layout/default/amcharts'
            }
        ]
    },
    {
        title: 'Settings',
        icon: {
            class: 'fa fa-cog',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Accounts',
                routing: '/private/hmo/setting/account'
            },
            {
                title: 'Notification',
                routing: '/private/hmo/setting/notification'
            }
        ]     
    },
    {
        title: 'Employee',
        groupTitle: true
    },    
    {
        title: 'Dashboards',
        icon: {
            class: 'fa fa-home',
            bg: '#ea8080',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/private/hmo/dashboard/main',
        badge: {
            text: 'New',
            color: '#fff',
            bg: '#E57373'
        },
        sub: [
            {
                title: 'Dashboard v1',
                routing: '/private/hmo/dashboard/main'
            },
            {
                title: 'Dashboard v2',
                routing: '/pages/layout/default/dashboard-2'
            }
        ]
    },
    {
        title: 'Account Management',
        icon: {
            class: 'fa fa-user-circle-o',
            bg: '#FFE082',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Simple table',
                routing: '/pages/layout/default/simple-table'
            },
            {
                title: 'Editing table',
                routing: '/pages/layout/default/editing-table'
            },
            {
                title: 'Filtering table',
                routing: '/pages/layout/default/filtering-table'
            },
            {
                title: 'Pagination table',
                routing: '/pages/layout/default/pagination-table'
            },
            {
                title: 'Bootstrap tables',
                routing: '/pages/layout/default/bootstrap-tables'
            }
        ]
    },        
    {
        title: 'Timeline',
        icon: {
            class: 'fa fa-history',
            bg: '#F0F4C3',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/pages/layout/default/typography'
    },  
    {
        title: 'Notifications',
        icon: {
            class: 'fa fa-bell',
            bg: '#F0F4C3',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/pages/layout/default/typography'
    },
    {
        title: 'Reports',
        icon: {
            class: 'fa fa-pie-chart',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Ng2 Charts',
                routing: '/pages/layout/default/ng2-charts'
            },
            {
                title: 'Ngx Charts',
                routing: '/pages/layout/default/ngx-charts'
            }
            ,
            {
                title: 'Amcharts',
                routing: '/pages/layout/default/amcharts'
            }
        ]
    }
];