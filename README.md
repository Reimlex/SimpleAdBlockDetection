# SimpleAdBlockDetection
This is a simple script designed to detect ad blocking by the user.

![Screenshot](https://i.ibb.co/yXdzxNT/Simple-Ad-Block-Detection.png)

## Configuration
| Option              | Type    | Description  |
| ------------------- |:-------:| ------ |
| isBlocking          | Boolean | Checking ad blocking |
| isBlockingGoogleAds | Boolean | Google ad network blocking check |

## Usage
Add the following code to your HTML page between the head tags:

```html
<script type="text/javascript" src="/sabd.js"></script>
```

Add below code in the body of the HTML page:

```html
<div id="sabd"></div>  <!-- Required for isBlocking() -->
<script type="text/javascript">
    window.onload = function () {
        if(isBlocking()){
            //Ads blocked
        }else{
            //Ads are not blocked
        }
        if(isBlockingGoogleAds()){
            //Ads blocked
        }else{
            //Ads are not blocked
        }
    };
</script>
```
