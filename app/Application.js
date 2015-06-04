/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('marine.Application', {
    extend: 'Ext.app.Application',
    
    name: 'marine',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    views: [
        //'marine.view.Login.Login',
        'marine.view.main.Main'
    ],
    
    launch: function () {
        // TODO - Launch the application
        
         //Ext.widget('login');
         //console.log('Mulai');
         //console.log('ini start');
         Ext.TaskManager.start({
			run: function() {
				Ext.fly('clock').update(Ext.Date.format(new Date(), 'd M Y, H:i:s A'));
			},
			interval: 1000			
		});
         //Ext.getCmp('clock').update(Ext.Date.format(new Date(), 'd M Y, H:i:s'));
    }
});
