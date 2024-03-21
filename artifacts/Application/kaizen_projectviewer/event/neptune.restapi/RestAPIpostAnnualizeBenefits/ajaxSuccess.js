var approvedTodayDate = new Date();

var options = {
    parameters: {
        where: JSON.stringify({ projectID: modelSimpleFormL0.getData().projectID }), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        stage: "L5",
        L5approver: AppCache.userInfo.username,
        L5approver_dateApproved: approvedTodayDate,
        siteFinanceSignOff: modelSimpleFormL5.getData().siteFinanceSignOff,
        financeSignOffDate: modelSimpleFormL5.getData().financeSignOffDate,
        sbuSponsorSignOff: modelSimpleFormL5.getData().sbuSponsorSignOff,
        sbuSponsorSignOffDate: modelSimpleFormL5.getData().sbuSponsorSignOffDate
    },
};

apiRestAPIpostProjectsL5Approval(options);