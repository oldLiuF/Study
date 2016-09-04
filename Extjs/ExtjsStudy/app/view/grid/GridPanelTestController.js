Ext.define('ExtjsStudy.view.grid.GridPanelTestController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.gridpaneltest',
    init: function(view) {
        // debugger;
    },
    afterRender: function(view) {
        // debugger;
        var grid = view.lookupReference('grid'),
            tip = Ext.create('Ext.tip.ToolTip', {
                target: grid.getView().el,
                delegate: grid.getView().itemSelector,
                //trackMouse: true,
                renderTo: Ext.getBody(),
                listeners: {
                    beforeshow: function updateTipBody(tip, eOpts) {
                        debugger;
                        tip.update(this.getView().getRecord(tip.triggerElement).get('test2'));
                    },
                    scope: grid
                }
            });
    }
});
