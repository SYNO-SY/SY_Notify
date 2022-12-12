
function Alert(title, message, time, messagetype)
	if type(messagetype) ~= "string" then
		messagetype = 'info'
	end
	
	if type(time) ~= 'number' then
		time = 5000
	end

	SendNUIMessage({
		action = 'open',
		title = title,
		type = messagetype or 'info' ,
		message = message,
		time = time,
	})
end

RegisterNetEvent('SY_Notify:Alert')
AddEventHandler('SY_Notify:Alert', function(title, message, time, type)
	Alert(title, message, time, type)
end)

---[ EXAMPLE ]---
--[[RegisterCommand('noty', function()
	exports['SY_Notify']:Alert("SUCCESS", "You have widthdrawn 100$", 5000, 'success')
	exports['SY_Notify']:Alert("INFORMATION", "You have widthdrawn 100$", 5000, 'info')
	exports['SY_Notify']:Alert("ERROR", "You have widthdrawn 100$", 5000, 'error')
	exports['SY_Notify']:Alert("WARNING", "You have widthdrawn 100$", 5000, 'warning')
end)]]
