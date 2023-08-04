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

// Adding the centering button
const moveField = new MEUIButton("Center Field", center)
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, moveField);
