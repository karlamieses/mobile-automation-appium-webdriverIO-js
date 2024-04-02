// <ref>

describe("Android elements", () => {

    it("Find element by accessibility id", async() => {

        const appOption = await $('~App')

        await appOption.click()

        const actionBar = await $('~Action Bar')
        
        await expect(actionBar).toBeExisting()

    })

    it.only("Finding element by class name", async() => {
        const classNameElement = await $('android.widget.TextView')

        await expect(classNameElement).toHaveText("API Demos")
    })
})