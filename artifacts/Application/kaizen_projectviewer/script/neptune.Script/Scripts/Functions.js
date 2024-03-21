function checkUserRoles() {
    var userGroupL0 = ModelData.FindFirst(AppCache.userInfo.group, "name", "Kaizen L0 Group", "EQ");

    if (userGroupL0) {
        userGroupRoles.L0 = true;
    }

    var userGroupL1 = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L1 Group General",
        "EQ"
    );

    if (userGroupL1) {
        userGroupRoles.L1 = true;
    }

    var userGroupL1approval = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L1 Group Appraisal",
        "EQ"
    );

    if (userGroupL1approval) {
        userGroupRoles.L1approval = true;
    }

    var userGroupL2 = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L2 Group General",
        "EQ"
    );

    if (userGroupL2) {
        userGroupRoles.L2 = true;
    }

    var userGroupL2approval = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L2 Group Appraisal",
        "EQ"
    );

    if (userGroupL2approval) {
        userGroupRoles.L2approval = true;
    }

    var userGroupL3 = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L3 Group Appraisal",
        "EQ"
    );

    if (userGroupL3) {
        userGroupRoles.L3 = true;
    }

    var userGroupL4 = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L4 Group Appraisal",
        "EQ"
    );

    if (userGroupL4) {
        userGroupRoles.L4 = true;
    }

    var userGroupL5 = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L5 Group Appraisal",
        "EQ"
    );

    if (userGroupL5) {
        userGroupRoles.L5 = true;
    }

    var userGroupL6 = ModelData.FindFirst(
        AppCache.userInfo.group,
        "name",
        "Kaizen L6 Group Appraisal",
        "EQ"
    );

    if (userGroupL6) {
        userGroupRoles.L6 = true;
    }
}

function convertDate(date) {
    const originalDate = new Date(date);

    // Define the desired timezone offset
    const timeZoneOffset = 60; // GMT +1 is 60 minutes ahead of UTC

    // Calculate the timezone offset in milliseconds
    const timeZoneOffsetMs = timeZoneOffset * 60 * 1000;

    // Apply the timezone offset to the original date
    const transformedDate = new Date(originalDate.getTime() + timeZoneOffsetMs);

    // console.log(transformedDate.toISOString()); // Output: "2023-12-05T00:00:00.000Z"

    return transformedDate.toLocaleDateString();
}

function convertDatePick(date) {
    const originalDate = new Date(date);

    // Define the desired timezone offset
    const timeZoneOffset = 60; // GMT +1 is 60 minutes ahead of UTC

    // Calculate the timezone offset in milliseconds
    const timeZoneOffsetMs = timeZoneOffset * 60 * 1000;

    // Apply the timezone offset to the original date
    const transformedDate = new Date(originalDate.getTime() + timeZoneOffsetMs);

    // console.log(transformedDate.toISOString()); // Output: "2023-12-05T00:00:00.000Z"

    // return transformedDate.toLocaleDateString();
    return transformedDate;
}

function selectFirstItem() {
    var items = ListProjects.getItems();
    ListProjects.removeSelections();

    if (items.length > 0) {
        ListProjects.setSelectedItem(items[0]);
        ListProjects.fireItemPress();
    }
}

function f_L0fields(value) {
    // InputID.setEditable(value);
    // SelectOriginator.setEditable(value);
    InputOriginator.setEditable(value);
    // DatePickerDateRaised.setEditable(value);
    SelectImprovType.setEditable(value);
    SelectSBU.setEditable(value);
    // SelectSite.setEditable(value);
    SelectPlant.setEditable(value);
    SelectDepartmentFunctArea.setEditable(value);
    InputKaizenProjectDesc.setEditable(value);
    InputBusinessCaseAction.setEditable(value);
}

