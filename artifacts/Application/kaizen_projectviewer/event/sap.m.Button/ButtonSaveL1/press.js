SplitApp.setBusy(true);

var options = {
    parameters: {
        where: JSON.stringify({projectID: modelSimpleFormL0.getData().projectID}), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        // stage: "L1",
        safetyCriteria: modelSimpleFormL1.getData().safetyCriteria,
        qualityCriteria: modelSimpleFormL1.getData().qualityCriteria,
        onTimeToPromiseCustomer: modelSimpleFormL1.getData().onTimeToPromiseCustomer,
        activityTypeCriteria: modelSimpleFormL1.getData().activityTypeCriteria,
        opExCiCOEtrainedFacilitatorCriteria: modelSimpleFormL1.getData().opExCiCOEtrainedFacilitatorCriteria,
        okrImpactCriteria: modelSimpleFormL1.getData().okrImpactCriteria,
        potentialFinancialImpactCriteria: modelSimpleFormL1.getData().potentialFinancialImpactCriteria,
        easeImplementation: modelSimpleFormL1.getData().easeImplementation,
        impactToBusiness: modelSimpleFormL1.getData().impactToBusiness,
        governanceDecisionCriteria: modelSimpleFormL1.getData().governanceDecisionCriteria,
        kaizenPriorityNumberCalculation: modelSimpleFormL1.getData().kaizenPriorityNumberCalculation
    },
};

apiRestAPIpostProjectsL1(options);

sap.m.MessageToast.show("Data was saved successfully!");