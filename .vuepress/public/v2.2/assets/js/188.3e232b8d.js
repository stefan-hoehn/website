(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{431:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("This binding allows openHAB to be integrated "),a("a",{attrs:{href:"https://www.rwe-smarthome.de/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RWE SmartHome"),a("OutboundLink")],1),t._v(" software previous to version 2.0. It uses an unofficial interface, which is limited in some cases, as explained below. As the interface has some delay and polling is needed to receive all changes from the RWE SmartHome Central (SHC), it may take one or two seconds until a device finally responds. However, this is tolerable in most cases as time critical rules can be done in the RWE Smarthome Central itself.")]),t._m(1),a("ol",[t._m(2),a("li",[t._v("This binding is based on an unofficial interface, which may be changed or even closed by RWE at any time.")]),a("li",[t._v("The binding only runs with TLSv1, which is default until Java 1.7. If you use Java 1.8, you have to add "),a("code",[t._v("-Djdk.tls.client.protocols=TLSv1")]),t._v(" to the "),a("code",[t._v("java")]),t._v(" command in your "),a("a",{attrs:{href:"http://start.sh/start.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("start.sh/start.bat"),a("OutboundLink")],1),t._v(" file.  In openHAB 2, the "),a("code",[t._v("java")]),t._v(" command is somewhere at the end of "),a("code",[t._v("runtime/karaf/bin/karaf")]),t._v(".")])]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),a("p",[t._v("All items use the format")]),t._m(10),t._m(11),t._m(12),a("p",[t._v("The following parameters are available:")]),t._m(13),a("p",[t._v("Supported (confirmed) devices and corresponding parameters are:")]),t._m(14),a("p",[t._v("Unconfirmed but probably supported devices and corresponding parameters are (please report and confirm, if you own one of the following devices and they are working):")]),t._m(15),t._m(16),a("p",[t._v("Replace the example-id with the IDs of your devices. You can find the ID of your devices in the openHAB log file or console when the RWE Smarthome binding starts.")]),a("p",[t._v("items/rwesmarthomedemo.items")]),t._m(17),t._m(18),a("p",[t._v('Some devices like a simple pushbutton (e.g. "Wandsender WSC2") or a motion detector are not sent over the interface and thus not directly reachable by the binding. However, there are workarounds based on variables and RWE profiles, which allow using even those devices with openHAB.')]),a("p",[t._v("The general idea is to exchange the state of a device via a variable. To do this, you have to create a variable in the RWE software and change the state of the variable by an RWE event profile. As the variable state is sent to OpenHAB, you can use an openHAB rule to react.")]),t._m(19),t._m(20),a("p",[t._v("Works with the following devices:")]),t._m(21),t._m(22),t._m(23),t._m(24),a("p",[t._v("Works with the following devices:")]),t._m(25),a("p",[t._v("The solution is mainly the same as for pushbuttons (see above). Simply set the auto-off-time in the RWE profile to a longer period, e.g. 1 minute. Now the variable is on, when a motion occurs until there is no motion any more for about a minute.")]),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"rwe-smarthome-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rwe-smarthome-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" RWE SmartHome Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v('This binding only works with the "old" RWE SmartHome software and '),e("strong",[this._v("will NOT WORK anymore with the RWE 2.0 Software (released on 01.09.2016)")]),this._v(". Do not update your RWE Software if you still like to use this binding!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Warning:")]),this._v(" Using TLSv1 as mentioned above can cause troubles for other bindings that rely on a newer TLS version.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/rwesmarthome.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("host")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("IP address of the RWE SmartHome server")])]),a("tr",[a("td",[t._v("username")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("user name for the RWE SmartHome server")])]),a("tr",[a("td",[t._v("password")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("password for the RWE SmartHome server")])]),a("tr",[a("td",[t._v("alive.interval")]),a("td",[t._v("300")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("interval in seconds to check if the communication with the RWE SmartHome server is still alive.  If no message receives from the RWE Smarthome server, the binding restarts.")])]),a("tr",[a("td",[t._v("binding.changed.interval")]),a("td",[t._v("15")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("interval in seconds to wait after the binding configuration has changed before the device states will be reloaded from the RWE SHC.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("host=192.168.0.2\nusername=myuser\npassword=mysecretpassword\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('rwe="id=<logical-device-id>,param=<parameter>"}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("<logical-device-id>")]),this._v(" is a unique number for each logical device (e.g. "),e("code",[this._v("2951a048-1d21-5caf-d866-b63bc00280f4")]),this._v(") and "),e("code",[this._v("<parameter>")]),this._v(" is the desired parameter of the device. A thermostat for example has a 'settemperature' and a 'operationmodeauto' to choose from.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As the IDs are internal numbers and not visible in the RWE software, the binding "),e("strong",[this._v("outputs a list of found devices including the supported parameters to the openHAB console/logfile")]),this._v(". For the ease of use and a quick startup, it even outputs an example item-config for each item, which can easily be copied into the *.items config file.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Item Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("contact")]),a("td",[t._v("Contact")]),a("td",[t._v("Window/Door contact")])]),a("tr",[a("td",[t._v("temperature")]),a("td",[t._v("Number")]),a("td",[t._v("Temperature sensor")])]),a("tr",[a("td",[t._v("settemperature")]),a("td",[t._v("Number")]),a("td",[t._v("Desired temperature of a thermostat")])]),a("tr",[a("td",[t._v("operationmodeauto")]),a("td",[t._v("Switch")]),a("td",[t._v("Operationmode of a thermostat")])]),a("tr",[a("td",[t._v("humidity")]),a("td",[t._v("Number")]),a("td",[t._v("Humidity sensor")])]),a("tr",[a("td",[t._v("luminance")]),a("td",[t._v("Number")]),a("td",[t._v("Luminance sensor")])]),a("tr",[a("td",[t._v("switch")]),a("td",[t._v("Switch")]),a("td",[t._v("Switch state, e.g. wall plug")])]),a("tr",[a("td",[t._v("dimmer")]),a("td",[t._v("Dimmer")]),a("td",[t._v("Dimmer")])]),a("tr",[a("td",[t._v("dimmerinverted")]),a("td",[t._v("Dimmer")]),a("td",[t._v("Dimmer with inverted values")])]),a("tr",[a("td",[t._v("rollershutter")]),a("td",[t._v("Rollershutter")]),a("td",[t._v("Rollershutter")])]),a("tr",[a("td",[t._v("rollershutterinverted")]),a("td",[t._v("Rollershutter")]),a("td",[t._v("Rollershutter with inverted values, recommended!")])]),a("tr",[a("td",[t._v("smokedetector")]),a("td",[t._v("String")]),a("td",[t._v("State of a smokedetector")])]),a("tr",[a("td",[t._v("alarm")]),a("td",[t._v("Switch")]),a("td",[t._v("Siren of a smokedetector")])]),a("tr",[a("td",[t._v("variable")]),a("td",[t._v("Switch")]),a("td",[t._v("Variable as defined in SHC")])]),a("tr",[a("td",[t._v("totalenergy")]),a("td",[t._v("Number")]),a("td",[t._v("Total energy consumption in kWh of a PowerControl/EnergyControl (since 1.9.0)")])]),a("tr",[a("td",[t._v("energypermonthinkwh")]),a("td",[t._v("Number")]),a("td",[t._v("energy consumption per month in kWh of a PowerControl/EnergyControl (since 1.9.0)")])]),a("tr",[a("td",[t._v("energypermonthineuro")]),a("td",[t._v("Number")]),a("td",[t._v("energy consumption in EUR of a PowerControl/EnergyControl (since 1.9.0)")])]),a("tr",[a("td",[t._v("energyperdayinkwh")]),a("td",[t._v("Number")]),a("td",[t._v("energy consumption per day in kWh of a PowerControl/EnergyControl (since 1.9.0)")])]),a("tr",[a("td",[t._v("energyperdayineuro")]),a("td",[t._v("Number")]),a("td",[t._v("energy consumption in EUR of a PowerControl/EnergyControl (since 1.9.0)")])]),a("tr",[a("td",[t._v("powerinwatt")]),a("td",[t._v("Number")]),a("td",[t._v("current power consumption in Watts of a PowerControl/EnergyControl (since 1.9.0)")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("RWE SmartHome Bewegungsmelder innen (WMD): luminance only, movement only via variable, see examples.")]),a("li",[t._v("RWE SmartHome Heizkörperthermostat (RST): temperature, settemperature, operationmodeauto, humidity")]),a("li",[t._v("RWE SmartHome Rauchmelder (WSD): smokedetector, alarm")]),a("li",[t._v("RWE SmartHome Tür-/Fenstersensor (WDS): contact")]),a("li",[t._v("RWE SmartHome Unterputz-Dimmer (ISD2): dimmer, dimmerinverted")]),a("li",[t._v("RWE SmartHome Unterputz-Lichtschalter (ISS2): switch")]),a("li",[t._v("RWE SmartHome Unterputz-Rollladensteuerung (ISR2): rollershutter, rollershutterinverted")]),a("li",[t._v("RWE SmartHome Wandsender (WSC2): only indirect via variable, see examples.")]),a("li",[t._v("RWE SmartHome Zwischenstecker (PSS): switch")]),a("li",[t._v("RWE SmartHome Zwischenstecker aussen (PSSOz): switch")]),a("li",[t._v("RWE SmartHome Zwischenstecker dimmbar (PSD): dimmer, dimmerinverted")]),a("li",[t._v("RWE SmartHome Power Control (since 1.9.0): totalenergy, energypermonthinkwh, energypermonthineuro, energyperdayinkwh, energyperdayineuro, powerinwatt")]),a("li",[t._v("RWE SmartHome Power Control Solar (since 1.9.0): totalenergy, energypermonthinkwh, energypermonthineuro, energyperdayinkwh, energyperdayineuro, powerinwatt")]),a("li",[t._v("RWE SmartHome Energy Control (since 1.9.0): totalenergy, energypermonthinkwh, energypermonthineuro, energyperdayinkwh, energyperdayineuro, powerinwatt")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("RWE SmartHome Bewegungsmelder aussen (WMDO): luminance only, movement only via variable, see examples")]),e("li",[this._v("RWE SmartHome Fernbedienung (BRC8): only indirect via variable, see examples")]),e("li",[this._v("RWE SmartHome Raumthermostat (WRT): temperature, settemperature, operationmodeauto, humidity")]),e("li",[this._v("RWE SmartHome Unterputz-Sender (ISC2): only indirect via variable, see examples")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweContact")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Window livingroom [MAP(de.map):%s]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <contact>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=contact"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweHumidity")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Humidity livingroom [%.1f %%]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=humidity"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweLuminance")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Luminance corridor [%d %%]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <slider>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=luminance"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweSettemp")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Settemp living [%.1f °C]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=settemperature"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweTemp")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Temp living [%.1f °C]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=temperature"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweAlarm")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Alarm corridor"')]),a("span",{attrs:{class:"token function"}},[t._v(" <siren>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=alarm"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweSettempOpMode")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Settemp living auto"')]),a("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=operationmodeauto"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweSmokeDetector")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Smokedetector corridor"')]),a("span",{attrs:{class:"token function"}},[t._v(" <fire>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=smokedetector"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweSwitch")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Light corridor"')]),a("span",{attrs:{class:"token function"}},[t._v(" <switch>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=switch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweVariable")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Variable TEST"')]),a("span",{attrs:{class:"token function"}},[t._v(" <switch>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=variable"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweRollershutter")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Rollershutter living [%d %%]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <rollershutter>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=rollershutterinverted"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweDimmer")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Light [%d %%]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <slider>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=dimmer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweEnergyConsumptionTotal")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"EnergyConsumption total [%.3f kWh]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <energy>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=totalenergy"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweEnergyConsumptionMonthKWh")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"EnergyConsumption per month [%.3f kWh]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <energy>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=energypermonthinkwh"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweEnergyConsumptionMonthEuro")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"EnergyConsumption per month [%.2f €]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <energy>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=energypermonthineuro"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweEnergyConsumptionDayKWh")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"EnergyConsumption per day [%.3f kWh]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <energy>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=energyperdayinkwh"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rweEnergyConsumptionDayEuro")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"EnergyConsumption per day [%.2f €]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <energy>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=energyperdayineuro"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rwePowerConsumption")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PowerConsumption [%.2f W]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <energy>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rwe"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"id=2951a048-1d21-5caf-d866-b63bc00280f4,param=powerinwatt"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"solutions-examples-for-not-directly-supported-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solutions-examples-for-not-directly-supported-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Solutions/examples for not directly supported devices")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" Because of the delay of the interface it is not recommended to use this solution for time critical applications like switching your lights on when you press the button next to the door. You should implement time critical rules directly in the RWE software and use OpenHAB for the more sophisticated things. 😉")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"workarround-for-pushbuttons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workarround-for-pushbuttons","aria-hidden":"true"}},[this._v("#")]),this._v(" Workarround for pushbuttons")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("RWE SmartHome Wandsender (WSC2)")]),e("li",[this._v("RWE SmartHome Unterputz-Sender (ISC2)")]),e("li",[this._v("RWE SmartHome Fernbedienung (BRC8)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v('Create a variable for each button, e.g. "SwitchLivingBtn1" and so on.')]),e("li",[this._v('Create an event profile in the RWE software: if the upper button of the device is pushed, set variable "SwitchLivingBtn1" to ON for one second (activate the automatic switch-off after one second).')]),e("li",[this._v("Create an OpenHAB item for the variable: "),e("code",[this._v('Switch rweSwitchLivingBtn1 "Switch Btn1" <switch> {rwe="id=2951a048-1d21-5caf-d866-b63bc00280f4,param=variable"}')]),this._v(' (use the id of your specific variable "SwitchLivingBtn1", which you can find in the openhab.log at startup of the binding.')]),e("li",[this._v("Create an OpenHAB rule to react:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Toggle TV if button 1 is pressed"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" rweSwitchLivingBtn1 "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function-name"}},[t._v("TV")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TV"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t\t"),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TV"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\t\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"workaround-for-motiondetectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workaround-for-motiondetectors","aria-hidden":"true"}},[this._v("#")]),this._v(" Workaround for motiondetectors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("RWE SmartHome Bewegungsmelder innen (WMD)")]),e("li",[this._v("RWE SmartHome Bewegungsmelder aussen (WMDO)")])])}],!1,null,null,null);e.default=n.exports}}]);