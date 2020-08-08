# 使用谷歌浏览器调试手机网页

> 方式1：控制台使用手机模拟器

> 方式2：这种方法仅供特殊情况下使用，因为重启Chrome将不能恢复正常User-Agent(需要将全部打开的chrome窗口关闭，再打开才能起作用)

- 模拟谷歌Android：

```javascript

    chrome.exe --user-agent="Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) App

``` 

- 模拟苹果iPhone：

```javascript

    chrome.exe --user-agent="Mozilla/5.0 (iPad; U; CPU OS 3_2_2 like Mac OS X; en-us) AppleWebKit/

``` 
