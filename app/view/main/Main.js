/**
/*
Suwarjono 1 Juni 2015
* marine project chevron
*/
Ext.define('marine.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'marine.view.main.MainController',
        'marine.view.main.MainModel',
        'marine.view.main.AppHeader',
        'marine.view.main.TabUtama'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    
    
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

	//plugins: 'viewport',
    items: [{
		region: 'north',
		//xtype: 'component',
		xtype: 'app-header'
		//cls: 'appBanner',
		//padding: 10,
		//height: 40,
		//html: 'Monita Tracking Enhacement System - Admin'
		//bind : {
			//html: '{name}'
		//}
		
	},{
        xtype: 'panel',
        //bind: {
            //title: '{name}'
        //},
        collapsed: true,
        glyph:  0xf015,
        //glyph: 42,
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        collapsible : true
        //tbar: [{
            //text: 'Button',
            //handler: 'onClickButton'
        //}]
    },{
        region: 'center',
        xtype: 'app-tabutama'
        
        //items:[{
            //title: 'Tab 1',
            ////glyph : 0xf041,
            ////html: '<h2>Content appropriate for the current navigation.</h2>'
        //}]
    }]
});
