fx_version  'adamant'
use_experimental_fxv2_oal 'yes'
lua54       'yes'
game        'gta5'

name        'SY_NOTIFY'
author      '𝐒 𝐘 𝐍 𝐎#1760'
version     '2.2'
license     'GNU General Public License v3.0'
repository  'https://github.com/SYNO-SY/SY_Notify'
description 'A Fivem Advanced Notification System'

ui_page 'ui/ui.html'

shared_scripts {
    'config.lua',
}

client_scripts {
	'client/*.lua',
}
server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'server/*.lua',
}

files {
	'ui/*.*'
}
