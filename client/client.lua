ESX = exports["es_extended"]:getSharedObject()

function Alert(title, message, time, messagetype)
    ESX.TriggerServerCallback('SY_Notify:getMeta', function(position)
        if type(messagetype) ~= "string" then
            messagetype = 'info'
        end
        if type(messagetype) ~= "string" then
            messagetype = 'info'
        end

        if type(time) ~= 'number' then
            time = 5000
        end

        SendNUIMessage({
            action = 'open',
            title = title,
            type = messagetype or 'info',
            message = message,
            time = time,
            position = position
        })
    end, position)
        
end
RegisterCommand(Config.Settingcommand, function()
    ESX.TriggerServerCallback('SY_Notify:getMeta', function(position)
        SetNuiFocus(true, true)
        SendNUIMessage({
        action = 'opensetting',
        position = position
    })
    end, position)
end)

RegisterNUICallback("close", function()
    SetNuiFocus(false, false)
    SendNUIMessage({ message = "hide" })
end)


RegisterNUICallback("notify-position", function(data)
    local position = data
    TriggerServerEvent('SY_Notify:setMeta',position )
end)

RegisterNetEvent('SY_Notify:Alert', Alert)

exports('Alert', Alert)



---[ EXAMPLE NOTIFY (command below code) ]---

--[[RegisterCommand('noty1', function()
    exports['SY_Notify']:Alert("SUCCESS", "This is TEST MSG", 7000, 'success')
end)
RegisterCommand('noty2', function()
    exports['SY_Notify']:Alert("INFORMATION", "This is TEST MSG", 5000, 'info')
end)
RegisterCommand('noty3', function()
    exports['SY_Notify']:Alert("ERROR", "This is TEST MSG", 5000, 'error')
end)
RegisterCommand('noty4', function()
    exports['SY_Notify']:Alert("WARNING", "This is TEST MSG", 5000, 'warning')
end)

RegisterCommand('test', function()
    exports['SY_Notify']:Alert("SUCCESS", "This is TEST sucess MSG", 5000, 'success')
    exports['SY_Notify']:Alert("INFORMATION", "This is TEST Info MSG", 5000, 'info')
    exports['SY_Notify']:Alert("ERROR", "This is TEST error MSG", 5000, 'error')
    exports['SY_Notify']:Alert("WARNING", "This is TEST warning MSG", 5000, 'warning')
    exports['SY_Notify']:Alert("ANNOUNCEMENT", "This is TEST announcement MSG", 5000, 'announcement') 
end)]]
