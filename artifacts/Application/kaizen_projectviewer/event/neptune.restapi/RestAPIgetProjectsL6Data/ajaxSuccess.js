SplitApp.setBusy(false);

// debugger;

const oSorter = new sap.ui.model.Sorter("date", false, false);
const binding = TableAnnualizeBenefits.getBinding("items");
binding.sort(oSorter);