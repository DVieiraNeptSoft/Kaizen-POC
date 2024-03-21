var approvedTodayDate = new Date();

var options = {
    parameters: {
        where: JSON.stringify({projectID: modelSimpleFormL0.getData().projectID}), // Optional
    },
    data: {
        // projectID: modelSimpleFormL0.getData().projectID,
        stage: "L0",
        L0approver: AppCache.userInfo.username,
        L0approver_dateApproved: approvedTodayDate,
        originator: modelSimpleFormL0.getData().originator,
        dateRaised: modelSimpleFormL0.getData().dateRaised,
        improvementType: modelSimpleFormL0.getData().improvementType,
        sbu: modelSimpleFormL0.getData().sbu,
        site: modelSimpleFormL0.getData().site,
        departmentFunctionArea: modelSimpleFormL0.getData().departmentFunctionArea,
        kaizenProjectDepartment: modelSimpleFormL0.getData().kaizenProjectDepartment,
        businessCaseForAction: modelSimpleFormL0.getData().businessCaseForAction,
    },
};

apiRestAPIpostProjectsL0(options);