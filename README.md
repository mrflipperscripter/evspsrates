# EvsPS Rates
This simple javascript userscript allows users to quickly compare shipping rates between Ebay and Pirate Ship.

## Requirements:
- Install [Firefox](https://www.mozilla.org/en-US/firefox/new/ "Firefox") (May work on other [Violentmonkey](https://violentmonkey.github.io/get-it/ "Violentmonkey")/[Tampermonkey](https://www.tampermonkey.net/ "Tampermonkey") supported browsers)
- Install [Violentmonkey](https://violentmonkey.github.io/get-it/ "Violentmonkey") or [Tampermonkey](https://www.tampermonkey.net/ "Tampermonkey") (We prefer Violentmonkey so most testing was done with such)
- Install [EvsPS](https://github.com/mrflipperscripter/evspsrates/raw/main/evsps.user.js "EvsPS")

## Usage:
+ Make sure you're logged into [Pirate Ship](https://ship.pirateship.com/ "Pirate Ship").
+ Go to your Ebay's order [page](https://www.ebay.com/sh/ord "page") and click 'Purchase shipping label' for any item.
+ You'll see a new 'Check Pirate Ship' button on the page as well as a Polymailer checkbox.
+ Fill in your weight and dimensions as you normally would.
  + The 3rd dimension should be the smallest.
  + Make sure to fill out all 3 dimensions as to my knowledge UPS and Fedex require so.
  + Pirate Ship has a special deal with UPS and the 3rd dimension will be ignored when Polymailer is checked but again make sure it's filled out for proper UPS price comparision.
  + If you usually only use USPS the 3rd dimension can be ignored (Ebay still requires a value over 0).
+ Check the box if the item is being shipped in a Polymailer.
+ Click the 'Check Pirate Ship' button. 
+ Watch the automation commence.
  + Don't worry no label will purchased. You still control this step to avoid any mishaps.
