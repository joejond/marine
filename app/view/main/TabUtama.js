/*
Suwarjono 1 Juni 2015
* marine project chevron
*/

Ext.define('marine.view.main.TabUtama', {
    extend	: 'Ext.tab.Panel',
    xtype 	: 'app-tabutama',
    
    //layout	: {
				//type: 'hbox',
				//align: 'stretch'
			//},
	items	: [{
				//xtype: 'component',
				//cls: 'appBanner',
				//padding: 10,
				//height: 40,
				//html: 'Monita Tracking Enhacement System - Admin',
				
				glyph	: 0xf21a,
				title: 'Equipment'
				//flex: 1
			},{
				//xtype: 'label',
				glyph	: 0xf1eb,
				title: 'Communication'
				
				//width : '10%'
			},{ 
				//xtype	: 'button',
				glyph	: 0xf0c0,
				title	: 'User'
				//width 	: '7%'
			}]
    
});
    
