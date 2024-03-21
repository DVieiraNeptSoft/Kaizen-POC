var sbu = modelSimpleFormL0.getData().sbu;

switch (sbu) {
    case "Global":
        SelectPlant.setVisible(false);
        SelectPlant.setSelectedKey("");              

        break;

    default:
        SelectPlant.setVisible(true);
}

removeSelectFields();

SelectDepartmentFunctArea.setVisible(true);
addDepartmentFunctionalAreaFields(sbu);