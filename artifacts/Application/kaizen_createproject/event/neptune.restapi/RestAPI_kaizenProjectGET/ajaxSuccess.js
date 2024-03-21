App.setBusy(false);

var id, lastProjectID, newProjectID;

if (modelMultiModelProjecttable.oData.length <= 0) {
    newProjectID = 1;
} else {
    for (let i = 0; i < modelMultiModelProjecttable.oData.length; i++) {
        id = modelMultiModelProjecttable.oData[i].projectID;

        // id = parseInt(id.replace(/\D/g, ""));

        projectIDarray.push(id);
    }

    projectIDarray.sort((a, b) => a - b);

    console.log(projectIDarray);

    lastProjectID = projectIDarray[projectIDarray.length - 1];

    console.log(lastProjectID); // Output: 5

    newProjectID = lastProjectID + 1;
}

// InputID.setValue("Project " + newProjectID);
InputID.setValue(newProjectID);

DatePickerDateRaised.setDateValue(new Date());