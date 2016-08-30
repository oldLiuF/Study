Ext.define('ExtjsStudy.view.grid.GridPanelTest', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.gridpaneltest',
	title: 'grid',
	controller: 'gridpaneltest',
	viewModel: 'gridpaneltest',

	items: [{
		xtype: 'gridpanel',
		title: 'test',
		reference: 'grid',
		bind: {
			store: '{test}'
		},
		columns: [{
			text: 'test1',
			dataIndex: 'test1'
		}, {
			text: 'test2',
			dataIndex: 'test2'
		}]
	}]/*,
	initComponent: function() {
		debugger;
	}*/
});