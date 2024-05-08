// <ref>

describe("Android elements", () => {

    it("Find element by accessibility id", async() => {

        const appOption = await $('~App')

        await appOption.click()

        // const actionBar = await $('~Action Bar')
        
        // await expect(actionBar).toBeExisting()

    })

    it("Find element by accessibility id as well", async() => {
        const appOption = await $("~App")
        await appOption.click()

        const alertDialogs = await $("~Alert Dialogs")
        await alertDialogs.click()
    })

    it("Finding element by class name", async() => {
        const classNameElement = await $('android.widget.TextView')

        await expect(classNameElement).toHaveText("API Demos")
    })

    it("Finding element by Xpaths", async() => {
        const randomElement = await $('//android.widget.TextView[@resource-id="android:id/text1"]')

        await randomElement.click()
        console.log("Karla")
    })

    it("Find elements by UIAutomator", async() => {
        await $('android=new UiSelector().textContains("App")').click();
    })

    it("Find all elements (multiple-selectors)", async() => {

        const expectedList = [
            "API Demos", "Access'ibility", 
            "Accessibility","Animation",
            "App","Content",
            "Graphics","Media",
            "NFC","OS",
            "Preference","Text",
            "Views"
        ]
        const actualList = []

        const allSelectors = await $$("android.widget.TextView")

        for (const element of allSelectors) {
            actualList.push(await element.getText())
        }
        console.log("=========================================")
        console.log(actualList)
        console.log(expectedList)
        await expect(actualList).toEqual(expectedList)
    })

    it.only("should check country can be selected", async() => {

        await $("~Views").click()

        await $("~Auto Complete").click()

        await $("~1. Screen Top").click()

        await $('//*[@resource-id="io.appium.android.apis:id/edit"]').addValue("Canada")

        const classNameElement = await $('//*[@text="Canada"]')

        await expect(classNameElement).toHaveText("Canada")

    })
})