function f_L1fields(value) {
    inSimpleFormL1safetyCriteria.setEditable(value);
    inSimpleFormL1qualityCriteria.setEditable(value);
    inSimpleFormL1onTimeToPromiseCustomer.setEditable(value);
    inSimpleFormL1activityTypeCriteria.setEditable(value);
    inSimpleFormL1opExCiCOEtrainedFacilitatorCriteria.setEditable(value);
    inSimpleFormL1okrImpactCriteria.setEditable(value);
    inSimpleFormL1potentialFinancialImpactCriteria.setEditable(value);
    inSimpleFormL1EaseOfImplementation.setEditable(value);
    inSimpleFormL1BusinessImpact.setEditable(value);
    inputSimpleFormL1governanceDecisionCriteria.setEditable(value);
    // inSimpleFormL1kaizenPriorityNumberCalculation.setEditable(value);
}

function f_L2fields(value) {
    inSimpleFormL2approvedForPlanning.setEditable(value);
    inSimpleFormL2kaizenFacilitatorName.setEditable(value);
    inSimpleFormL2plannedScheduledStartDate.setEditable(value);
    inSimpleFormL2targetedCostSaving.setEditable(value);
    inSimpleFormL2targetedWorkingCapitalImprovement.setEditable(value);
    inSimpleFormL2productivitySavings.setEditable(value);
    inSimpleFormL2scrapReductionCostAvoidance.setEditable(value);
    inSimpleFormL2kaizenActivityCost.setEditable(value);
    inSimpleFormL2requiredLabourHours.setEditable(value);
    inSimpleFormL2labourHoursRate.setEditable(value);
}

function f_L3fields(value) {
    inSimpleFormL3kaizenStartDate.setEditable(value);
    inSimpleFormL3kaizenCompleteDate.setEditable(value);
    inSimpleFormL3kaizenReportDate.setEditable(value);
}

function f_L4fields(value) {
    inSimpleFormL4benefitsStartDate.setEditable(value);
    inSimpleFormL4validatedCostsSaving.setEditable(value);
    inSimpleFormL4validatedWorkingCapital.setEditable(value);
    inSimpleFormL4validatedProductivitySavings.setEditable(value);
    inSimpleFormL4validatedCostAvoidance.setEditable(value);
    inSimpleFormL4validatedKaizenActivityCost.setEditable(value);
    inSimpleFormL4validatedRequiredLabourHours.setEditable(value);
    inSimpleFormL4validatedLabourHoursRate.setEditable(value);
}

function f_L5fields(value) {
    inSimpleFormL5siteFinanceSignOff.setEditable(value);
    inSimpleFormL5financeSignOffDate.setEditable(value);
    inSimpleFormL5sbuSponsorSignOff.setEditable(value);
    inSimpleFormL5sbuSponsorSignOffDate.setEditable(value);
}

