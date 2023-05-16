var appMenus = [{
  'icon': 'fa fa-home',
  'title': 'Home',
  'url': 'home'
},{
  'icon': 'fa fa-align-left',
  'title': 'Receita Federal',
  'url': '/menu',
  'caret': 'true',
  'submenu': [
    {
      'url': 'rf/simples',
      'title': 'Simples',
      'caret': 'true'
    },
    {
      'url': 'rf/mei',
      'title': 'MEI',
      'caret': 'true'
    },
    {
    'url': 'rf/parcelamentos',
    'title': 'Parcelamento',
    'caret': 'true'
    }
    ,
    {
    'url': 'rf/inbox',
    'title': 'Caixa Postal',
    'badge':'10',
    'caret': 'true'
    }]
  }];

export default appMenus;
