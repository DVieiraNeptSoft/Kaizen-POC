var approvedTodayDate = new Date();

var options = {
    parameters: {
        where: JSON.stringify({ projectID: modelSimpleFormL0.getData().projectID }), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        stage: "L6",
        L6approver: AppCache.userInfo.username,
        L6approver_dateApproved: approvedTodayDate,
    },
};

apiRestAPIpostProjectsL6Approval(options);