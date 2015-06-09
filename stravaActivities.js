angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('strava activities', {
            sizex: 2,
            sizey: 2,
            color: '#2a6c62',
            template: 'Dashboard-widget-stravaActivities/stravaActivities.html',
            dataBind: {
                type: 'internal',
                source: '/api/strava'
            }
        });
    });
