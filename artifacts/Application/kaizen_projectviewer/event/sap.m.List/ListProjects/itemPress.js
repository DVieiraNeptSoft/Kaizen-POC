var selectedItem = ListProjects.getSelectedItem();

// Replace yourField with FieldName
const context = selectedItem.getBindingContext();

// Get Entire Model
const data = context.getObject();

data.dateRaised = convertDatePick(data.dateRaised);

if (data.plannedScheduledStartDate !== null) {
    data.plannedScheduledStartDate = convertDatePick(data.plannedScheduledStartDate);
}

if (data.kaizenStartDate !== null) {
    data.kaizenStartDate = convertDatePick(data.kaizenStartDate);
}

if (data.benefitsStartDate !== null) {
    data.benefitsStartDate = convertDatePick(data.benefitsStartDate);
}

if (data.kaizenCompleteDate !== null) {
    data.kaizenCompleteDate = convertDatePick(data.kaizenCompleteDate);
}

if (data.kaizenReportDate !== null) {
    data.kaizenReportDate = convertDatePick(data.kaizenReportDate);
}

if (data.financeSignOffDate !== null) {
    data.financeSignOffDate = convertDatePick(data.financeSignOffDate);
}

if (data.sbuSponsorSignOffDate !== null) {
    data.sbuSponsorSignOffDate = convertDatePick(data.sbuSponsorSignOffDate);
}

// INI - New Change Daniel ------------------
// debugger;

switch (data.sbu) {
    case "Global":
        SelectPlant.setVisible(false);
        // SelectPlant.setSelectedKey("");

        break;

    default:
        SelectPlant.setVisible(true);
        SelectPlant.setSelectedKey(data.site);
}

removeSelectFields();
addDepartmentFunctionalAreaFields(data.sbu);
// END - New Change Daniel ------------------

modeldetailPage.setData(data);

detailPage.setTitle("Project: " + data.projectID + " - " + data.kaizenProjectDepartment);

checkUserRoles();

modelTableAnnualizeBenefits.setData([]);

