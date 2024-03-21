SplitApp.setBusy(true);

var options = {
    parameters: {
        where: JSON.stringify({projectID: modelSimpleFormL0.getData().projectID}), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        // stage: "L1",
        kaizenStartDate: modelSimpleFormL3.getData().kaizenStartDate,
        kaizenCompleteDate: modelSimpleFormL3.getData().kaizenCompleteDate,
        kaizenReportDate: modelSimpleFormL3.getData().kaizenReportDate,
    },
};

apiRestAPIpostProjectsL3(options);

sap.m.MessageToast.show("Data was saved successfully!");