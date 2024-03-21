var approvedTodayDate = new Date();

var options = {
    parameters: {
        where: JSON.stringify({ projectID: modelSimpleFormL0.getData().projectID }), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        stage: "L3",
        L3approver: AppCache.userInfo.username,
        L3approver_dateApproved: approvedTodayDate,
        kaizenStartDate: modelSimpleFormL3.getData().kaizenStartDate,
        kaizenCompleteDate: modelSimpleFormL3.getData().kaizenCompleteDate,
        kaizenReportDate: modelSimpleFormL3.getData().kaizenReportDate,
    },
};

apiRestAPIpostProjectsL3Approval(options);
