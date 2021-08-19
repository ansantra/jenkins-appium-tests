const wdio = require("webdriverio");

// javascript
const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "11",
      deviceName: "Android Emulator",
      app: "/Users/anirbansantra/asantra1-sourcetree/jenkins-appium-tests/ApiDemos-debug.apk",
      appPackage: "io.appium.android.apis",
      appActivity: ".view.TextFields",
      automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);
  
    await client.deleteSession();
  }
  
  main();
  