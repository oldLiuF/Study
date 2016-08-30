Ext.define('ExtjsStudy.view.grid.GridPanelTestModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.gridpaneltest',

    stores: {
    	test: {
    		model: 'ExtjsStudy.Model.Test',
    		
    		data: [
    			{ test1: 'ssssss', test2: 'eeeeeeee'},
    			{ test1: 'ssssss', test2: '这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息这是长度的测试信息'}
    		]
    	}
    },

    data: {
        name: 'ExtjsStudy',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    //TODO - add data, formulas and/or methods to support your view
});