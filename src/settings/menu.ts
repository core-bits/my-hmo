export const MENU: any = [
  {
    title: 'Main',
    groupTitle : true
  },
  {
    title: 'Dashboards',
    icon: {
      class: 'fa fa-home',
      bg: '#ea8080',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/pages/layout/default/dashboard',
    badge: {
      text: 'New',
      color: '#fff',
      bg: '#E57373'
    },
    sub: [
      {
        title: 'Dashboard v1',
        routing: '/pages/layout/default/dashboard'
      },
      {
        title: 'Dashboard v2',
        routing: '/pages/layout/default/dashboard-2'
      }
    ]
  },
  {
    title: 'Widgets',
    icon: {
      class: 'fa fa-th',
      bg: '#E1BEE7',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/pages/layout/default/widgets'
  },
  {
    title: 'Calendar',
    icon: {
      class: 'fa fa-calendar',
      bg: '#C5CAE9',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/pages/layout/default/calendar'
  },
  {
    title: 'Layouts',
    icon: {
      class: 'fa fa-columns',
      bg: '#FF8A65',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/pages/layout/default/dashboard',
    badge: {
      text: '5',
      color: '#fff',
      bg: '#43A047'
    },
    sub: [
      {
        title: 'Default',
        routing: '/pages/layout/default/layouts'
      },
      {
        title: 'Compressed menu',
        routing: '/pages/layout/default-c/layouts'
      },
      {
        title: 'Boxed',
        routing: '/pages/layout/boxed/layouts'
      },
      {
        title: 'Boxed compressed menu',
        routing: '/pages/layout/boxed-c/layouts'
      },
      {
        title: 'Extra',
        routing: '/pages/layout/extra/sign-in'
      }
    ]
  },
  {
    title: 'UI Elements',
    groupTitle : true
  },
  {
    title: 'Material components',
    icon: {
      class: 'fa fa-briefcase',
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
    title: 'Theme components',
    icon: {
      class: 'fa fa-diamond',
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
    title: 'Typography',
    icon: {
      class: 'fa fa-font',
      bg: '#F0F4C3',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/pages/layout/default/typography'
  },
  {
    title: 'Tables',
    icon: {
      class: 'fa fa-table',
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
    title: 'Forms',
    icon: {
      class: 'fa fa-check-square-o',
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
    title: 'Charts',
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
    title: 'Maps',
    icon: {
      class: 'fa fa-map-marker',
      bg: '#9E9E9E',
      color: 'rgba(0,0,0,.87)'
    },
    sub: [
      {
        title: 'Google map',
        routing: '/pages/layout/default/google-map'
      },
      {
        title: 'Leaflet map',
        routing: '/pages/layout/default/leaflet-map'
      }
    ]
  },
  {
    title: 'Pages',
    groupTitle : true
  },
  {
    title: 'Pages service',
    icon: {
      class: 'fa fa-edit',
      bg: '#FFAB91',
      color: 'rgba(0,0,0,.87)'
    },
    sub: [
      {
        title: 'About Us',
        routing: '/pages/layout/default/about-us'
      },
      {
        title: 'FAQ',
        routing: '/pages/layout/default/faq'
      },
      {
        title: 'TimeLine',
        routing: '/pages/layout/default/timeline'
      },
      {
        title: 'Invoice',
        routing: '/pages/layout/default/invoice'
      }
    ]
  },
  {
    title: 'Extra pages',
    icon: {
      class: 'fa fa-clone',
      bg: '#B0BEC5',
      color: 'rgba(0,0,0,.87)'
    },
    sub: [
      {
        title: 'Sign In v1',
        routing: '/pages/layout/extra/sign-in'
      },
      {
        title: 'Sign In v2',
        routing: '/pages/layout/default/sign-in'
      },
      {
        title: 'Sign In with Social',
        routing: '/pages/layout/extra/sign-in-social'
      },
      {
        title: 'Sign Up v1',
        routing: '/pages/layout/extra/sign-up'
      },
      {
        title: 'Sign Up v2',
        routing: '/pages/layout/default/sign-up'
      },
      {
        title: 'Forgot password',
        routing: '/pages/layout/extra/forgot'
      },
      {
        title: 'Confirm email',
        routing: '/pages/layout/extra/confirm'
      },
      {
        title: '404',
        routing: '/pages/layout/extra/page-404'
      },
      {
        title: '500',
        routing: '/pages/layout/extra/page-500'
      },
      {
        title: 'Not found',
        routing: '/pages/layout/default/not-found'
      }
    ]
  }
];