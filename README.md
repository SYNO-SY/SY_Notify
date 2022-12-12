# SY_Notify

![noty](https://user-images.githubusercontent.com/89760730/207020650-3831987e-d646-400c-91b8-4185f9ac738d.PNG)

1. To display a notification you should call it like below:
   1. Using Client Side:
      exports['SY_Notify']:Alert("Title", "Message", Time, 'type')

   2. Using Server Side:
     TriggerClientEvent('SY_Notify:Alert', source, "Title", "Message", Time, 'type')


2. To set the notification display time, use:
   1. 1000 - `[1 second]`
   2. 2000 - `[2 seconds]`
   3. 5000 - `[5 seconds]`
   4. 10000 - `[10 seconds]`
   5. etc...

3. To change the type of notification, use this types of notifications:
   1. success
   2. info
   3. warning
   4. error

4. To change the icon of notification, use:
   1. Icon Library: https://fontawesome.com/v5/cheatsheet
   2. Open file `styles.css`
   3. Change this lines (only value!): `content: "\f00c";`

## IF YOU NEED TO ADD THIS NOTIFICATION AS DEFAULT IN ESX LEGACY ADD THE GIVEN CODE IN @es_extended/client/function.lua

```lua
   function ESX.ShowNotification(message, type, length)
      if GetResourceState("esx_notify") ~= "missing" then
         exports["esx_notify"]:Notify(type, length, message)
      else
         print("[^1ERROR^7] ^5ESX Notify^7 is Missing!")
      end
   end
```
replace it with
```lua
   function ESX.ShowNotification(message, type, length)
      if GetResourceState("SY_Notify") ~= "missing" then
         exports['SY_Notify']:Alert("NOTIFICATION", message, length, type)
      else
         print("[^1ERROR^7] ^5SY_NOTIFY^7 is Missing!")
      end
   end
```