function calc_priorityRanking() {
    var safetyCriteria,
        qualityCriteria,
        onTimeToPromiseCustomer,
        activityTypeCriteria,
        opExCiCOEtrainedFacilitatorCriteria,
        okrImpactCriteria,
        potentialFinancialImpactCriteria,
        easeImplementation,
        impactToBusiness,
        governanceDecisionCriteria,
        kaizenPriorityNumber;

    if (modelSimpleFormL1.getData().safetyCriteria !== null) {
        safetyCriteria = parseInt(modelSimpleFormL1.getData().safetyCriteria);
    } else {
        safetyCriteria = 0;
    }

    if (modelSimpleFormL1.getData().qualityCriteria !== null) {
        qualityCriteria = parseInt(modelSimpleFormL1.getData().qualityCriteria);
    } else {
        qualityCriteria = 0;
    }

    if (modelSimpleFormL1.getData().onTimeToPromiseCustomer !== null) {
        onTimeToPromiseCustomer = parseInt(modelSimpleFormL1.getData().onTimeToPromiseCustomer);
    } else {
        onTimeToPromiseCustomer = 0;
    }

    if (modelSimpleFormL1.getData().activityTypeCriteria !== null) {
        activityTypeCriteria = parseInt(modelSimpleFormL1.getData().activityTypeCriteria);
    } else {
        activityTypeCriteria = 0;
    }

    if (modelSimpleFormL1.getData().opExCiCOEtrainedFacilitatorCriteria !== null) {
        opExCiCOEtrainedFacilitatorCriteria = parseInt(
            modelSimpleFormL1.getData().opExCiCOEtrainedFacilitatorCriteria
        );
    } else {
        opExCiCOEtrainedFacilitatorCriteria = 0;
    }

    if (modelSimpleFormL1.getData().okrImpactCriteria !== null) {
        okrImpactCriteria = parseInt(modelSimpleFormL1.getData().okrImpactCriteria);
    } else {
        okrImpactCriteria = 0;
    }

    if (modelSimpleFormL1.getData().potentialFinancialImpactCriteria !== null) {
        potentialFinancialImpactCriteria = parseInt(
            modelSimpleFormL1.getData().potentialFinancialImpactCriteria
        );
    } else {
        potentialFinancialImpactCriteria = 0;
    }

    if (modelSimpleFormL1.getData().easeImplementation !== null) {
        easeImplementation = parseInt(modelSimpleFormL1.getData().easeImplementation);
    } else {
        easeImplementation = 0;
    }

    if (modelSimpleFormL1.getData().impactToBusiness !== null) {
        impactToBusiness = parseInt(modelSimpleFormL1.getData().impactToBusiness);
    } else {
        impactToBusiness = 0;
    }

    if (
        modelSimpleFormL1.getData().governanceDecisionCriteria !== null &&
        modelSimpleFormL1.getData().governanceDecisionCriteria !== ""
    ) {
        governanceDecisionCriteria = parseInt(
            modelSimpleFormL1.getData().governanceDecisionCriteria
        );
    } else {
        governanceDecisionCriteria = 0;
    }

    return parseFloat(
        (kaizenPriorityNumber =
            safetyCriteria +
            qualityCriteria +
            onTimeToPromiseCustomer +
            activityTypeCriteria +
            opExCiCOEtrainedFacilitatorCriteria +
            okrImpactCriteria +
            potentialFinancialImpactCriteria +
            easeImplementation +
            impactToBusiness +
            governanceDecisionCriteria)
    );
}

function calc_totalKaizenBenefits() {
    var validatedCostsSaving, validatedWorkingCapital, validatedProductivitySavings, validatedCostAvoidance, totalKaizenBenefits;

    if (
        modelSimpleFormL4.getData().validatedCostsSaving !== null &&
        modelSimpleFormL4.getData().validatedCostsSaving !== ""
    ) {
        validatedCostsSaving = parseFloat(modelSimpleFormL4.getData().validatedCostsSaving);
    } else {
        validatedCostsSaving = 0;
    }

    if (
        modelSimpleFormL4.getData().validatedWorkingCapital !== null &&
        modelSimpleFormL4.getData().validatedWorkingCapital !== ""
    ) {
        validatedWorkingCapital = parseFloat(modelSimpleFormL4.getData().validatedWorkingCapital);
    } else {
        validatedWorkingCapital = 0;
    }

    if (
        modelSimpleFormL4.getData().validatedProductivitySavings !== null &&
        modelSimpleFormL4.getData().validatedProductivitySavings !== ""
    ) {
        validatedProductivitySavings = parseFloat(modelSimpleFormL4.getData().validatedProductivitySavings);
    } else {
        validatedProductivitySavings = 0;
    }

    if (
        modelSimpleFormL4.getData().validatedCostAvoidance !== null &&
        modelSimpleFormL4.getData().validatedCostAvoidance !== ""
    ) {
        validatedCostAvoidance = parseFloat(modelSimpleFormL4.getData().validatedCostAvoidance);
    } else {
        validatedCostAvoidance = 0;
    }

    return (totalKaizenBenefits =
        validatedCostsSaving + validatedWorkingCapital + validatedProductivitySavings + validatedCostAvoidance);
}

function getL6Data(projectID) {
    SplitApp.setBusy(true);

    var options = {
        parameters: {
            where: JSON.stringify({ projectID: projectID }),
        },
    };

    apiRestAPIgetProjectsL6Data(options);
}

