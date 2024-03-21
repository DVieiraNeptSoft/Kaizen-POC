SearchField.setValue(modelSimpleFormL0.getData().projectID);
SearchField.fireLiveChange();

DialogApproveL4.close();

SplitApp.setBusy(false);

var options = {
    parameters: {
        "where": "", // Optional 
        "select": "", // Optional 
        "take": "", // Optional 
        "skip": "", // Optional 
        "order": "" // Optional 
    }
};

apiRestAPIgetProjects(options);

DialogApprovedMessage.open();