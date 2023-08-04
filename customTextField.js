function clicked() {
    let textValue = nb.Properties.Value

    Document.Fields.CreateField(
        Document.Fields.Constants.FieldType["Text"], 
        Editor.View.CurrentPage(),
        {
            x: 0, 
            y: 0
        }, 
        {
            width: 100, 
            height: 10
        },
        (field) => {
            field.text.data = textValue;
            field.text.defaultFormat.fontSize = 12;
            field.text.defaultFormat.fontColor = "#000000";
            field.text.defaultFormat.alignment = "center";
            field.info.tags.push("Custom");
            field.info.name = "Custom tEST";
            //Sync Canvas Field with Form Element
            field.Save();
        }
    )
}

const bt = new MEUIButton("Make Field", clicked)
const nb = new MEUITextBox()

Editor.UI.Add(null, UiDestinationTarget.FieldsTab, nb);
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, bt);