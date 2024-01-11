# EvsPS Rates
This simple javascript userscript allows users to quickly compare shipping rates between Ebay and Pirate Ship.

<details>
<summary>Show Video</summary>

 https://github.com/mrflipperscripter/evspsrates/assets/156295081/9048e614-76ea-4640-af9b-c9f2b73b2026

</details>

## Requirements:
- Install [Firefox](https://www.mozilla.org/en-US/firefox/new/ "Firefox") (May work on other [Violentmonkey](https://violentmonkey.github.io/get-it/ "Violentmonkey")/[Tampermonkey](https://www.tampermonkey.net/ "Tampermonkey") supported browsers)
- Install [Violentmonkey](https://violentmonkey.github.io/get-it/ "Violentmonkey") or [Tampermonkey](https://www.tampermonkey.net/ "Tampermonkey") (We prefer Violentmonkey so most testing was done with such)
- Install [EvsPS](https://github.com/mrflipperscripter/evspsrates/raw/main/evsps.user.js "EvsPS")

## Usage:
+ Make sure you're logged into [Pirate Ship](https://ship.pirateship.com/ "Pirate Ship").
+ Go to your Ebay's order [page](https://www.ebay.com/sh/ord "page") and click 'Purchase shipping label' for any item.
+ You'll see a new 'Check Pirate Ship' button on the page as well as a Polymailer checkbox.
  <img src="https://raw.githubusercontent.com/mrflipperscripter/evspsrates/main/assets/screenshot1.png " width="600">

+ Fill in your weight and dimensions as you normally would.
  + The 3rd dimension should be the smallest.
  + Make sure to fill out all 3 dimensions as to my knowledge UPS and Fedex require so.
  + Pirate Ship has a special deal with UPS and the 3rd dimension will be ignored when Polymailer is checked but again make sure it's filled out for proper UPS price comparision.
  + If you usually only use USPS the 3rd dimension can be ignored (Ebay still requires a value over 0).
+ Check the box if the item is being shipped in a Polymailer.
+ Click the 'Check Pirate Ship' button. 
+ Watch the automation commence.
  + Don't worry no label will be purchased. You still control this step to avoid any mishaps.
+ When the process is finished you will be alerted letting you know which provider and method is cheapest.
  + If Ebay is the cheapest you can click 'OK' and it will return you to the Ebay shipping page.
  <img src="https://raw.githubusercontent.com/mrflipperscripter/evspsrates/main/assets/screenshot2.jpg " width="600">

## Support: 
- <a href='https://ko-fi.com/G2G7T7GCV' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
- Head to my [Ko-Fi](https://ko-fi.com/mrflipperscripter "Ko-Fi") to support my coding journey, ask for help, request features, etc!
- I'm currently in the process of writing a fully automated open source / free cross listing tool (currently I've only got Poshmark and Depop working for Men's Clothing/Shoes!
-
  <details>
  <summary>Show Video</summary>
  
  https://github.com/mrflipperscripter/evspsrates/assets/156295081/80c8eedd-b8dc-4866-b227-57cf67a904a9

  </details>

- Thanks for installing either way! I'm a former full-time reseller hoping to earn a living off coding. I'm very fresh to coding so most of what I write is just learning from failure and to better understand the code.
