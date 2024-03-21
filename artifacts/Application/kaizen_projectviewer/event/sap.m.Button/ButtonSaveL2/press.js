SplitApp.setBusy(true);

var options = {
    parameters: {
        where: JSON.stringify({projectID: modelSimpleFormL0.getData().projectID}), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        // stage: "L1",
        approvedForPlanning: modelSimpleFormL1.getData().approvedForPlanning,
        kaizenFacilitatorName: modelSimpleFormL1.getData().kaizenFacilitatorName,
        plannedScheduledStartDate: modelSimpleFormL1.getData().plannedScheduledStartDate,
        targetedCostSaving: modelSimpleFormL1.getData().targetedCostSaving,
        targetedWorkingCapitalImprovement: modelSimpleFormL1.getData().targetedWorkingCapitalImprovement,
        productivitySavings: modelSimpleFormL1.getData().productivitySavings,
        scrapReductionCostAvoidance: modelSimpleFormL1.getData().scrapReductionCostAvoidance,
        kaizenActivityCost: modelSimpleFormL1.getData().kaizenActivityCost,
        requiredLabourHours: modelSimpleFormL1.getData().requiredLabourHours,
        labourHoursRate: modelSimpleFormL1.getData().labourHoursRate,
        labourHoursCost: modelSimpleFormL1.getData().labourHoursCost,
    },
};

apiRestAPIpostProjectsL2(options);

sap.m.MessageToast.show("Data was saved successfully!");