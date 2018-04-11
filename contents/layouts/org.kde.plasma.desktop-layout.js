var plasma = getApiVersion(1)

var activityId = activityIds[0]

var activity = desktopById(activityId)
//Remove desktop toolbox
activity.currentConfigGroup = ["General"]
activity.writeConfig("showToolbox", false)


//Create top panel
panel = new plasma.Panel
panel.location = "top"
panel.alignment = "left"
panel.height = gridUnit * 2

//Add widgets to the top panel

var spacer = panel.addWidget("org.kde.plasma.panelspacer")
//Make first spacer non expandable by default
spacer.currentConfigGroup = ["Configuration", "General"]
spacer.writeConfig("expanding", false)

//Kickerdash
panel.addWidget("org.kde.plasma.appmenu")
//Spacer
panel.addWidget("org.kde.plasma.panelspacer")
//System tray
panel.addWidget("org.kde.plasma.systemtray")
//Clock
panel.addWidget("org.kde.plasma.digitalclock")

//USwitch https://store.kde.org/p/1194339/
var uswitcher= panel.addWidget("org.kde.plasma.uswitcher")
uswitcher.currentConfigGroup = ["Configuration", "General"]
uswitcher.writeConfig("showName", false)
uswitcher.writeConfig("showSett", true)


//Create left panel
 
var leftpanel = new plasma.Panel
leftpanel.location = "left"
leftpanel.height = gridUnit * 3.2
leftpanel.offset=panel.height

//Add widgets to the left panel
var menu = leftpanel.addWidget("org.kde.plasma.kickerdash")
//Add default shortcut to the kickerdash menu
menu.currentConfigGroup = ["Shortcuts"]
menu.writeConfig("global", "Alt+F1")
//Icontasks
leftpanel.addWidget("org.kde.plasma.icontasks")
//Present Windows Button https://store.kde.org/p/1181039/
var windows = leftpanel.addWidget("com.github.zren.presentwindows")
//Toggle desktop grid
windows.currentConfigGroup = ["Configuration", "General"]
windows.writeConfig("clickCommand","ShowDesktopGrid")
//Trash
leftpanel.addWidget("org.kde.plasma.trash")
