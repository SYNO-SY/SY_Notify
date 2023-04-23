fx_version 'adamant'

game 'gta5'

author '𝐒 𝐘 𝐍 𝐎#1760'
description 'SY_Notify'
version '1.0'

lua54 'yes'

ui_page 'html/ui.html'

client_scripts {
	'config.lua',
	'client/*.lua',
}
server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'config.lua',
	'server/*.lua',
}

files {
	'html/*.*'
}
