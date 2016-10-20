/**
 * daily-project-single.html
 * Created by yinfxs on 16-10-20.
 */

'use strict';

export default function (app, $$) {
// Option 2. Using live 'pageInit' event handlers for each page
    $$(document).on('pageInit', '.page[data-page="monthly-project-single"]', function (e) {
        console.log('monthly-project-single.pageInit');
        // Following code will be executed for page with data-page attribute equal to "about"
        // app.alert('Here comes About page');
    });
};