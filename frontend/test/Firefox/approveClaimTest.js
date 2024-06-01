const { Builder, By, Key, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const assert = require('assert');

async function approvalManagerTest() {
  let driver;
  try {
    driver = await new Builder().forBrowser('MicrosoftEdge').setChromeOptions(new edge.Options()).build();
    await driver.manage().window().setRect({ width: 1440, height: 886 });

    await driver.get("http://localhost:3000/");
    await driver.manage().window().setRect({ width: 1440, height: 886 });
      // 3 | click | css=.button2 |
    await driver.findElement(By.css(".button2")).click();
      // 4 | mouseOver | css=.button2 |
    {
       const element = await driver.findElement(By.css(".button2"));
       await driver.actions().move({ origin: element }).perform();
    }
      // 5 | mouseOut | css=.button2 |
    {
       const element = await driver.findElement(By.css("body"));
       await driver.actions().move({ origin: element, x: 0, y: 0 }).perform();
    }
      // 6 | click | css=.inputForm:nth-child(2) > .input |
    await driver.findElement(By.css(".inputForm:nth-child(2) > .input")).click();
      // 7 | click | css=.inputForm:nth-child(2) > .input |
    await driver.findElement(By.css(".inputForm:nth-child(2) > .input")).click();
      // 8 | type | css=.inputForm:nth-child(2) > .input | anjanarnair@gmail.com
    await driver.findElement(By.css(".inputForm:nth-child(2) > .input")).sendKeys("sharwinxavier.23it@licet.ac.in");
    await driver.sleep(1000); // Wait for 1 second
      // 9 | click | css=.inputForm:nth-child(4) > .input |
    await driver.findElement(By.css(".inputForm:nth-child(4) > .input")).click();
      // 10 | type | css=.inputForm:nth-child(4) > .input | hello@123
    await driver.findElement(By.css(".inputForm:nth-child(4) > .input")).sendKeys("test");
    await driver.sleep(1000); // Wait for 1 second
      // 11 | click | css=.flex-row input |
    await driver.findElement(By.css(".flex-row input")).click();
      // 12 | click | css=.button-submit |
    await driver.findElement(By.css(".button-submit")).click();
    await driver.sleep(10000); // Wait for 10 second

    let employeeExpensesButton = await driver.wait(until.elementLocated(By.css(".tabs [for='radio-2']")), 100000);
    await employeeExpensesButton.click();
    await driver.sleep(1000); // Wait for 1 second
    let pendingCheck = await driver.wait(until.elementLocated(By.css("input[type='checkbox'][value='pending']")), 1000);
    await pendingCheck.click();
    await driver.sleep(8000); // Wait for 8 second

    var action = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/main/section[2]/div[2]/div/div[3]/table/tbody/tr[1]/td[7]")), 1000);
    await action.click();
    var accept = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/main/section[2]/div[2]/div/div[3]/table/tbody/tr[1]/td[7]/div/button[1]")), 1000);
    await accept.click();
    await driver.sleep(10000);

    let confirmButton = await driver.wait(until.elementLocated(By.css('.react-confirm-alert-button-group > button:nth-child(1)')), 100000);
    await confirmButton.click();
    await driver.sleep(1000); // Wait for 1 second

    let notificationButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div/div/div')), 100000);
    let notificationText = await notificationButton.getText();
    console.log('Notification Text:', notificationText);

    // Optionally, you can assert the text of the notification
    if (notificationText.includes('Expense updated successfully')) {
        console.log('Notification captured successfully');
    } else {
        console.error('Failed to capture notification text correctly');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

approvalManagerTest();