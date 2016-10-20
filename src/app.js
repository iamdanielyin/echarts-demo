'use strict';

import 'framework7/dist/js/framework7.min';
import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'less/index.less';

import echarts from 'echarts';
import dailyProjectSingle from 'modules/daily-project-single';
import dailyProjectMulti from 'modules/daily-project-multi';
import dailyProjectForSH from 'modules/daily-project-for-sh';
import monthlyProjectSingle from 'modules/monthly-project-single';
import monthlyProjectMulti from 'modules/monthly-project-multi';


// Initialize app and store it to app variable for futher access to its methods
const app = new Framework7({
    pushState: true,
    swipePanel: 'left',
    modalTitle: '微商城',
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
    modalPreloaderTitle: '加载中...'
});

const $$ = Dom7;

//加载模块
dailyProjectSingle(app, $$);
dailyProjectMulti(app, $$);
dailyProjectForSH(app, $$);
monthlyProjectSingle(app, $$);
monthlyProjectMulti(app, $$);


// Add view
const mainView = app.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
// app.onPageInit('about', function (page) {
//     // Do something here for "about" page
// });

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
    // console.log(page);
    console.log('pageInit...');
});