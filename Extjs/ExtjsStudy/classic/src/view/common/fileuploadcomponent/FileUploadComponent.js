Ext.define('ExtjsStudy.view.common.fileuploadcomponent.FileuploadComponent', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.fileuploadcomponent',
	title: 'FileUpload',
	controller: 'fileuploadcomponent',
	items: [{
		xtype: 'form',
		items:[{
			xtype: 'fileuploadfield',
			textLabel: 'Attachment ',
			listeners: {
				change: 'onChange'
			}
		}]	
	}, {
		xtype: 'gridpanel',
		title: 'Attachment List',
		columns: [{
			text: 'name',
			dataIndex: 'name'
		}, {
			text: 'path',
			dataIndex: 'absolutionPath'
		}, {
			text: 'remarks',
			dataIndex: 'remarks'
		}]
	}]
});