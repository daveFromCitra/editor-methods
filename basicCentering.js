function clicked() {
    let fieldData = Document.Fields.ByName("Mover")[0]
    let fieldWidth = fieldData.area.w
    let fieldHeight = fieldData.area.h


    let canvas = Document.Global.Get.CanvasAndSize().size.dimension;
    let canvasWidth = canvas.width
    let canvasHeight = canvas.height

    let centerPoint = [canvasWidth/2, canvasHeight/2]

    let centeredFieldX = canvasWidth/2 - fieldWidth/2
    let centeredFieldY = canvasHeight/2 - fieldHeight/2

    fieldData.area.x = centeredFieldX
    fieldData.area.y = centeredFieldY
    fieldData.Save()
}



function fieldInfo() {
    let fieldData = Document.Fields.ByName("Mover")[0].area
    let fieldWidth = fieldData.w
    let fieldHeight = fieldData.h


    let canvas = Document.Global.Get.CanvasAndSize().size.dimension;
    let canvasWidth = canvas.width
    let canvasHeight = canvas.height

    let centerPoint = [canvasWidth/2, canvasHeight/2]

    console.log(centerPoint);
}

const centerField = new MEUIButton("Center Field", clicked)
const getFieldInfo = new MEUIButton("Get Field", fieldInfo)

Editor.UI.Add(null, UiDestinationTarget.FieldsTab, centerField);
Editor.UI.Add(null, UiDestinationTarget.FieldsTab, getFieldInfo);
