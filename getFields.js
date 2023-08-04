function clicked() {
    let fieldInfo = Document.Fields.All()
    console.log(fieldInfo);
}

const bt = new MEUIButton("Get Fields", clicked)

Editor.UI.Add(null, UiDestinationTarget.FieldsTab, bt);