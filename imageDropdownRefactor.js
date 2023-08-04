// So this isn't perfect, but it definetly works
// Just need the actual values of ClipArt items. For some reason the ClipartItem method wasn't working for me.

const dropdownList = [
    { Label: "No Lines", Value: 1 },
    { Label: "Lines", Value: 2 }
]

const swapClipart = new MEUIDropDown(dropdownList, dropdownList[0], (option) => {
    const clipArtSwap = Document.Fields.ByName("background-swap")[0];
    // Need to use albumId instead of name for some reason, and need to loop through items. 
    Editor.Resources.ClipartItems("513c5ec3-28a3-4751-96b1-4fda3c8acbd6", (item) => {
        clipArtSwap.image.data = item[option.Value]
        clipArtSwap.Save()
    })
})

Editor.UI.Add(null, UiDestinationTarget.FieldsTab, swapClipart)