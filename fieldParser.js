const dropdownList = [
    { Label: "Fire 1", Value: 0 },
    { Label: "Fire 2", Value: 1 },
    { Label: "Fire 3", Value: 2 }
]

const swapClipart = new MEUIDropDown(dropdownList, dropdownList[0], (option) => {
    const clipArtSwap = Document.Fields.ByName("background-swap")[0];
    // Need to use albumId instead of name for some reason, and need to loop through items. 
    Editor.Resources.ClipartItems("4913a181-96eb-4801-8503-e73735075a94", (item) => {
        clipArtSwap.image.data = item[option.Value]
        clipArtSwap.Save()
    })
})

// Centering function
function center() {
    // Grabbing field sizing info
    let fieldData = Editor.Selection.GetSelectedField()
    let fieldWidth = fieldData.area.w
    let fieldHeight = fieldData.area.h

    // Grabbing canvas sizing info
    let canvas = Document.Global.Get.CanvasAndSize().size.dimension;
    let canvasWidth = canvas.width
    let canvasHeight = canvas.height

    // So the idea is, half the width and height of the canvas gives the center.
    // But moving the field coordinates to the center would just put the upper lefthand corner of the field in teh center.
    // So half the width/heigh of the field is taken away from the centered coordinates to compensate
    let centeredFieldX = canvasWidth/2 - fieldWidth/2
    let centeredFieldY = canvasHeight/2 - fieldHeight/2

    // New center coordinates are set and saved.
    fieldData.area.x = centeredFieldX
    fieldData.area.y = centeredFieldY
    fieldData.Save()
}

function parseTextFields() {
    const allFieldInfo = Document.Fields.All()
    for (let i = 0; i < allFieldInfo.length; i++) {
        const fieldToCheck = allFieldInfo[i];
        if (fieldToCheck.info.tags.includes("text-edit")) {
            const fieldLabel = new MEUILabel(fieldToCheck.info.name)
            const fieldTextBox = new MEUITextBox(fieldToCheck.text.data, (field) => {
                fieldToCheck.text.data = field.Properties.Value
                fieldToCheck.Save()
                console.log(fieldToCheck);
            })
            Editor.Events.Register()
            Editor.UI.Add(null, UiDestinationTarget.FieldsTab, fieldLabel)
            Editor.UI.Add(null, UiDestinationTarget.FieldsTab, fieldTextBox)
        }
    }
}

function textFieldEventHandler() {
    Editor.Events.Register("TextField.Text.Edit.KeyPressed", (e) => {
            console.log(e[0]);
    })
}



// Adding the centering button
const moveField = new MEUIButton("Center Field", center)
const swapLabel = new MEUILabel("Background Back of Card")


Editor.UI.Add(null, UiDestinationTarget.TopRightArea, moveField)
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, swapLabel)
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, swapClipart)

parseTextFields()
textFieldEventHandler()
