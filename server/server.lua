
ESX = nil
ESX = exports["es_extended"]:getSharedObject()

RegisterNetEvent('SY_Notify:setMeta')
AddEventHandler('SY_Notify:setMeta', function(positiondata)
    local xPlayer = ESX.GetPlayerFromId(source)
    MySQL.query('SELECT * FROM sy_notify WHERE identifier = ?', {xPlayer.identifier}, function(result)
        if result[1] ~= nil then
            MySQL.update('UPDATE sy_notify SET  position = ? WHERE identifier = ?', {positiondata, xPlayer.identifier},
                function()
                end)
        else
            MySQL.insert('INSERT INTO sy_notify (identifier, position) VALUES (?, ?)',
                {xPlayer.identifier, positiondata}, function()
                end)
        end
    end)
end)

ESX.RegisterServerCallback('SY_Notify:getMeta', function(src, cb)
    local xPlayer = ESX.GetPlayerFromId(src)
    local result = MySQL.query.await('SELECT * FROM sy_notify WHERE identifier = ?', {xPlayer.identifier})
    if result[1] ~= nil then
        for i = 1, #result do
            local row = result[i]
            position = row.position
        end
    else
        position = Config.Defaultposition
    end
    cb(position)
end)
