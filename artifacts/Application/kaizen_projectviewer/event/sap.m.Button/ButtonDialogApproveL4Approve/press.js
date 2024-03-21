var approvedTodayDate = new Date();

var options = {
    parameters: {
        where: JSON.stringify({ projectID: modelSimpleFormL0.getData().projectID }), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        stage: "L4",
        L4approver: AppCache.userInfo.username,
        L4approver_dateApproved: approvedTodayDate,
        benefitsStartDate: modelSimpleFormL4.getData().benefitsStartDate,
        validatedCostsSaving: modelSimpleFormL4.getData().validatedCostsSaving,
        validatedWorkingCapital: modelSimpleFormL4.getData().validatedWorkingCapital,
        validatedProductivitySavings: modelSimpleFormL4.getData().validatedProductivitySavings,
        validatedCostAvoidance: modelSimpleFormL4.getData().validatedCostAvoidance,
        totalKaizenBenefits: modelSimpleFormL4.getData().totalKaizenBenefits,
        validatedKaizenActivityCost: modelSimpleFormL4.getData().validatedKaizenActivityCost,
        validatedRequiredLabourHours: modelSimpleFormL4.getData().validatedRequiredLabourHours,
        validatedLabourHoursRate: modelSimpleFormL4.getData().validatedLabourHoursRate,
        validatedLabourHoursCost: modelSimpleFormL4.getData().validatedLabourHoursCost,
        totalKaizenCosts: modelSimpleFormL4.getData().totalKaizenCosts,
        netNumber: modelSimpleFormL4.getData().netNumber,
    },
};

apiRestAPIpostProjectsL4Approval(options);