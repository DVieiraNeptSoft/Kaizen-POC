SearchField.setValue(modelSimpleFormL0.getData().projectID);
SearchField.fireLiveChange();

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