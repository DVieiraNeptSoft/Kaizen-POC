sap.n.Shell.attachBeforeDisplay(function(config) {

    if (config) {
        
        
     
     //sap.m.MessageToast.show("Copied Values from App Idea - " + config.data.projectID); 
     SearchField.setValue(config.data.projectID);
     SearchField.fireLiveChange();
     var items = ListProjects.getItems();
     ListProjects.setSelectedItem(items[0]);
     ListProjects.fireItemPress();
    }
})

var userGroupRoles = { L0: false, L1: false, L1approval: false, L2: false, L2approval: false, L3: false, L4: false, L5: false, L6: false };