function calc_L6Data(benefitsStartValue) {
    var kaizenStartDate = modelSimpleFormL3.getData().kaizenStartDate;
    var kaizenStartDate_variable,
        isPlus2Months,
        annualizeBenefits_Obj = {},
        annualizeBenefits_Array = [],
        validatedCostsSaving = modelSimpleFormL4.getData().validatedCostsSaving,
        validatedWorkingCapital = modelSimpleFormL4.getData().validatedWorkingCapital,
        validatedCostAvoidance = modelSimpleFormL4.getData().validatedCostAvoidance,
        validatedProductivitySavings = modelSimpleFormL4.getData().validatedProductivitySavings;

    // INI Daniel --------------------------------------------------------------
    isPlus2Months = compareBenefitDates(kaizenStartDate, benefitsStartValue);

    if (isPlus2Months >= 2) {
        kaizenStartDate_variable = benefitsStartValue;
    } else {
        kaizenStartDate_variable = kaizenStartDate;
    }
    // END Daniel --------------------------------------------------------------

    // if (benefitsStartValue === "Yes") {
    //     kaizenStartDate_variable = new Date(
    //         kaizenStartDate.getFullYear(),
    //         kaizenStartDate.getMonth() + 2,
    //         kaizenStartDate.getDate()
    //     );
    // } else {
    //     kaizenStartDate_variable = kaizenStartDate;
    // }

    if (kaizenStartDate_variable === null) {
        kaizenStartDate_variable = new Date();
    }

    var months = 12;

    //Construct the data to send to the kaizen_annualizebenefits table
    for (var i = 0; i < months; i++) {
        var annualizeBenefits_date = new Date(
            kaizenStartDate_variable.getFullYear(),
            kaizenStartDate_variable.getMonth() + i,
            kaizenStartDate_variable.getDate()
        );

        annualizeBenefits_Obj = {}; //Cleaning the Object

        // const monthNumber = 2; // Assuming the number is 2 for March
        // const monthName = new Date(0, monthNumber).toLocaleString('default', { month: 'long' });
        // console.log(monthName); // Output: "March"

        annualizeBenefits_Obj = Object.assign(
            {},
            {
                projectID: modelSimpleFormL0.getData().projectID,
                date: annualizeBenefits_date,
                year: annualizeBenefits_date.getFullYear(),
                month: new Date(0, annualizeBenefits_date.getMonth()).toLocaleString("default", {
                    month: "long",
                }),
                validatedCostsSaving: parseFloat(validatedCostsSaving) / 12,
                validatedWorkingCapital: parseFloat(validatedWorkingCapital) / 12,
                validatedCostAvoidance: parseFloat(validatedCostAvoidance) / 12,
                validatedProductivitySavings: parseFloat(validatedProductivitySavings) / 12,
            }
        );

        annualizeBenefits_Array.push(annualizeBenefits_Obj);
    }

    var options = {
        data: annualizeBenefits_Array,
    };

    apiRestAPIpostAnnualizeBenefits(options);
}

function addDepartmentFunctionalAreaFields(value) {
    // var select = new sap.m.Select();
    var select = SelectDepartmentFunctArea;

    var globalFields = [
            "HR",
            "IT",
            "Finance",
            "Sales",
            "Marketing",
            "Commercial",
            "Health & Safety",
            "Global Supply Chain",
        ],
        otherFields = [
            "Engineering",
            "Maintenance",
            "OpExCI",
            "Support",
            "Administrative",
            "SBU Supply Chain",
        ];

    //Always add an empty field
    select.addItem(new sap.ui.core.Item({ key: "", text: "" }));

    if (value !== "Global") {
        for (let i = 0; i < otherFields.length; i++) {
            //Add a new item
            select.addItem(new sap.ui.core.Item({ key: otherFields[i], text: otherFields[i] }));
        }
    } else {
        for (let i = 0; i < globalFields.length; i++) {
            //Add a new item
            select.addItem(new sap.ui.core.Item({ key: globalFields[i], text: globalFields[i] }));
        }
    }

    // select.setSelectedKey("");
}

function removeSelectFields() {
    // Remove all items
    SelectDepartmentFunctArea.removeAllItems();
}

