SplitApp.setBusy(true);

var options = {
    parameters: {
        where: JSON.stringify({projectID: modelSimpleFormL0.getData().projectID}), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        // stage: "L1",
        siteFinanceSignOff: modelSimpleFormL5.getData().siteFinanceSignOff,
        financeSignOffDate: modelSimpleFormL5.getData().financeSignOffDate,
        sbuSponsorSignOff: modelSimpleFormL5.getData().sbuSponsorSignOff,
        sbuSponsorSignOffDate: modelSimpleFormL5.getData().sbuSponsorSignOffDate
    },
};

apiRestAPIpostProjectsL5(options);

sap.m.MessageToast.show("Data was saved successfully!");