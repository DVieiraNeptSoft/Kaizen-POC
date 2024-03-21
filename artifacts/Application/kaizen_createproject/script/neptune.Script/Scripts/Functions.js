function f_clearFields() {
    // InputID.setValue();
    InputOriginator.setValue();
    DatePickerDateRaised.setValue();
    SelectImprovType.setSelectedKey(0);
    SelectSBU.setSelectedKey("");
    SelectPlant.setSelectedKey("");
    SelectDepartmentFunctArea.setSelectedKey("");
    InputKaizenProjectDesc.setValue();
    InputBusinessCaseAction.setValue();

    generateNewID();
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

    select.setSelectedKey("");
}

function removeSelectFields() {
    // Remove all items
    SelectDepartmentFunctArea.removeAllItems();
}

function generateNewID() {
    var options = {
        parameters: {
            where: "", // Optional
            select: "", // Optional
            take: "", // Optional
            skip: "", // Optional
            order: "", // Optional
        },
    };

    apiRestAPI_kaizenProjectGET(options);
}
