Ext.define('ExtjsStudy.view.main.Maintain', {
    // extend: 'Ext.container.Viewport',
    extend: 'Ext.panel.Panel',
    alias: 'widget.maintain',
    /*
    Uncomment to give this component an xtype
    xtype: 'maintain',
    */
    requires: [
        'Ext.layout.container.Border',
        'Ext.menu.Menu',
        'Ext.panel.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],
    layout: 'border',
    items: [

        /*
                 {
                    xtype: 'menu',
                    title: '33333',
                    floating: false,
                    region: 'north',
                    items: [
                        {
                            text: 'ddddd',
                            items: [
                                {
                                    xtype: 'menu',
                                    items: [
                                        {
                                            text: '1-1'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: '22222'
                        },
                        {
                            text: 'rrrrr'
                        }
                    ]
                }
        
        */


        /*{
            xtype: 'menu',
            region: 'north',
            floating: false,
            width: 100,
            plain: true,
            hidden: false,
            // autoRender: true,
            items: [{
                text: 'File',
                menu: [
                    { text: 'Open...' },
                    '-',
                    { text: 'Close' }
                ]
            }, {
                text: 'Edit',
                menu: [
                    { text: 'Cut' },
                    {
                        text: 'Copy',
                        menu: [
                            { text: 'Copy and Enter' }
                        ]
                    },
                    { text: 'Paste' }
                ]
            }]
        },
        {
            xtype: 'panel',
            region: 'center',
            html: 'Hello Extjs',
            tbar: {
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'menu',
                        title: '33333',
                        floating: false,
                        region: 'north',
                        items: [
                            {
                                text: 'ddddd',
                                menu: [
                                    {
                                        xtype: 'menu',
                                        menu: [
                                            {
                                                text: '1-1'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text: '22222'
                            },
                            {
                                text: 'rrrrr'
                            }
                        ]
                    }
                ]
            }
        },*/
        {
            xtype: 'button',
            cls: 'bz-btn-1',
            // ui: 'baozun-btn',
            width: 100,
            heigth: 100
        }



    ]


});