switch (data.stage) {
    case "Idea":
        PanelL0.setExpanded(true);
        PanelL1.setExpanded(false);
        PanelL2.setExpanded(false);
        PanelL3.setExpanded(false);
        PanelL4.setExpanded(false);
        PanelL5.setExpanded(false);
        PanelL6.setExpanded(false);

        userGroupRoles.L1 = false;
        userGroupRoles.L1approval = false;
        userGroupRoles.L2 = false;
        userGroupRoles.L2approval = false;
        userGroupRoles.L3 = false;
        userGroupRoles.L4 = false;
        userGroupRoles.L5 = false;
        userGroupRoles.L6 = false;

        if (userGroupRoles.L0) {
            f_L0fields(true);
        } else {
            f_L0fields(false);
        }

        f_L1fields(false);
        f_L2fields(false);
        f_L3fields(false);
        f_L4fields(false);
        f_L5fields(false);
        break;
    case "L0":
        PanelL0.setExpanded(false);
        PanelL1.setExpanded(true);
        PanelL2.setExpanded(false);
        PanelL3.setExpanded(false);
        PanelL4.setExpanded(false);
        PanelL5.setExpanded(false);
        PanelL6.setExpanded(false);

        userGroupRoles.L0 = false;
        userGroupRoles.L2 = false;
        userGroupRoles.L2approval = false;
        userGroupRoles.L3 = false;
        userGroupRoles.L4 = false;
        userGroupRoles.L5 = false;
        userGroupRoles.L6 = false;

        if (userGroupRoles.L1approval === true) {
            lblSimpleFormL1governanceDecisionCriteria.setVisible(true);
            inputSimpleFormL1governanceDecisionCriteria.setVisible(true);
        } else {
            lblSimpleFormL1governanceDecisionCriteria.setVisible(false);
            inputSimpleFormL1governanceDecisionCriteria.setVisible(false);
        }

        f_L0fields(false);
        f_L1fields(true);
        f_L2fields(false);
        f_L3fields(false);
        f_L4fields(false);
        f_L5fields(false);
        break;

    case "L1":
        PanelL0.setExpanded(false);
        PanelL1.setExpanded(false);
        PanelL2.setExpanded(true);
        PanelL3.setExpanded(false);
        PanelL4.setExpanded(false);
        PanelL5.setExpanded(false);
        PanelL6.setExpanded(false);

        userGroupRoles.L0 = false;
        userGroupRoles.L1 = false;
        userGroupRoles.L1approval = false;
        userGroupRoles.L3 = false;
        userGroupRoles.L4 = false;
        userGroupRoles.L5 = false;
        userGroupRoles.L6 = false;

        lblSimpleFormL1governanceDecisionCriteria.setVisible(true);
        inputSimpleFormL1governanceDecisionCriteria.setVisible(true);

        f_L0fields(false);
        f_L1fields(false);
        f_L2fields(true);
        f_L3fields(false);
        f_L4fields(false);
        f_L5fields(false);
        break;

    case "L2":
        PanelL0.setExpanded(false);
        PanelL1.setExpanded(false);
        PanelL2.setExpanded(false);
        PanelL3.setExpanded(true);
        PanelL4.setExpanded(false);
        PanelL5.setExpanded(false);
        PanelL6.setExpanded(false);

        userGroupRoles.L0 = false;
        userGroupRoles.L1 = false;
        userGroupRoles.L1approval = false;
        userGroupRoles.L2 = false;
        userGroupRoles.L2approval = false;
        // userGroupRoles.L3 = false;
        userGroupRoles.L4 = false;
        userGroupRoles.L5 = false;
        userGroupRoles.L6 = false;

        lblSimpleFormL1governanceDecisionCriteria.setVisible(true);
        inputSimpleFormL1governanceDecisionCriteria.setVisible(true);

        f_L0fields(false);
        f_L1fields(false);
        f_L2fields(false);
        f_L3fields(true);
        f_L4fields(false);
        f_L5fields(false);
        break;

    case "L3":
        PanelL0.setExpanded(false);
        PanelL1.setExpanded(false);
        PanelL2.setExpanded(false);
        PanelL3.setExpanded(false);
        PanelL4.setExpanded(true);
        PanelL5.setExpanded(false);
        PanelL6.setExpanded(false);

        userGroupRoles.L0 = false;
        userGroupRoles.L1 = false;
        userGroupRoles.L1approval = false;
        userGroupRoles.L2 = false;
        userGroupRoles.L2approval = false;
        userGroupRoles.L3 = false;
        // userGroupRoles.L4 = false;
        userGroupRoles.L5 = false;
        userGroupRoles.L6 = false;

        lblSimpleFormL1governanceDecisionCriteria.setVisible(true);
        inputSimpleFormL1governanceDecisionCriteria.setVisible(true);

        f_L0fields(false);
        f_L1fields(false);
        f_L2fields(false);
        f_L3fields(false);
        f_L4fields(true);
        f_L5fields(false);
        break;

    case "L4":
        PanelL0.setExpanded(false);
        PanelL1.setExpanded(false);
        PanelL2.setExpanded(false);
        PanelL3.setExpanded(false);
        PanelL4.setExpanded(false);
        PanelL5.setExpanded(true);
        PanelL6.setExpanded(false);

        userGroupRoles.L0 = false;
        userGroupRoles.L1 = false;
        userGroupRoles.L1approval = false;
        userGroupRoles.L2 = false;
        userGroupRoles.L2approval = false;
        userGroupRoles.L3 = false;
        userGroupRoles.L4 = false;
        // userGroupRoles.L5 = false;
        userGroupRoles.L6 = false;

        lblSimpleFormL1governanceDecisionCriteria.setVisible(true);
        inputSimpleFormL1governanceDecisionCriteria.setVisible(true);

        f_L0fields(false);
        f_L1fields(false);
        f_L2fields(false);
        f_L3fields(false);
        f_L4fields(false);
        f_L5fields(true);
        break;

    case "L5":
        PanelL0.setExpanded(false);
        PanelL1.setExpanded(false);
        PanelL2.setExpanded(false);
        PanelL3.setExpanded(false);
        PanelL4.setExpanded(false);
        PanelL5.setExpanded(false);
        PanelL6.setExpanded(true);

        userGroupRoles.L0 = false;
        userGroupRoles.L1 = false;
        userGroupRoles.L1approval = false;
        userGroupRoles.L2 = false;
        userGroupRoles.L2approval = false;
        userGroupRoles.L3 = false;
        userGroupRoles.L4 = false;
        userGroupRoles.L5 = false;
        // userGroupRoles.L6 = false;

        lblSimpleFormL1governanceDecisionCriteria.setVisible(true);
        inputSimpleFormL1governanceDecisionCriteria.setVisible(true);

        f_L0fields(false);
        f_L1fields(false);
        f_L2fields(false);
        f_L3fields(false);
        f_L4fields(false);
        f_L5fields(false);
        // debugger;
        getL6Data(data.projectID);
        break;

    case "L6":
        PanelL0.setExpanded(false);
        PanelL1.setExpanded(false);
        PanelL2.setExpanded(false);
        PanelL3.setExpanded(false);
        PanelL4.setExpanded(false);
        PanelL5.setExpanded(false);
        PanelL6.setExpanded(true);

        userGroupRoles.L0 = false;
        userGroupRoles.L1 = false;
        userGroupRoles.L1approval = false;
        userGroupRoles.L2 = false;
        userGroupRoles.L2approval = false;
        userGroupRoles.L3 = false;
        userGroupRoles.L4 = false;
        userGroupRoles.L5 = false;
        userGroupRoles.L6 = false;

        lblSimpleFormL1governanceDecisionCriteria.setVisible(true);
        inputSimpleFormL1governanceDecisionCriteria.setVisible(true);

        f_L0fields(false);
        f_L1fields(false);
        f_L2fields(false);
        f_L3fields(false);
        f_L4fields(false);
        f_L5fields(false);

        getL6Data(data.projectID);
        break;
}

modelHBoxUserRolesButton.setData(userGroupRoles);

modelSimpleFormL0.setData(data);
modelSimpleFormL1.setData(data);
modelSimpleFormL2.setData(data);
modelSimpleFormL3.setData(data);
modelSimpleFormL4.setData(data);
modelSimpleFormL5.setData(data);

// getL6Data(data.projectID);
