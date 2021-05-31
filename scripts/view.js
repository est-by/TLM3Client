/** Объявление элемента (namespace)*/ 
goog.provide('drvtlm3.view');
/** Объявление необходимости элемента*/
goog.require('drvtlm3.controller');
/** Объявление необходимости элемента*/
goog.require('drvtlm3.model');

drvtlm3.view = function(){};
goog.addSingletonGetter(drvtlm3.view);

drvtlm3.view.prototype.getSharedItems =
function (selectService, disabled) {
    var SR = drvtlm3.locale.SR;    
    return [

      

                        {
                            disabled: disabled,
                            xtype: 'checkbox',
                            name: 'EnblTimeCorr',
                            fieldLabel: SR.ENBLTIMECORR,
                            value: true
                        },                        
                        {
                            disabled: disabled,
                            //hidden: true,
                            xtype: 'checkbox',
                            name: 'EnblEvents',
                            fieldLabel: SR.ENBLEVENTS,
                            value: false
                        },
                        {
                            disabled: disabled,
                            //hidden: true,
                            xtype: 'checkbox',
                            name: 'EnblIm',
                            fieldLabel: SR.ENBLIM,
                            value: false
        },         
        {
            disabled: disabled,
            //hidden: true,
            xtype: 'checkbox',
            name: 'EnblHr',
            fieldLabel: SR.ENBLHR,
            value: false
        },        

        {
            disabled: disabled,
            //hidden: true,
            xtype: 'checkbox',
            name: 'EnblDay',
            fieldLabel: SR.ENBLDAY,
            value: false
        },        
        {
            disabled: disabled,
            //hidden: true,
            xtype: 'checkbox',
            name: 'EnblMonth',
            fieldLabel: SR.ENBLMONTH,
            value: false
        },        
                        selectService.getScheduleDescription("Arch", disabled),
                        selectService.getSelectSchedule("Arch", disabled),
                        selectService.getScheduleDescription("Im", disabled),
                        selectService.getSelectSchedule("Im", disabled),
    ];
};

drvtlm3.view.prototype.getSharedSettingsForms =
function (selectService) {
    var form = selectService.getSharedForm(this.getSharedItems(selectService, false));
    return [form];
};

/** форма для автоконфигурирования*/
drvtlm3.view.prototype.getAutoconfigForms =
function (selectService) {
    var SR = drvtlm3.locale.SR;
    var con = constants.getInstance();
   
    var form = new Ext.FormPanel({
       bodyStyle: con.FormStyle,
        labelWidth: con.FieldLabelSize,
        border: false,
        //hidden: true,
        defaults: { width: con.FieldDataSize },
        defaultType: 'textfield',
        items: [
                    {
                        hidden: true,
                        xtype: 'displayfield',
                        name: 'Id',
                        fieldLabel: SR.ID//,
                    },
                    {
                        xtype: 'textfield',
                        name: 'Address',
                        //vtype: 'number',
                        fieldLabel: SR.ADDRESS,
                        value: "1-255"
            }
         ]
    });
    return [form];
}

/** форма для настроек*/
drvtlm3.view.prototype.getForms =
    function (selectService) {
        var SR = drvtlm3.locale.SR;
        var con = constants.getInstance();

        var fItems = [
            {
                hidden: true,
                xtype: 'displayfield',
                name: 'Id',
                fieldLabel: SR.ID//,
            },
            {
                xtype: 'checkbox',
                value: true,
                fieldLabel: SR.ACTIVITY,
                name: 'Activity'
            },
            {
                xtype: 'textfield',
                name: 'Name',
                vtype: 'displayname',
                fieldLabel: SR.NAME,
                value: '',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                vtype: 'number',
                name: 'Address',
                fieldLabel: SR.ADDRESS,
                value: "0",
                allowBlank: false
            }
        ];
        fItems.push(selectService.getSharedPanel(this.getSharedItems(selectService, true), drvtlm3.Plugin));
        //fItems.push(selectService.getSharedDescription());
        //fItems.push(selectService.getSharedButton());

        fItems.push(selectService.getBusDescription());
        fItems.push(selectService.getSelectBusButton());

        var form = new Ext.FormPanel({
            bodyStyle: con.FormStyle,
            labelWidth: con.FieldLabelSize,
            border: false,
            defaults: { width: con.FieldDataSize },
            defaultType: 'textfield',
            items: fItems
        });
        return [form];
    };