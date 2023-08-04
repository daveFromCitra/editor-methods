function clicked() {
    const moverField = Document.Fields.ByName("Mover")[0]
    moverField.area.x = 0;
    moverField.Save();
}

function fieldInfo() {
    let fieldData = Document.Fields.ByName("Mover")
    console.log(fieldData);
}

const moveField = new MEUIButton("Move Field", clicked)
const getFieldInfo = new MEUIButton("Get Field", fieldInfo)

Editor.UI.Add(null, UiDestinationTarget.FieldsTab, moveField);
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, getFieldInfo);
