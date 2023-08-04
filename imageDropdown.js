
function noLineArt() {
    const moverField = Document.Fields.ByName("background-swap")[0]
    Editor.Resources.ClipartItems("513c5ec3-28a3-4751-96b1-4fda3c8acbd6", (item) => {
        moverField.image.data = item[1];
        moverField.Save()
    })
}

function lineArt() {
    const moverField = Document.Fields.ByName("background-swap")[0]
    Editor.Resources.ClipartItems("513c5ec3-28a3-4751-96b1-4fda3c8acbd6", (item) => {
        moverField.image.data = item[2];
        moverField.Save()
    })
}

const getNoLine = new MEUIButton("No Lines", noLineArt)
const getLine = new MEUIButton("Lines", lineArt)


const moveField = new MEUIDropDown([{ Label: "Lines", Value: 2 }, { Label: "No Lines", Value: 1 }], { Label: "Lines", Value: 2 }, (option) => {
    const clipArtSwap = Document.Fields.ByName("background-swap")[0];
    // Need to use albumId instead of name for some reason, and need to loop through items. 
    Editor.Resources.ClipartItems("513c5ec3-28a3-4751-96b1-4fda3c8acbd6", (item) => {
        clipArtSwap.image.data = item[option.Value]
        clipArtSwap.Save()
    })
})

Editor.UI.Add(null, UiDestinationTarget.FieldsTab, moveField)
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, getNoLine)
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, getLine)