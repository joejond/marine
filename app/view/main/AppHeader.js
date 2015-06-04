/*
Suwarjono 1 Juni 2015
* marine project chevron
*/

Ext.define('marine.view.main.AppHeader', {
    extend	: 'Ext.container.Container',
    xtype 	: 'app-header',
    //requires: [
			//'marine.view.main.MainController',
        //],
    controller: 'main',
    
    layout	: {
				type: 'hbox',
				align: 'stretch'
			},
	items	: [{
				xtype: 'component',
				cls: 'appBanner',
				//padding: 10,
				height: 40,
				html: 'Monita Tracking Enhacement System - Admin',
				//title: 'Inner Panel One',
				flex: 1
			},{
				xtype	: 'container',
				width 	: '15%',
				layout	: {
						type: 'vbox'
					},
				items	: [{
						xtype	: 'label',
						text	: 'Selamat Datang',
						width	: '100%',
						height: 20
					},{
						xtype	: 'label',
						id		: 'clock',
						//text	: 'JAM',
						width	: '100%',
						height: 20
					}]
			},{ 
				xtype	: 'button',
				glyph	: 0xf235,
				text	: 'LOGOUT',
				width 	: '7%'
			}]
    
});
    
