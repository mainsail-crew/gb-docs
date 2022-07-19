# Custom CSS

The `custom.css` file allows you to customize the appearance of Mainsail without the need of rebuilding it. Place a file named `custom.css` in the `.theme` folder of your Mainsail installation and define your custom Cascading Style Sheets (CSS) rules inside the file.

![](../../../.gitbook/assets/screenshot-custom-css.png)

![](../../../.gitbook/assets/screenshot-custom-css-example-result.png)

## Customizing the CSS <a href="#customizing-the-css" id="customizing-the-css"></a>

You need to be familiar with the CSS syntax to customize Mainsail. There are many resources available to learn CSS online, for example: [W3Schools - CSS tutorial](https://www.w3schools.com/css/default.asp)

### &#x20;Finding the Element to Customize <a href="#finding-the-element-to-customize" id="finding-the-element-to-customize"></a>

You will need to use your browser’s built in developer tools to find the element you want to customize. You can do this by clicking the “Developer Tools” button in the browser’s toolbar or by right clicking on the page and choosing `Inspect Element` or press `F12`.

![](../../../.gitbook/assets/screenshot-custom-css-inspect.png)



1. Activate the developer tools and inspector
2. Select the desired element
3. Find the selector
4. Use the style editor to customize the element. Play around to find the style you like!

![](../../../.gitbook/assets/screenshot-custom-css-find-element.png)

![](../../../.gitbook/assets/screenshot-custom-css-fiddle.png)

When you have achieved your desired appearance, copy the full “section”, including the selector and curly braces.

![](../../../.gitbook/assets/screenshot-custom-css-fiddle-2.png)

Next copy it inside the “custom.css” file (you can keep everything or only what you have added)

![](../../../.gitbook/assets/screenshot-custom-css-example.png)

{% hint style="info" %}
NOTE: After saving, your browser may need a uncached reload to show the change. Visit [Wikipedia to learn how.](https://en.wikipedia.org/wiki/Wikipedia:Bypass\_your\_cache#Bypassing\_cache)
{% endhint %}