function calc_labourHoursCost() {
    var requiredLabourHours, labourHoursRate, labourHoursCost;

    if (modelSimpleFormL2.getData().requiredLabourHours !== null) {
        requiredLabourHours = parseInt(modelSimpleFormL2.getData().requiredLabourHours);
    } else {
        requiredLabourHours = 0;
    }

    if (modelSimpleFormL2.getData().labourHoursRate !== null) {
        labourHoursRate = parseInt(modelSimpleFormL2.getData().labourHoursRate);
    } else {
        labourHoursRate = 0;
    }

    return (requiredLabourHours = requiredLabourHours * labourHoursRate);
}

function compareBenefitDates(kaizenStartDate, benefitsStartValue) {
    if (kaizenStartDate === null) {
        kaizenStartDate = new Date();
    }

    if (benefitsStartValue === null) {
        benefitsStartValue = kaizenStartDate;
    }
    // debugger;

    // Calculate the difference in months between the two dates
    const diffInMonths =
        (benefitsStartValue.getFullYear() - kaizenStartDate.getFullYear()) * 12 +
        (benefitsStartValue.getMonth() - kaizenStartDate.getMonth());

    // Check if the difference is exactly 2 months
    return diffInMonths;
}

function calc_validatedLabourHoursCost() {
    var validatedRequiredLabourHours, validatedLabourHoursRate, validatedLabourHoursCost;

    if (
        modelSimpleFormL4.getData().validatedRequiredLabourHours !== null &&
        modelSimpleFormL4.getData().validatedRequiredLabourHours !== ""
    ) {
        validatedRequiredLabourHours = parseFloat(
            modelSimpleFormL4.getData().validatedRequiredLabourHours
        );
    } else {
        validatedRequiredLabourHours = 0;
    }

    if (
        modelSimpleFormL4.getData().validatedLabourHoursRate !== null &&
        modelSimpleFormL4.getData().validatedLabourHoursRate !== ""
    ) {
        validatedLabourHoursRate = parseFloat(
            modelSimpleFormL4.getData().validatedLabourHoursRate
        );
    } else {
        validatedLabourHoursRate = 0;
    }

    return (validatedLabourHoursCost = validatedRequiredLabourHours * validatedLabourHoursRate);
}

function calc_totalKaizenCosts() {
    var validatedKaizenActivityCost, validatedLabourHoursCost, totalKaizenCosts;

    if (
        modelSimpleFormL4.getData().validatedKaizenActivityCost !== null &&
        modelSimpleFormL4.getData().validatedKaizenActivityCost !== ""
    ) {
        validatedKaizenActivityCost = parseFloat(
            modelSimpleFormL4.getData().validatedKaizenActivityCost
        );
    } else {
        validatedKaizenActivityCost = 0;
    }

    if (
        modelSimpleFormL4.getData().validatedLabourHoursCost !== null &&
        modelSimpleFormL4.getData().validatedLabourHoursCost !== ""
    ) {
        validatedLabourHoursCost = parseFloat(modelSimpleFormL4.getData().validatedLabourHoursCost);
    } else {
        validatedLabourHoursCost = 0;
    }

    return (totalKaizenCosts = validatedKaizenActivityCost + validatedLabourHoursCost);
}

function calc_netNumber() {
    var totalKaizenBenefits, totalKaizenCosts, netNumber;

    if (
        modelSimpleFormL4.getData().totalKaizenBenefits !== null &&
        modelSimpleFormL4.getData().totalKaizenBenefits !== ""
    ) {
        totalKaizenBenefits = parseFloat(modelSimpleFormL4.getData().totalKaizenBenefits);
    } else {
        totalKaizenBenefits = 0;
    }

    if (
        modelSimpleFormL4.getData().totalKaizenCosts !== null &&
        modelSimpleFormL4.getData().totalKaizenCosts !== ""
    ) {
        totalKaizenCosts = parseFloat(modelSimpleFormL4.getData().totalKaizenCosts);
    } else {
        totalKaizenCosts = 0;
    }

    return (netNumber = totalKaizenBenefits - totalKaizenCosts);
}
