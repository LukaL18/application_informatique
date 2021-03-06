
// The Versatile Unit Converter, version 1.62
// Last change: November 2, 2016
// Written by C. Berthod, christophe.berthod@unige.ch

/////////////////////////////////////////////////////////////////////////
/////////////////////////////  DEFINITIONS  /////////////////////////////
/////////////////////////////////////////////////////////////////////////
function define(){

//
//  Constants (expressed in the international MKSA system)
//  ******************************************************
//
// ("var" declarations mark variables as local)

var c    =  299792458        // speed of light in vacuum
var GN   =  6.67408E-11      // Newton constant of gravitation
var h    =  6.626070040E-34  // Planck constant
var q    =  1.6021766208E-19 // elementary charge
var me   =  9.10938356E-31   // electron mass
var mmu  =  1.883531594E-28  // muon mass
var mn   =  1.674927471E-27  // neutron mass
var mp   =  1.672621898E-27  // proton mass
var u    =  1.660539040E-27  // atomic mass unit
var mue  = -928.4764620E-26  // electron magnetic moment
var mumu = -4.49044826E-26   // muon magnetic moment
var mun  = -0.96623650E-26   // neutron magnetic moment
var mup  =  1.4106067873E-26 // proton magnetic moment
var ge   = -2.00231930436182 // electron g-factor
var gmu  = -2.0023318418     // muon g-factor
var gn   = -3.82608545       // neutron g-factor
var gp   =  5.585694702      // proton g-factor
var R    =  8.3144598        // molar gaz constant
var Na   =  6.022140857E+23  // Avogadro constant

pi       = Math.PI; Pi=pi
alpha    = 4E-7*pi*c*Math.pow(q,2)/(2*h)  // fine structure constant
var Rinf = me*c*Math.pow(alpha,2)/(2*h)   // Rydberg constant

//
//  Definition of the units
//  ***********************
//
// Structure of the array "unit"
// -----------------------------
//
// unit[i][0]: symbol(s) of the unit; unit[i][0] = [symb1, symb2, ...]
// unit[i][1]: dimension of the unit; unit[i][1] = [rad, m, kg, s, A, K, cd, mol]
// unit[i][2]: SI value of the unit;  unit[i][2] = value
// unit[i][3]: infos on the unit;     unit[i][3] = [name, disp_value, disp_unit]
//
unit = new Array(0)

function defineUnit(dimension,symbol,value,infos)
{
  unit[unit.length]=new Array(symbol,dimension,value,infos)
}

// Numbers ("one" must be the first being defined)
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["one", "One"], 1, ["Number one", "1", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["%", "percent", "Percent"], 0.01, ["Percent", "1", "percent"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["alpha", "Alpha"], alpha, ["Fine structure constant", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["bit", "Bit", "bits", "Bits"], 1, ["Bit", "1", "bit"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["byte", "Byte", "bytes", "Bytes", "B"], 8, ["Byte", "8", "bits"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["ge"], ge, ["Electron g-factor", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["gmu"], gmu, ["Muon g-factor", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["gn"], gn, ["Neutron g-factor", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["gp"], gp, ["Proton g-factor", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["pi", "Pi"], pi, ["Number pi", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["ppb", "PPB"], 1E-9, ["Part per billion", "10^-9", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["ppm", "PPM"], 1E-6, ["Part per million", "10^-6", ""])
// Angle
defineUnit([ [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["arcmin", "arcminute", "'"], (2*pi)/360/60, ["Arc-minute", "1/60", "degree"])
defineUnit([ [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["arcsec", "arcsecond", "''"], (2*pi)/360/3600, ["Arc-second", "1/3600", "degree"])
defineUnit([ [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["deg", "degree", "Degree", "degrees", "Degrees"], (2*pi)/360, ["Degree", "2*Pi/360", "radian"])
defineUnit([ [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["grad", "grade", "grd"], (2*pi)/400, ["Grad", "2*Pi/400", "radian"])
defineUnit([ [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["rad", "radian", "Radian", "radians", "Radians"], 1, ["Radian", "1", "radian"])
// Length
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["a0", "Bohr", "bohr"], alpha/(4*pi*Rinf), ["Bohr radius", "", "Angstrom"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Am", "angstrom", "Angstrom"], 1E-10, ["&Aring;ngstr&ouml;m", "10^-10", "meter"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["AU", "au", "ua"], 1.49597870E+11, ["Astronomical unit", "", "meters"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Fm", "fm", "Fermi", "fermi"], 1E-15, ["Fermi", "1", "femtometer"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["ft", "foot", "Foot", "feet", "Feet"], 1200/3937, ["Foot", "1200/3937", "meter"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["fth", "fath", "fathom"], 6*1200/3937, ["Fathom", "6", "feet"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["fur", "furlong", "furlongs"], 220*3*1200/3937, ["Furlong", "220", "yard"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["in", "inch"], 100/3937, ["Inch", "1/12", "Foot"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lambdaCe"], h/(me*c), ["Electron Compton wavelength", "h/(m<SUB>electron</SUB>c)", "&nbsp;&nbsp;[&nbsp;2426.3 Fermi&nbsp;]"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lambdaCmu"], h/(mmu*c), ["Muon Compton wavelength", "h/(m<SUB>muon</SUB>c)", "&nbsp;&nbsp;[&nbsp;11.734 Fermi&nbsp;]"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lambdaCn"], h/(mn*c), ["Neutron Compton wavelength", "h/(m<SUB>neutron</SUB>c)", "&nbsp;&nbsp;[&nbsp;1.3196 Fermi&nbsp;]"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lambdaCp"], h/(mp*c), ["Proton Compton wavelength", "h/(m<SUB>proton</SUB>c)", "&nbsp;&nbsp;[&nbsp;1.3214 Fermi&nbsp;]"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lP"], Math.pow(h/(2*pi)*GN/Math.pow(c,3),0.5), ["Planck length", "", ""])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lr"], h/(2*pi)/(me*c), ["Length unit in the relativistic system", "", ""])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["ly"], 9.46089521E+15, ["Light year", "", "meters"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["m", "meter", "Meter", "meters", "Meters"], 1, ["Meter", "1", "meter"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mi", "mile", "Mile", "miles", "Miles"], 5280*1200/3937, ["Statute mile", "5280", "feet"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["micron", "Micron"], 1E-6, ["Micron", "10^-6", "meter"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["nmi", "naut", "NM"], 1852, ["International nautical mile", "1852", "meters"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["pc", "psc", "parsec"], 206264.8*1.49597870E+11, ["Parsec", "206264.8", "AU"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["re"], Math.pow(alpha,3)/(4*pi*Rinf), ["Classical electron radius", "", "Fermi"])
defineUnit([ [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["yd", "yard"], 3*1200/3937, ["Yard", "3", "feet"])
// Mass
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["ct", "carat"], 2E-4, ["Metrical carat", "200", "milligrams"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["fir", "firkin", "firkins"], 90*0.45359237, ["Firkin", "90", "pounds"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["g", "gram", "Gram", "grams", "Grams"], 0.001, ["Gram", "10^-3", "kilogram"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["gr", "grain", "grains", "Grain", "Grains"], 0.45359237/7000, ["Grain", "1/7000", "pound"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["kg", "kilogram"], 1, ["Kilogram", "1", "kilogram"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lb", "lbs", "lbm", "lbsm", "#", "pound", "pounds"], 0.45359237, ["Pound", "453.59237", "grams"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["MA"], Math.pow(h/(2*pi),2)/q*1E20, ["Mass unit in the Angstrom-eV system", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["me", "electron"], me, ["Electron mass", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mmu", "muon"], mmu, ["Muon mass", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mn", "neutron"], mn, ["Neutron mass", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mp", "proton"], mp, ["Proton mass", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mP"], Math.pow(h/(2*pi)*c/GN,0.5), ["Planck mass", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["oz", "ounce"], 0.45359237/16, ["Avoirdupois ounce", "1/16", "pound"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["slug", "Slug", "slugs", "Slugs"], 0.45359237*9.80665/1200*3937, ["Slug", "1", "lbf s^2/foot"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["st", "stone"], 14*0.45359237, ["Stone", "14", "pounds"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Sun"], 1.9891E30, ["Solar mass", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["t", "tonne", "tonnes"], 1000, ["Ton", "1000", "kilograms"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["t.long"], 2240*0.45359237, ["Long ton", "2240", "pounds"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["t.short"], 2000*0.45359237, ["Short ton", "2000", "pounds"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["tlb", "lbt", "lb.t"], 5.760*0.06479891, ["Troy pound", "", ""])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["toz", "ozt", "oz.t"], 5.760*0.06479891/12, ["Troy ounce", "1/12", "troy pound"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["u", "amu", "dalton", "Da"], u, ["Atomic mass unit", "", ""])
// Time
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["day", "days", "Day", "Days"], 24*3600, ["Day", "24", "hours"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["for", "forthight", "forthights"], 14*24*3600, ["Fortnight", "14", "days"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["hr", "hour", "hours", "Hour", "Hours"], 3600, ["Hour", "60", "minutes"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["min", "minute", "minutes", "Minute", "Minutes"], 60, ["Minute", "60", "seconds"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["month", "Month"], 365*24*3600/12, ["Month", "1/12", "year"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["s", "sec", "second", "seconds", "Second", "Seconds"], 1, ["Second", "1", "second"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["s.year"], 365.25636*24*3600, ["Sideral year", "365.25636", "days"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["t0"], Math.pow(h/(2*pi),3)/me/Math.pow(c*q,4)*1E+14, ["Time unit in the atomic units system", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["tA"], h/(2*pi)/q, ["Time unit in the Angstrom-eV system", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["tP"], Math.pow(h/(2*pi)*GN/Math.pow(c,5),0.5), ["Planck time", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["tr"], h/(2*pi)/(me*Math.pow(c,2)), ["Time unit in the relativistic system", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["week", "weeks", "Week", "Weeks"], 7*24*3600, ["Week", "7", "days"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["year", "years", "Year", "Years"], 365*24*3600, ["Year", "365", "days"])
// Electric current
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["A", "amp", "Ampere", "ampere", "Amperes", "amperes"], 1, ["Amp&egrave;re", "1", "Ampere"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["Bi", "Biot", "biot"], 10, ["Biot", "10", "Ampere"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["Gi", "Gilbert", "gilbert"], 10/(4*pi), ["Gilbert", "1/(4*Pi)", "Biot"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["I0"], me/Math.pow(h/(2*pi),3)*Math.pow(c*q,4)*q*1E-14, ["Current unit in the atomic units", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["IA"], Math.pow(q,2)*(2*pi)/h, ["Current unit in the Angstrom-eV system", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["IP"], q*Math.pow(Math.pow(c,5)/h*(2*pi)/GN,0.5), ["Current unit in the Planck system", "", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["Ir"], me*Math.pow(c,2)*q/(h/(2*pi)), ["Current unit in the relativistic system", "", ""])
// Temperature
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1]], ["K", "Kelvin", "kelvin"], 1, ["Kelvin", "1", "Kelvin"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1]], ["oR", "Ra", "Rankine", "rankine"], 5/9, ["Rankine", "5/9", "Kelvin"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1]], ["oC", "Celsius", "celsius", "Centigrade", "centigrade"], 1, ["Celsius", "1", "Kelvin&nbsp;&nbsp;[&nbsp;-273.15&nbsp;]"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1]], ["oF", "Fahrenheit", "fahrenheit"], 5/9, ["Fahrenheit", "5/9", "Kelvin&nbsp;&nbsp;[&nbsp;-459.67&nbsp;]"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1]], ["T_P"], Math.pow(h/(2*pi)*Math.pow(c,5)/GN,0.5)/R*Na, ["Planck temperature", "", "Kelvin"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1]], ["TA"], q/R*Na, ["Temperature unit in the Angstrom-eV system", "", ""])
// Luminous intensity
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1]], ["cd", "candela", "candelas"], 1, ["Candela", "1", "candela"])
// Quantity of matter
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1]], ["mol", "Mole", "mole", "Moles", "moles"], 1, ["Mole", "1", "Mole"])
// Solid angle
defineUnit([ [2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["sterad", "steradian", "Steradian", "steradians", "Steradians"], 1, ["Steradian", "1", "Radian^2"])
// Inverse Length
defineUnit([ [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["d", "dpt", "diopter", "dioptre"], 1, ["Diopter", "1", "Meter^-1"])
defineUnit([ [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Rinf"], Rinf, ["Rydberg constant", "", ""])
// Area
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["acre", "ac", "acres"], 43560*Math.pow(1200/3937,2), ["Acre", "43560", "feet^2"])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["are", "a", "ares"], 100, ["Are", "100",  ""])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["b", "barn", "barns"], 1E-28, ["Barn", "10^-28",  ""])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["sigmae"], 1/(6*pi)*Math.pow(alpha,6)/Math.pow(Rinf,2), ["Electron Thomson cross section", "", ""])
// Volume
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["bbl", "bo", "barrel", "barrels"], 42*231*Math.pow(100/3937,3), ["US barrel", "42", "USgallon"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["cup"], 231*Math.pow(100/3937,3)/16, ["Cup", "1/2", "US pint"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["l", "liter", "Liter", "liters", "Liters", "ltr"], 0.001, ["Liter", "1", "liter"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["UKfloz"], 4.54609E-3/8/20, ["Imperial fluid ounce", "1/20", "Imperial pint"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["UKgl", "UKgal", "UKgallon"], 4.54609E-3, ["Imperial gallon", "", "liters"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["UKpt", "UKpint"], 4.54609E-3/8, ["Imperial pint", "1/8", "Imperial gallon"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["UKqt", "UKquart"], 4.54609E-3/4, ["Imperial quart", "1/4", "Imperial gallon"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["USfloz", "floz"], 231*Math.pow(100/3937,3)/8/16, ["US fluid ounce", "1/16", "US pint"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["USgl", "USgal", "USgallon", "gallon", "gallons"], 231*Math.pow(100/3937,3), ["US gallon", "231", "inch^3"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["USpt", "USpint", "pint"], 231*Math.pow(100/3937,3)/8, ["US pint", "1/8", "US gallon"])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["USqt", "USquart", "qt", "quart"], 231*Math.pow(100/3937,3)/4, ["US quart", "1/4", "US gallon"])
// Fuel consumption
defineUnit([ [0, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["kpl"], 1000000, ["Kilometer per liter", "1", "km/l"])
defineUnit([ [0, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mpg"], 5280*1200/3937/4.54609E-3, ["Mile per gallon (UK)", "1", "mile/UKgallon"])
// Frequency
defineUnit([ [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["bps"], 1, ["Bit per second", "1", "bit/sec"])
defineUnit([ [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Bq", "Becquerel"], 1, ["Becquerel", "1", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Ci", "Curie", "curie"], 3.7E+10, ["Curie", "37", "GigaBecquerel"])
defineUnit([ [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["dpm"], 1/60, ["Disintegration per minute", "1/60", "Becquerel"])
defineUnit([ [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Hz", "Hertz", "hertz"], 1, ["Hertz", "1", ""])
defineUnit([ [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Ru", "Rutherford", "rutherford"], 1E+6, ["Rutherford", "1", "MegaBecquerel"])
// Velocity
defineUnit([ [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["c"], c, ["Speed of light in vacuum", "", "m/s"])
defineUnit([ [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["kn", "kt", "knot"], 1852/3600, ["Nautical mile per hour", "1", "naut/hour"])
defineUnit([ [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["kph"], 1000/3600, ["Kilometer per hour", "1", "kilometer/hour"])
defineUnit([ [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["M", "Ma", "Mach", "mach"], 340, ["Mach", "340", "m/s"])
defineUnit([ [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mph"], 5280*1200/3937/3600, ["Mile per hour", "1", "mile/hour"])
// Volumetric debit
defineUnit([ [0, 1], [3, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["sccs", "SCCS"], 1E-6, ["Standard cubic centimeter per second", "", "cm^3/sec"])
defineUnit([ [0, 1], [3, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["sccm", "SCCM"], 1E-6/60, ["Standard cubic centimeter per minute", "", "cm^3/min"])
// Flux density
defineUnit([ [0, 1], [0, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Jy", "Jansky", "jansky"], 1E-26, ["Jansky", "10^-26", "Watt/m^2/Hertz"])
defineUnit([ [0, 1], [0, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Ly", "Langley", "langley"], 41840, ["Langley", "1", "Thermochemical calorie/cm^2"])
// Charge
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["C", "Cb", "Coulomb", "coulomb", "Coulombs", "coulombs"], 1, ["Coulomb", "1", "Coulomb"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["Fr", "Franklin", "franklin", "statcoulomb"], 0.1/c, ["Franklin", "0.1/c", "Coulomb"])
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["q", "e"], q, ["Elementary charge", "1", "Electron charge&nbsp;&nbsp;[&nbsp;1.6022 * 10^-19 Coulomb&nbsp;]"])
// Light flux
defineUnit([ [2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1]], ["lm", "lumen", "lumens"], 1, ["Lumen", "1", "candela steradian"])
// Luminance
defineUnit([ [2, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1]], ["fc", "ftc", "footcandle", "footcandles", "Footcandle", "Footcandles"], Math.pow(3937/1200,2), ["footcandle", "1", "lumen/foot^2"])
defineUnit([ [2, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1]], ["lx", "lux", "Lux"], 1, ["Lux", "1", "lumen/m^2"])
defineUnit([ [2, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1]], ["ph", "phot", "Phot"], 1E4, ["Phot", "1", "lumen/cm^2"])
// Force
defineUnit([ [0, 1], [1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["dyn", "dyne"], 1E-5, ["Dyne", "10^-5", "Newton"])
defineUnit([ [0, 1], [1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["kgf", "kilopond"], 9.80665, ["Kilogram force", "", "Newton"])
defineUnit([ [0, 1], [1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["lbf", "lbsf"], 0.45359237*9.80665, ["Pound force", "", "Newton"])
defineUnit([ [0, 1], [1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["N", "Newton", "newton", "Newtons", "newtons"], 1, ["Newton", "1", "Newton"])
// Energy
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["BTU", "btu"], 1.05505585262E3, ["British Thermal Unit", "", "KiloJoule"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["cal", "calorie", "Calorie", "calories", "Calories"], 4.1868, ["International calorie", "", "Joule"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["cal15"], 4.1855, ["15 &deg;C calorie", "", "Joule"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["calth"], 4.1840, ["Thermochemical calorie", "", "Joule"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["erg", "Erg", "ergs", "Ergs"], 1E-7, ["Erg", "10^-7", "Joule"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["eV", "electronvolt", "Electronvolt", "ElectronVolt", "electronvolts", "Electronvolts", "ElectronVolts"], q, ["Electron Volt", "1", "q*Volt"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Hr", "Hartree", "hartree"], 4*pi*Rinf*Math.pow(c*q,2)/alpha*1E-7, ["Hartree", "2", "Rydberg"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["J", "Joule", "joule", "Joules", "joules"], 1, ["Joule", "1", "Joule"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["quad", "QUAD"], 1.05505585262E18, ["Quadrillion BTU", "", "ExaJoule"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Ry", "Rydberg", "rydberg", "Rydbergs", "rydbergs"], 2*pi*Rinf*Math.pow(c*q,2)/alpha*1E-7, ["Rydberg", "", "ElectronVolt"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["th", "Thermie", "thermie"], 4.1868E+6, ["Thermie", "10^6", "Calorie"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Wh", "watthour", "Watthour", "wattHour", "WattHour"], 3.6E+3, ["Watt hour", "3600", "Joule"])
// Power
defineUnit([ [0, 1], [2, 1], [1, 1], [-3, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["CV", "chevaux"], 75*9.80665, ["Metric horsepower", "75", "kgf m/s"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-3, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["hp", "horsepower"], 550*0.45359237*9.80665*1200/3937, ["Horsepower", "550", "lbf foot/sec"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-3, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["W", "Watt", "watt", "Watts", "watts"], 1, ["Watt", "1", "Watt"])
// Pressure
defineUnit([ [0, 1], [-1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["atm", "atmos", "atmosphere", "Atmosphere"], 1.01325E+5, ["Standard atmosphere", "", "KiloPascal"])
defineUnit([ [0, 1], [-1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["bar", "bars"], 1E+5, ["Bar", "100", "KiloPascal"])
defineUnit([ [0, 1], [-1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["inHg"], 133.3*100/3937*1000, ["Inch of mercury", "", "KiloPascal"])
defineUnit([ [0, 1], [-1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["mmHg"], 133.3, ["Millimeter of mercury", "133.3", "Pascal"])
defineUnit([ [0, 1], [-1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Pa", "Pascal", "pascal"], 1, ["Pascal", "1", "Newton/m^2"])
defineUnit([ [0, 1], [-1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["psi"], 0.45359237*9.80665*1549.9969, ["Pound force per Square Inch", "1", "lbf/inch^2"])
defineUnit([ [0, 1], [-1, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Torr", "torr"], 1.01325E+5/760, ["Torr", "1/760", "Atmosphere"])
// Viscosity
defineUnit([ [0, 1], [-1, 1], [1, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["P", "Ps", "Po", "Poise", "poise"], 0.1, ["Poise", "0.1", "Pascal second"])
defineUnit([ [0, 1], [2, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["St", "Stokes", "stokes", "stoke"], 1E-4, ["Stokes", "1", "cm^2/s"])
// Molar quantities
defineUnit([ [0, 1], [0, 1], [0, 1], [1, 1], [1, 1], [0, 1], [0, 1], [-1, 1]], ["Fd", "Faraday"], Na*q, ["Faraday constant", "q*N<SUB>Avogadro</SUB>", "&nbsp;&nbsp;[&nbsp;96485 Coulomb/Mole&nbsp;]"])
defineUnit([ [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [1, 1]], ["kat", "katal"], 1, ["Katal", "1", "Mole/second"])
defineUnit([ [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1]], ["Mmol"], 0.001, ["Molar mass", "", "gram/mole"])
defineUnit([ [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1]], ["Na", "Avogadro"], Na, ["Avogadro number", "", ""])
defineUnit([ [0, 1], [3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1]], ["Vmol"], 0.0224141, ["Molar volume", "", "liter/mole"])
// Physics
defineUnit([ [0, 1], [3, 1], [1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["e2"], Math.pow(c*q,2)*1E-7, ["quantity q^2/(4*Pi*eps0)", "1", "Hartree * a0"])
defineUnit([ [0, 1], [-3, 1], [-1, 1], [4, 1], [2, 1], [0, 1], [0, 1], [0, 1]], ["eps0"], 1/(4*pi*Math.pow(c,2))*1E+7, ["Vacuum permittivity", "", "Coulomb/(Volt meter)"])
defineUnit([ [0, 1], [1, 1], [0, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["gN"], 9.80665, ["Terrestrial acceleration", "", ""])
defineUnit([ [0, 1], [3, 1], [-1, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["GN"], GN, ["Constant of gravitation", "", "Newton m^2/kg^2"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["h"], h, ["Planck constant", "", "Joule second"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["hbar"], h/(2*pi), ["Dirac constant", "h/(2*Pi)", "&nbsp;&nbsp;[&nbsp;1.0546 * 10^-34 Joule second&nbsp;]"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [-1, 1], [0, 1], [0, 1]], ["k", "kB"], R/Na, ["Boltzmann constant", "R/Na", "&nbsp;&nbsp;[&nbsp;1.3807 * 10^-23 J/K&nbsp;]"])
defineUnit([ [0, 1], [1, 1], [1, 1], [-2, 1], [-2, 1], [0, 1], [0, 1], [0, 1]], ["mu0"], 4*pi*1E-7, ["Vacuum permeability", "4 * Pi * 10^-7", "Tesla meter/Ampere"])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["muB"], q*h/(4*pi*me), ["Bohr magneton", "q*h/(4*Pi*m<sub>electron</sub>)", "&nbsp;&nbsp;[&nbsp;9.2740 * 10^-24 A m^2&nbsp;]"])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["mue"], mue, ["Electron magnetic moment", "", "muB"])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["mumu"], mumu, ["Muon magnetic moment", "", "muN"])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["mun"], mun, ["Neutron magnetic moment", "", "muN"])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["muN"], q*h/(4*pi*mp), ["Nuclear magneton", "q*h/(4*Pi*m<sub>proton</sub>)", "&nbsp;&nbsp;[&nbsp;5.0508 * 10^-27 A m^2&nbsp;]"])
defineUnit([ [0, 1], [2, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["mup"], mup, ["Proton magnetic moment", "", "muN"])
defineUnit([ [0, 1], [-3, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["n0"], Na/0.0224141, ["Loschmidt constant", "", ""])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [-1, 1], [0, 1], [0, 1], [0, 1]], ["phi0", "Phi0"], h/(2*q), ["Quantum of magnetic flux", "h/(2*q)", "&nbsp;&nbsp;[&nbsp;2.0678 * 10^-15 Tesla m^2&nbsp;]"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [0, 1], [-1, 1], [0, 1], [-1, 1]], ["R"], R, ["Molar gaz constant", "", "Joule/Mole/Kelvin"])
defineUnit([ [0, 1], [0, 1], [1, 1], [-3, 1], [0, 1], [-4, 1], [0, 1], [0, 1]], ["sigma"], 2/15*pi*Math.pow(pi*R/Na/h,4)*h/c/c, ["Stefan-Boltzmann constant", "", "Watt/(m^2 K^4)"])
// Electricity
defineUnit([ [0, 1], [1, 1], [0, 1], [1, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["D", "Debye", "debye"], 0.001/c*1e-18, ["Debye", "10^-18", "statcoulomb cm"])
defineUnit([ [0, 1], [-2, 1], [-1, 1], [4, 1], [2, 1], [0, 1], [0, 1], [0, 1]], ["F", "Farad", "farad", "Farads", "farads"], 1, ["Farad", "1", "Coulomb/Volt"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [-2, 1], [0, 1], [0, 1], [0, 1]], ["H", "Henry", "henry"], 1, ["Henry", "1", "Weber/Ampere"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-3, 1], [-2, 1], [0, 1], [0, 1], [0, 1]], ["Ohm", "ohm", "Ohms", "ohms"], 1, ["Ohm", "1", "Volt/Ampere"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-3, 1], [-2, 1], [0, 1], [0, 1], [0, 1]], ["RH"], h/Math.pow(q,2), ["Hall resistance", "h/q^2", "&nbsp;&nbsp;[&nbsp;25.813 KiloOhm&nbsp;]"])
defineUnit([ [0, 1], [-2, 1], [-1, 1], [3, 1], [2, 1], [0, 1], [0, 1], [0, 1]], ["S", "Siemens", "siemens"], 1, ["Siemens", "1", "Ohm^-1"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-3, 1], [-1, 1], [0, 1], [0, 1], [0, 1]], ["V", "Volt", "volt", "Volts", "volts"], 1, ["Volt", "1", "Joule/Coulomb"])
// Magnetism
defineUnit([ [0, 1], [0, 1], [1, 1], [-2, 1], [-1, 1], [0, 1], [0, 1], [0, 1]], ["G", "Gs", "Gauss", "gauss"], 1E-4, ["Gauss", "10^-4", "Tesla"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [-1, 1], [0, 1], [0, 1], [0, 1]], ["Mx", "Maxwell", "maxwell"], 1E-8, ["Maxwell", "10^-8", "Weber"])
defineUnit([ [0, 1], [-1, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["Oe", "Oersted", "oersted"], 1/(4*pi)*1E+3, ["Oersted", "1", "Gilbert/cm"])
defineUnit([ [0, 1], [0, 1], [1, 1], [-2, 1], [-1, 1], [0, 1], [0, 1], [0, 1]], ["T", "Tesla", "tesla", "Teslas", "teslas"], 1, ["Tesla", "1", "Newton/Ampere/meter"])
defineUnit([ [0, 1], [2, 1], [1, 1], [-2, 1], [-1, 1], [0, 1], [0, 1], [0, 1]], ["Wb", "Weber", "weber", "Webers", "webers"], 1, ["Weber", "1", "Tesla m^2"])
// Radioactivity
defineUnit([ [0, 1], [2, 1], [0, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["Gy", "Gray", "gray", "Grays", "grays"], 1, ["Gray", "1", "Joule/kg"])
defineUnit([ [0, 1], [2, 1], [0, 1], [-2, 1], [0, 1], [0, 1], [0, 1], [0, 1]], ["rd"], 1E-2, ["Rad", "0.01", "Joule/kg"])
defineUnit([ [0, 1], [0, 1], [-1, 1], [1, 1], [1, 1], [0, 1], [0, 1], [0, 1]], ["Ro", "Roentgen", "roentgen"], 2.58E-4, ["Rontgen", "258", "MicroCoulomb/kg"])

//
//  Definition of the prefixes
//  **************************
//
// Structure of the array "prefix"
// -------------------------------
//
// prefix[i][0]: symbol(s) of the prefix; prefix[i][0] = [symb1, symb2, ...]
// prefix[i][1]: value of the prefix;     prefix[i][1] = value
//
prefix = new Array(0)

function definePrefix(symbol,value)
{
  prefix[prefix.length] = new Array(symbol,value)
}

definePrefix(["y",  "yocto", "Yocto"], 1E-24)
definePrefix(["z",  "zepto", "Zepto"], 1E-21)
definePrefix(["a",  "atto",  "Atto" ], 1E-18)
definePrefix(["f",  "femto", "Femto"], 1E-15)
definePrefix(["p",  "pico",  "Pico" ], 1E-12)
definePrefix(["n",  "nano",  "Nano" ], 1E-09)
definePrefix(["mu", "micro", "Micro"], 1E-06)
definePrefix(["m",  "milli", "Milli"], 1E-03)
definePrefix(["c",  "centi", "Centi"], 1E-02)
definePrefix(["d",  "deci",  "Deci" ], 1E-01)
definePrefix(["da", "deca",  "Deca" ], 1E+01)
definePrefix(["h",  "hecto", "Hecto"], 1E+02)
definePrefix(["k",  "kilo",  "Kilo" ], 1E+03)
definePrefix(["M",  "mega",  "Mega" ], 1E+06)
definePrefix(["G",  "giga",  "Giga" ], 1E+09)
definePrefix(["T",  "tera",  "Tera" ], 1E+12)
definePrefix(["P",  "peta",  "Peta" ], 1E+15)
definePrefix(["E",  "exa",   "Exa"  ], 1E+18)
definePrefix(["Z",  "zetta", "Zetta"], 1E+21)
definePrefix(["Y",  "yotta", "Yotta"], 1E+24)
definePrefix(["Ki", "kibi",  "Kibi" ], Math.pow(2,10))
definePrefix(["Mi", "mebi",  "Mebi" ], Math.pow(2,20))
definePrefix(["Gi", "gibi",  "Gibi" ], Math.pow(2,30))
definePrefix(["Ti", "tebi",  "Tebi" ], Math.pow(2,40))
definePrefix(["Pi", "pebi",  "Pebi" ], Math.pow(2,50))
definePrefix(["Ei", "exbi",  "Exbi" ], Math.pow(2,60))
definePrefix(["Zi", "zebi",  "Zebi" ], Math.pow(2,70))
definePrefix(["Yi", "yobi",  "Yobi" ], Math.pow(2,80))

//
//  Definition of the dimensions
//  ****************************
//
// Structure of the array "dimension"
// ----------------------------------
//
// dimension[i][0]: basic SI symbol of the dimension
// dimension[i][1]: name of the dimension
//
dimension = new Array(0)

function defineDimension(symbol,name)
{
  dimension[dimension.length]=new Array(symbol,name)
}

defineDimension("","Number")
defineDimension("rad","Angle")
defineDimension("m","Length")
defineDimension("kg","Mass")
defineDimension("s","Time")
defineDimension("A","Electric current")
defineDimension("K","Temperature")
defineDimension("cd","Luminous intensity")
defineDimension("mol","Quantity of matter")
defineDimension("rad^2","Solid angle")
defineDimension("m^2","Area")
defineDimension("m^3","Volume")
defineDimension("m^-1","Inverse Length")
defineDimension("m^-2","Fluence")
defineDimension("m^-3","Volumic density")
defineDimension("s^-1","Frequency")
defineDimension("K^-1","Thermal Expansivity")
//
defineDimension("rad s^-1","Angular speed")
defineDimension("rad s^-2","Angular acceleration")
defineDimension("m s^-1","Velocity")
defineDimension("m s^-2","Acceleration")
defineDimension("m^2 kg","Moment of inertia")
defineDimension("m^2 s^-1","Kinematic viscosity")
defineDimension("m^2 s^-2","Specific energy")
defineDimension("m^2 A","Magnetic moment")
defineDimension("m^3 mol^-1","Molar volume")
defineDimension("m^3 s^-1","Volumetric debit")
defineDimension("m^-1 A","Magnetic intensity")
defineDimension("m^-2 s^-1","Fluence rate")
defineDimension("m^-2 A","Electric current density")
defineDimension("m^-3 mol","Concentration")
defineDimension("rad^2 cd","Light flux")
defineDimension("rad^2 m^-2 cd","Illuminance")
defineDimension("m^-3 kg","Mass density, solubility")
defineDimension("kg s^-1","Linear friction, mass flow")
defineDimension("kg s^-2","Flux density")
defineDimension("kg mol^-1","Molar mass")
defineDimension("s A","Electric charge")
defineDimension("s^-1 mol","Catalytic activity")
//
defineDimension("m kg s^-1","Momentum")
defineDimension("m kg s^-2","Force")
defineDimension("m kg^-1 s^2","Compressibility")
defineDimension("m s A","Electric dipole")
defineDimension("m^2 kg s^-1","Action")
defineDimension("m^2 kg s^-2","Energy")
defineDimension("m^2 kg s^-3","Power")
defineDimension("m^2 s^-2 K^-1","Specific heat")
defineDimension("m^3 kg^-1 s^-2","Gravific field")
defineDimension("m^-1 kg s^-1","Dynamic viscosity")
defineDimension("m^-1 kg s^-2","Pressure")
defineDimension("m^-2 s A","Electric induction")
defineDimension("m^-3 s A","Charge density")
defineDimension("m^-4 kg s^-1","Acoustic impedance")
defineDimension("kg s^-2 A^-1","Magnetic field")
defineDimension("kg s^-3 K^-1","Heat transfer coefficient")
defineDimension("kg^-1 s A","Specific charge")
defineDimension("kg^-1 s^2 A","Mobility")
defineDimension("s A mol^-1","Molar charge")
//
defineDimension("m kg s^-2 A^-1","Magnetic vector potential")
defineDimension("m kg s^-2 A^-2","Permeability")
defineDimension("m kg s^-3 A^-1","Electric field")
defineDimension("m kg s^-3 K^-1","Thermal conductivity")
defineDimension("m^2 kg s^-2 A^-1","Magnetic flux")
defineDimension("m^2 kg s^-2 A^-2","Electric Inductance")
defineDimension("m^2 kg s^-2 K^-1","Entropy or Heat capacity")
defineDimension("m^2 kg s^-2 mol^-1","Molar energy")
defineDimension("m^2 kg s^-3 A^-1","Electric potential")
defineDimension("m^2 kg s^-3 A^-2","Electric resistance")
defineDimension("m^2 kg^-1 s^2 A^2","Magnetic susceptibility")
defineDimension("m^3 kg s^-3 A^-2","Electric resistivity")
defineDimension("m^-2 kg^-1 s^3 A^2","Electric conductance")
defineDimension("m^-2 kg^-1 s^4 A^2","Electric capacitance")
defineDimension("m^-3 kg^-1 s^3 A^2","Electric conductivity")
defineDimension("m^-3 kg^-1 s^4 A^2","Electric permittivity")

//
defineDimension("m^2 kg s^-2 K^-1 mol^-1","Molar entropy")
defineDimension("m^2 kg s^-3 A^-1 K^-1","Thermopower")

//
//  Definition of the systems of units
//  **********************************
//

// International system
SI = ["rad","m","kg","s","A","K","cd","mol"]

// CGS system
CGS = ["rad","cm","g","s","Gi","K","cd","mol"]

// Atomic units (a0 = me = q = hbar = 1)
AU = ["rad","a0","me","t0","I0","K","cd","mol"]

// Relativistic units (c = me = q = hbar = 1)
REL = ["rad","lr","me","tr","Ir","K","cd","mol"]

// Planck units (c = q = GN = hbar = k = 1)
PLA = ["rad","lP","mP","tP","IP","T_P","cd","mol"]

// Angstrom-eV system (Am = eV = q = hbar = k = 1)
AeV = ["rad","Am","MA","tA","IA","TA","cd","mol"]

//
//  Table used by the Adapt function
//  ********************************
//

AdTab=[["m","kg","s","A","K","rad","cd","mol"],
       [  1,  -2,  0,  0,  0,    0,   0,  0  ],
       [  1,   0,  1, -1,  0,    0,   0,  0  ],
       [  0,   0,  0,  0, -1,    0,   0,  0  ],
       [  0,   0,  0,  1,  0,    0,   0,  0  ],
       [ -1,   1, -1,  1,  1,    0,   0,  0  ],
       [  0,   0,  0,  0,  0,    1,   0,  0  ],
       [  0,   0,  0,  0,  0,    0,   1,  0  ],
       [  0,   0,  0,  0,  0,    0,   0,  1  ],
       ["c", "h","k","q","E","rad","cd","mol"],
       [  0,   0,  0,  0,  0,    0,   0,  0  ]]


// End of function define()
}

/////////////////////////////////////////////////////////////////////////
//////////////////////  COOKIES HANDLING  ///////////////////////////////
/////////////////////////////////////////////////////////////////////////


function setCookie() { 
// Set the cookie to save the value given in Unit In.
	var d = new Date();
	d.setTime(d.getTime() + (365*24*60*60*1000)); // Store the cookies for 1 year
	var expires = "expires=" + d.toUTCString();
	var path = "path=/";
	
	if (document.cookie.length == 0) {
		if (document.getElementById("unitfrom_id").value != "") { // Empty unit is not allowed in the drop down menu
			if (ParseUnit(document.getElementById("unitfrom_id").value, false).length != 1) { // Check if the unit given is an allowed unit
				document.cookie = "unitfrom=" + document.getElementById("unitfrom_id").value + ";" + expires + ";" + path + ";";
			}
		}
	}
	else {
		// Have to check if the unit is already store in the drop down menu. 
		// If it is the case we don't had the same unit again in the drop down menu
		var temp = document.cookie.replace("unitfrom=","");
		var nameValueArray = temp.split("-");
		var boolean = true;
		if (nameValueArray.length < 10) { // if length < 10 have to check if one of 9 first is the same
			for (var i=0; i < nameValueArray.length; i++) {
				if (nameValueArray[i] == document.getElementById("unitfrom_id").value) {
					boolean = false;
				}
				if (nameValueArray[i].replace("-","") == document.getElementById("unitfrom_id").value) {
					boolean = false;
				}
			}
		}
		else { // if length > 10 have to check for the 10 previous by calling function setCookieDifferentUnit
			boolean = setCookieDifferentUnit(nameValueArray, nameValueArray.length);
		}
		if (boolean == true) { // If boolean == true we add the new unit in the cookie
			if (document.getElementById("unitfrom_id").value != "") { // Empty unit is not allowed in the drop down menu
				if (ParseUnit(document.getElementById("unitfrom_id").value, false).length != 1) { // Check if the unit given is an allowed unit
				document.cookie = document.cookie + "-" + document.getElementById("unitfrom_id").value + ";" + expires + ";" + path + ";";
				}
			}
		}
	}
	getCookie(0);
}


function setCookieDifferentUnit(namearray, length) {
// Function receive array of cookie and length of the array in parameters
// It checks if one of the 10 previous object in array is the same of the new given unit 
// If it is the case return false, else return true
	var loopInitialValue = length;
	var boolean2 = true;
	
	if ((length % 10) == 1) {
		loopInitialValue = length;
	}
	else if (((length-1) % 10) == 1) {
		loopInitialValue = length-1;
	}
	else if (((length-2) % 10) == 1) {
		loopInitialValue = length-2;
	}
	else if (((length-3) % 10) == 1) {
		loopInitialValue = length-3;
	}
	else if (((length-4) % 10) == 1) {
		loopInitialValue = length-4;
	}
	else if (((length-5) % 10) == 1) {
		loopInitialValue = length-5;
	}
	else if (((length-6) % 10) == 1) {
		loopInitialValue = length-6;
	}
	else if (((length-7) % 10) == 1) {
		loopInitialValue = length-7;
	}
	else if (((length-8) % 10) == 1) {
		loopInitialValue = length-8;
	}
	else if (((length-9) % 10) == 1) {
		loopInitialValue = length-9;
	}
	
	for (var i=loopInitialValue; i < length; i++) {
		if (namearray[i] == document.getElementById("unitfrom_id").value) {
			boolean2 = false;
		}
		if (namearray[i].replace("-","") == document.getElementById("unitfrom_id").value) {
			boolean2 = false;
		}
	}
	
	for (var i=length-1; i > length-10; i--) {
		if (namearray[i] == document.getElementById("unitfrom_id").value) {
			boolean2 = false;
		}
		if (namearray[i].replace("-","") == document.getElementById("unitfrom_id").value) {
			boolean2 = false;
		}
	}
	
	return boolean2;
	
}

function delete_cookie(name) {
// Function uses to delete foreigner cookies
// We have to precise the domain they are coming from, if we don't do it
// it creates new cookies (but deleted immediately) of the same name 
// in our subdomain
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.unige.ch; path=/";
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=unige.ch; path=/"
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.mafalda.unige.ch; path=/";
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=mafalda.unige.ch; path=/";
}

function getCookie(i) {
// Get the cookie and display it in the drop down menu 'Unit to convert from'.
// Can save and display the 10 most recent given values.
	if (document.cookie.length != 0) {
			
		var newArray = document.cookie.split(";");			// Check if have some others cookies (coming from outside of the program) to delete them
		for (var k = 0; k < newArray.length; k++) {
			var newArraytemp = newArray[k].split("=");
			if (newArraytemp[0] != "unitfrom") {
				delete_cookie(newArraytemp[0]);
			}
		}
		
		//alert(document.cookie);
		var nameValueArray = document.cookie.split("-");
		if ((document.getElementById("display").innerHTML == "") || (document.getElementById("display").innerHTML == nameValueArray[i]) || (nameValueArray[i] != undefined)) {
			document.getElementById("display").innerHTML = nameValueArray[i].replace("unitfrom=", "");
			if (nameValueArray[i+1] != undefined) {
				document.getElementById("display").innerHTML = nameValueArray[i].replace("-", "").replace("unitfrom=", "");
			}
		}
		if (nameValueArray[i+1] != undefined) {
			document.getElementById("display1").innerHTML = nameValueArray[i+1];
			if (nameValueArray[i+2] != undefined) {
				document.getElementById("display1").innerHTML = nameValueArray[i+1].replace("-", "");
			}
		}
		if (nameValueArray[i+2] != undefined) {
			document.getElementById("display2").innerHTML = nameValueArray[i+2];
			if (nameValueArray[i+3] != undefined) {
				document.getElementById("display2").innerHTML = nameValueArray[i+2].replace("-", "");
			}
		}
		if (nameValueArray[i+3] != undefined) {
			document.getElementById("display3").innerHTML = nameValueArray[i+3];
			if (nameValueArray[i+4] != undefined) {
				document.getElementById("display3").innerHTML = nameValueArray[i+3].replace("-", "");
			}
		}
		if (nameValueArray[i+4] != undefined) {
			document.getElementById("display4").innerHTML = nameValueArray[i+4];
			if (nameValueArray[i+5] != undefined) {
				document.getElementById("display4").innerHTML = nameValueArray[i+4].replace("-", "");
			}
		}
		if (nameValueArray[i+5] != undefined) {
			document.getElementById("display5").innerHTML = nameValueArray[i+5];
			if (nameValueArray[i+6] != undefined) {
				document.getElementById("display5").innerHTML = nameValueArray[i+5].replace("-", "");
			}
		}
		if (nameValueArray[i+6] != undefined) {
			document.getElementById("display6").innerHTML = nameValueArray[i+6];
			if (nameValueArray[i+7] != undefined) {
				document.getElementById("display6").innerHTML = nameValueArray[i+6].replace("-", "");
			}
		}
		if (nameValueArray[i+7] != undefined) {
			document.getElementById("display7").innerHTML = nameValueArray[i+7];
			if (nameValueArray[i+8] != undefined) {
				document.getElementById("display7").innerHTML = nameValueArray[i+7].replace("-", "");
			}
		}
		if (nameValueArray[i+8] != undefined) {
			document.getElementById("display8").innerHTML = nameValueArray[i+8];
			if (nameValueArray[i+9] != undefined) {
				document.getElementById("display8").innerHTML = nameValueArray[i+8].replace("-", "");
			}
		}
		if (nameValueArray[i+9] != undefined) {
			document.getElementById("display9").innerHTML = nameValueArray[i+9];
			if (nameValueArray[i+10] != undefined) {
				document.getElementById("display9").innerHTML = nameValueArray[i+9].replace("-", "");
			}
		}
		if (nameValueArray[i+10] != undefined) {
			getCookie(i+10); // Recursive call to save the most recent value by erasing the oldest one
		}
	}
}

function pasteUnit(e) {
// Functions uses to paste selected value of the drop down menu 'Unit to convert from'
// in the field 'Unit to convert from'
	if (e.value == "01") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "02") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display1").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "03") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display2").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "04") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display3").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "05") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display4").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "06") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display5").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "07") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display6").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "08") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display7").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "09") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display8").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
	else if (e.value == "10") {
		document.getElementById("unitfrom_id").focus();
		document.getElementById("unitfrom_id").value = document.getElementById("display9").innerHTML;
		document.getElementById("unitfrom_id").blur();
	}
}


/////////////////////////////////////////////////////////////////////////
//////////////////////  INIT AND UPDATE ROUTINES  ///////////////////////
/////////////////////////////////////////////////////////////////////////


function init(sys,s,n)
// Puts the variables in their initial state
{
  uI=new Array(0);uO=new Array(0);VI=1;VO="NaN"
  system=sys;notation=s;digits=n;sep_US=1;sep_UK=0;Tshift=false;erase_infos=true
  for(var i=0;i<unit.length;i++)
  {
    if(unit[i][0][0]=="Vmol"){unit[i][2]=0.0224141}
    if(unit[i][0][0]=="Mmol"){unit[i][2]=0.001}
  }
  in_ValueIn=false;check_ValueIn=false // These flags are used in order to
  in_UnitIn =false;check_UnitIn =false // avoid using the "onChange" event
  in_UnitOut=false;check_UnitOut=false // for the input fields, whose priority
  in_Vmol   =false;check_Vmol   =false // with respect to the "onClick" event
  in_Mmol   =false;check_Mmol   =false // of the buttons is browser-dependent.
  escape=true // This flag is set if a click on the page body should not be
              // interpreted as a validation of the form.
  error=0     // This counter is used to avoid multiple error messages.
}

function UpdateSys(form)
// Reads the system of units from the formular
{
  switch(form.Systems.selectedIndex)
  {
    case 0 : system=SI;message(0);break
    case 1 : system=SI;message(0);break
    case 2 : system=CGS;message(0);break
    case 3 : system=AU;message(25);break
    case 4 : system=REL;message(26);break
    case 5 : system=PLA;message(27);break
    case 6 : system=AeV;message(28);break
  }
}

function UpdateNotation(form)
// Reads the notation preference from the formular
{
  switch(form.Notation.selectedIndex)
  {
    case 0: notation="automatic";break
    case 1: notation="scientific";break
    case 2: notation="decimal";break
    case 3: notation="engineering";break
  }
}

function UpdateDigits(form)
// Reads the digit preference from the formular
{
  digits=form.Digits.selectedIndex+1
}

function UpdateMol(form)
// Reads the molar volume and molar mass from the formular
{
  for(var i=0;i<unit.length;i++)
  {
    if(unit[i][0][0]=="Vmol")
    {
      unit[i][2]=Math.abs(Number(form.Vmol.value))/1000
      form.Vmol.value=unit[i][2]*1000
    }
    if(unit[i][0][0]=="Mmol")
    {
      unit[i][2]=Math.abs(Number(form.Mmol.value))/1000
      form.Mmol.value=unit[i][2]*1000
    }
  }
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////  CHECKING USER INPUT  /////////////////////////
/////////////////////////////////////////////////////////////////////////

//
//  Fraction manipulation
//  *******************
//

function gcd(exp) {
// The parameter of the function should be a list of 2 integer [a, b],
// it returns the gcd of the 2 numbers
	var a = Math.abs(exp[0]);
	var b = Math.abs(exp[1]);
	
	if (a == 0) {
		return Math.abs(b);
	}
	if (b == 0) {
		return Math.abs(a);
	}
	
	do {
		if (a > b) {
			a = a - b;
		}
		else {
			b = b - a;
		}
	} while (a != b);
	
	gcd = a;
	return gcd;
}

function irreductibleFraction(exp) {
// The parameter of the function should be a list of 2 integer [a, b],
// function returns the irreductible fraction of exp as a list of two integers [c, d]
	var gcd = gcd(exp);
	var a = exp[0];
	var b = exp[1];
	if ((a < 0) && (b < 0)) {
		a = Math.abs(a / gcd);
		b = Math.abs(b / gcd);
		var irreductibleFraction = [a, b];
		return irreductibleFraction;
	}
	else if ((a < 0) && (b > 0)) {
		a = a / gcd;
		b = b / gcd;
		var irreductibleFraction = [a, b];
		return irreductibleFraction;
	}
	else if ((a > 0) && (b < 0)) {
		a = -a / gcd;
		b = Math.abs(b / gcd);
		var irreductibleFraction = [a, b];
		return irreductibleFraction;
	}
	else if ((a > 0) && (b > 0)) {
		a = a / gcd;
		b = b / gcd;
		var irreductibleFraction = [a, b];
		return irreductibleFraction;
	}
	
}

function additionFraction(exp1, exp2) {
// The parameter of the function should be 2 lists of 2 integer [a1, b1] and [a2, b2],
// function returns the result of addition a1/b1 + a2/b2 as a list [numerator, denominator]

	var a1 = exp1[0];
	var b1 = exp1[1];
	var a2 = exp2[0];
	var b2 = exp2[1];
	var numerator = a1*b2 + a2*b1;
	var denominator = b1*b2;
	
	var resultAddition = [numerator, denominator];
	return resultAddtion;

}

//
//  String manipulation
//  *******************
//

function clean(s)
//Replaces "*" by spaces in the string s
//Removes "1^1" and "1^-1" factors
//Replaces multiple spaces by single spaces
//Replaces " /" by "/"
//Replaces "( )" by "()"
//Removes spaces at the beginning and end of s
//Removes spaces in front of the "^" operators
{
  while(s.indexOf("*")>=0){s=s.replace("*"," ")}
  while(s.indexOf(" 1^1 ")>=0){s=s.substring(0,s.indexOf(" 1^1 "))+s.substring(s.indexOf(" 1^1 ")+4,s.length)}
  while(s.indexOf(" 1^-1 ")>=0){s=s.substring(0,s.indexOf(" 1^-1 "))+s.substring(s.indexOf(" 1^-1 ")+5,s.length)}
  while(s.indexOf("  ")>=0){s=s.replace("  "," ")}
  while(s.indexOf(" /")>=0){s=s.replace(" /","/")}
  while(s.indexOf("( )")>=0){s=s.replace("( )","()")}
  if(s.indexOf(" ")==0){s=s.substring(1,s.length)}
  if(s.substring(s.length-1,s.length)==" "){s=s.substring(0,s.length-1)}
  while(s.indexOf(" ^")>=0){s=s.substring(0,s.indexOf(" ^"))+s.substring(s.indexOf(" ^")+1,s.length)}
  return s
}

function nextop(s)
// Returns the substring in front of the first "/" or "(" character
{
  var nf=s.indexOf("/");var np=s.indexOf("(")
  if(nf>=0 && np>=0){s=s.substring(0,Math.min(nf,np))}
  if(nf>=0 && np<0){s=s.substring(0,nf)}
  if(nf<0 && np>=0){s=s.substring(0,np)}
  return s
}

function closing(s, display=true)
// Returns the substring defined by the closing parenthesis for a string
// beginning with "(", or returns "error"
// If display=true, displays the error messages, else it parses without
// displaying it.
{
  if(s.indexOf(")")==1){if(display==true){fatal(4,s);}return "error"}
  var p=1
  for(var i=1;i<=s.length;i++)
  {
    if(s.substring(i,i+1)=="("){p+=1};if(s.substring(i,i+1)==")"){p-=1}
    if(p==0){return s.substring(1,i)}
  }
  if(display==true){fatal(3,s);}return "error"
}

function preformat(s, display=true)
// Converts a string containing neither "/" nor "(" into the format
// "a1^n1 a2^n2 ...". Returns "error" if something goes wrong
// If display=true, displays the error messages, else it parses without
// displaying it.
{
  s=clean(s);if(s=="error"||s.length==0){return s}
  var s1=s+" ";var s2=s1;s=""
  if(s1.indexOf("^")==0){if(display==true){fatal(1,s1);}return "error"}
  while(s1.length>0)
  {
    s2=s1.substring(0,s1.indexOf(" "));s1=s1.substring(s2.length+1,s1.length);s+=s2
    if(s2.indexOf("^")>0)
    {
      var exp=s2.substring(s2.indexOf("^")+1,s2.length)
      if(exp.length==0){if(display==true){fatal(10,s2);}return "error"}
      if(isNaN(Number(exp))||Number(exp)!=Math.round(Number(exp))||Number(exp)==0){if(display==true){fatal(2,exp);}return "error"}
      s+=" "
    } else {s+="^1 "}
  }
  return s.substring(0,s.length-1)
}

function power(s,n)
// Gives the nth power of an expression of the type "a^i b^j ...",
// i.e., "a^i*n b^j*n ..."
{
  if(s=="error"||s.length==0){return s}
  var s1=s+" ";s=""
  while(s1.indexOf("^")>0)
  {
    s=s+s1.substring(0,s1.indexOf("^")+1)+eval(s1.substring(s1.indexOf("^")+1,s1.indexOf(" "))+"*"+n)+" "
    s1=s1.substring(s1.indexOf(" ")+1,s1.length)
  }
  return s.substring(0,s.length-1)
}


//
//  Parsing units
//  *************
//

function expand(s, display=true)
// Expands an expression with "/" and "(" operators as a product "a1^n1 a2^n2 ..."
// Returns "error" if something goes wrong
// The function calls itself recursively
// If display=true, displays the error messages, else it parses without
// displaying it.
{
  var s1=nextop(s);var s2="";var f=1
  if(display==false){if(s1==s){return clean(preformat(s,false))}}else{if(s1==s){return clean(preformat(s))}}
  if(display==false){var st=preformat(s1,false)}else{var st=preformat(s1)}if(st=="error"){return st}else{st+=" "}
  s1=clean(s.substring(s1.length,s.length))
  if(s1.substring(0,1)=="/"){s1=s1.substring(1,s1.length);f=-1}
  if(s1.substring(0,1)=="(")
  {
    if(display==false){s2=closing(s1,false)}else{s2=closing(s1)}if(s2=="error"){return "error"}
    s1=s1.substring(s2.length+2,s1.length)
    if(s1.substring(0,1)=="^")
    {
      var exp=s1.substring(1,Math.min((s1+" ").indexOf(" "),nextop(s1).length))
      if(isNaN(Number(exp))||exp.length==0||Number(exp)==0)
      {
        if(isNaN(Number(exp))||Number(exp)!=Math.round(Number(exp))||Number(exp)==0){if(display==true){fatal(2,exp);}}
        if(exp.length==0){if(display==true){fatal(10,s2+"^");}}
        var n="error"
      } else {var n=parseInt(exp)}
      s1=s1.substring(exp.length+1,s1.length)
    } else {var n=1}
  }
  else
  {
    s1=clean(s1);s2=s1.substring(0,Math.min((s1+" ").indexOf(" "),nextop(s1).length))
    s1=s1.substring(s2.length,s1.length)
    if(s2.length==0){if(display==true){fatal(11,"");}var n="error"}else{var n=1}
  }
  if(n=="error"){return "error"}
  if(display==false){st=st+power(expand(s2,false),n*f)+" "+expand(s1,false)}else{st=st+power(expand(s2),n*f)+" "+expand(s1)}
  if(st.indexOf("error")!=-1){st="error"}
  return clean(st)
}

function ParseUnit(s, display=true)
// Takes any user input and returns an array
// The array structure is:
// u[n][0] = value of the prefix for the nth unit
// u[n][1] = index of the nth unit in the array unit[]
// u[n][2] = value of the exponent for the nth unit
// u[u.length-1] = "dimension"
// If s="" => u.length=0; If the input contains an error => u.length=1
// The function also sets the global variable Tshift
// If display=true, displays the error messages, else it parses without
// displaying it.
{
  var u=new Array(0);if(display==false){s=expand(s,false);}else{s=expand(s);}
  if(s==""){return u}
  if(s=="error"){u=new Array(1);return u}
  var n=0;var i=0;var j=0;var k=0;var l=0;var jj=0
  var s1=s;var s2=s1;var s3=s1;var ok=false
  while(s1.length>0)
  {
    // Extracts the first symbol into s2
    s2=s1.substring(0,(s1+" ").indexOf(" "))
    s1=s1.substring(s2.length+1,s1.length)
    u[n]=new Array(1,0,1)
    // Separates symbol from exponent, if appropriate, and saves the exponent
    if(s2.indexOf("^")>0)
    {
      u[n][2]=Number(s2.substring(s2.indexOf("^")+1,s2.length))
      s2=s2.substring(0,s2.indexOf("^"))
    }
    // Considers a possible sign in front of the symbol and saves it as a prefix
    if(s2.substring(0,1)=="-"){u[n][0]=-1;s2=s2.substring(1,s2.length)}
    // Tries to identify the symbol as a pure unit
    for(i=0;i<unit.length;i++)
    {
      // Loop over synonyms of a symbol
      for(j=0;j<unit[i][0].length;j++)
      {
        if(s2==unit[i][0][j]){u[n][1]=i;ok=true;break}
      }
      if(ok==true){break}
    }
    // Tries to identify the longest possible prefix in the symbol
    if(ok==false)
    {
      for(l=1;l<=s2.length;l++)
      {
        s3=s2.substring(0,s2.length-l)
        // Loop over prefixes
        for(k=0;k<prefix.length;k++)
        {
          // Loop over synonyms of a prefix
          for(j=0;j<prefix[k][0].length;j++)
          {
            if(s3==prefix[k][0][j])
            {
              u[n][0]=u[n][0]*prefix[k][1]
              // Checks that the remainder of the symbol is a pure unit
              s3=s2.substring(s2.length-l,s2.length)
              for(i=0;i<unit.length;i++)
              {
                for(jj=0;jj<unit[i][0].length;jj++)
                {
                  if(s3==unit[i][0][jj]){u[n][1]=i;ok=true;break}
                }
                if(ok==true){break}
              }
            }
            if(ok==true){break}
          }
          if(ok==true){break}
        }
        if(ok==true){break}
      }
    }
    // Finally tries to identify the symbol as a number
    if(ok==false)
    {
      if(isNaN(Number(s2))){u=new Array(1);if(display==true){fatal(6,s2);}return u}
      if(Number(s2)==0){u=new Array(1);if(display==true){fatal(14,"");}return u}
      u[n][0]=u[n][0]*Number(s2);u[n][1]=0
    }
    n++;ok=false
  }
  // Determines the dimension
  u[u.length]=" ?";s1=ToSystem(u,SI)
  for(i=0;i<dimension.length;i++)
  {
    if(s1==dimension[i][0]){u[u.length-1]=dimension[i][1]}
  }
  // Determines whether a temperature shift is necessary for the unit
  Tshift=true;if(u[u.length-1]!="Temperature"){Tshift=false}
  for(var n=0;n<u.length-1;n++)
  {
    if((unit[u[n][1]][0][0]=="oC"||unit[u[n][1]][0][0]=="oF")&&n>0){Tshift=false}
  }
  //
  
  return u
}

/////////////////////////////////////////////////////////////////////////
///////////////////////////  UNIT CONVERSION  ///////////////////////////
/////////////////////////////////////////////////////////////////////////

function Validate(form,forwhom)
// Checks the user inputs
{
  if(forwhom=="Click"){if(escape){escape=false;return}}
  error=0
  if(check_ValueIn){Event(form,1);if(error==1){return false}}
  if(check_UnitIn){Event(form,2);if(error==1){return false}}
  if(check_UnitOut){Event(form,7);if(error==1){return false}}
  if(check_Vmol){Event(form,13);if(error==1){return false}}
  if(check_Mmol){Event(form,14);if(error==1){return false}}
  if(forwhom=="Click"){return}
  //
  if(isNaN(VI)){fatal(7,"");message(11);return false}
  if(uI.length==1){fatal(13,"");message(14);return false}
  if(uO.length==1){fatal(8,"");message(18);return false}
  if(isNaN(Number(form.Vmol.value))){fatal(15,"Vmol");message(20);return false}
  if(isNaN(Number(form.Mmol.value))){fatal(15,"Mmol");message(22);return false}
  if(form.Systems.selectedIndex==0 && uI.length>1 && uI[uI.length-1]!="Number" && uO.length==0)
    {fatal(8,"");return false}
  if(forwhom!="Adapt")
  {
    var sI=ToSystem(uI,system);var sO=ToSystem(uO,system)
    if(sO!=sI)
    {
      if(uI[uI.length-1]==" ?"&&uO[uO.length-1]==" ?")
      {
        fatal(9,"");message(0);document.main.pic.src=sad.src;return false
      }
      else
      {
        fatal(9,form.UnitIn.value+"  :  "+uI[uI.length-1]+"\n"+form.UnitOut.value+"  :  "+uO[uO.length-1])
        message(0);document.main.pic.src=sad.src;return false
      }
    }
  }
  return true
}

function ToSystem(u,system) 
// Returns the string expression of the unit u[] in a given system of units
{
  var s="";var k=0
  for(var i=0;i<8;i++)
  {
    k=0;for(var n=0;n<u.length-1;n++){k+=u[n][2]*unit[u[n][1]][1][i][0]}
    if(k!=0){s+=" "+system[i];if(k>1||k<0){s+="^"+k}}
  }
  s=s.substring(1,s.length)
  return s
}

function Convert(v,u,k)
// Converts the number v from unit u to SI (k>0) or from SI to unit u (k<0)
{
  for(var n=0;n<u.length-1;n++)
  {
    if(u[n][0]*unit[u[n][1]][2]<0){v=Math.pow(-1,u[n][2])*v}
    if(k>0){v=v * Math.exp(Math.log(Math.abs(u[n][0]*unit[u[n][1]][2]))*u[n][2])}
    if(k<0){v=v / Math.exp(Math.log(Math.abs(u[n][0]*unit[u[n][1]][2]))*u[n][2])}
  }
  return v
}

function Compute(form)
// Performs the unit conversion
{
  if(Validate(form,"Compute")==false){return}
  var VSI=Convert(VI,uI,1);VO=Convert(VSI,uO,-1)
  message(29)
  if(uI[uI.length-1]=="Temperature"&&Tshift)
  {
    if(uI.length>2){TI="K"}else{TI=unit[uI[0][1]][0][0]}
    if(uO.length>2){TO="K"}else{TO=unit[uO[0][1]][0][0]}
    if(TI!=TO){VO=TOffset(VO,TI,TO);message(30)}
  }
  write_text(format(VO,notation,digits),'ValueOut')
}

function TOffset(T,s1,s2)
// Adds the appropriate temperature offset for temperature conversions
{
  switch(s1)
  {
    case "K" : if(s2=="oC"){T=T-273.15};if(s2=="oF"){T=T-273.15*9/5+32};break
    case "oR": if(s2=="oC"){T=T-273.15};if(s2=="oF"){T=T-273.15*9/5+32};break
    case "oC": if(s2=="K"){T=T+273.15};if(s2=="oR"){T=T+273.15*9/5};if(s2=="oF"){T=T+32};break
    case "oF": if(s2=="K"){T=T+273.15-32*5/9};if(s2=="oR"){T=T+273.15*9/5-32};if(s2=="oC"){T=T-32*5/9};break
  }
  return T
}

function Adapt(form)
// Makes different units compatible using physical constants.
{
  if(Validate(form,"Adapt")==false){return}
  var sI=ToSystem(uI,SI);var sO=ToSystem(uO,SI)
  if(sI==sO){Compute(form);message(31);return}

  var ok=false
  var s=preformat(sO)+" "+power(preformat(sI),-1)+" ";var s1="";var s2=""
  AdTab[10]=[0,0,0,0,0,0,0,0];var n=0;var i=0;var j=0
  while(s.length>0)
  {
    s1=s.substring(0,s.indexOf("^"));s2=s.substring(s.indexOf("^")+1,s.indexOf(" "))
    n=Number(s2);s=s.substring(s.indexOf(" ")+1,s.length)
    for(i=0;i<8;i++){if(s1==AdTab[0][i]){for(j=0;j<8;j++){AdTab[10][j]+=n*AdTab[j+1][i]}}}
  }
  if(AdTab[10][4]==0&&AdTab[10][5]==0&&AdTab[10][6]==0&&AdTab[10][7]==0)
  {
    s="  * "
    for(i=0;i<4;i++){if(AdTab[10][i]!=0){s+=" "+AdTab[9][i];if(AdTab[10][i]!=1){s+="^"+AdTab[10][i]}}}
    form.UnitIn.value+=s;Event(form,2);Compute(form);message(32);return
  }
  s=preformat(sO)+" "+preformat(sI)+" ";s1="";s2=""
  AdTab[10]=[0,0,0,0,0,0,0,0]
  while(s.length>0)
  {
    s1=s.substring(0,s.indexOf("^"));s2=s.substring(s.indexOf("^")+1,s.indexOf(" "))
    n=Number(s2);s=s.substring(s.indexOf(" ")+1,s.length)
    for(i=0;i<8;i++){if(s1==AdTab[0][i]){for(j=0;j<8;j++){AdTab[10][j]+=n*AdTab[j+1][i]}}}
  }
  if(AdTab[10][4]==0&&AdTab[10][5]==0&&AdTab[10][6]==0&&AdTab[10][7]==0)
  {
    s=""
    for(i=0;i<4;i++){if(AdTab[10][i]!=0){s+=" "+AdTab[9][i];if(AdTab[10][i]!=1){s+="^"+AdTab[10][i]}}}
    form.UnitIn.value=clean(s)+" /(  "+form.UnitIn.value+"  )"
    form.ValueIn.value="1/(  "+form.ValueIn.value+"  )"
    Event(form,1);Event(form,2);Compute(form);message(32);return
  }
  fatal(12,"");message(33)
}

/////////////////////////////////////////////////////////////////////////
/////////////////  EVENTS, MESSAGES, ERRORS, AND INFOS  /////////////////
/////////////////////////////////////////////////////////////////////////

function Event(form,i)
// Handles events
//
// In order to avoid using "onChange", the modifications of the input
// fields are tracked by "onClick" on the page body. Clicks which should
// not be interpreted in that way are marked by setting escape=true.
{
  if(i==0)  // Loading
  {
    form.ValueIn.value="1";form.UnitIn.value="";write_text('','DimIn')
    write_text('','ValueOut');form.UnitOut.value="";write_text('','DimOut')
    form.Notation.options[0].selected=true
    form.Digits.options[4].selected=true
    form.Systems.options[0].selected=true
    form.Vmol.value="22.4141";form.Mmol.value="1"
    define();init(SI,"automatic",5);message(1)
    form.UnitIn.focus();check_UnitIn=true;escape=false
  }
  if(i==1)  // Change in ValueIn
  {
    form.ValueIn.blur();check_ValueIn=false
    VI="NaN";if(form.ValueIn.value.match(/\^/)){message(23);return}
    message(11)
    VI=eval("with(Math) "+form.ValueIn.value)
    if(isNaN(VI)){return}
    message(12)
  }
  if(i==2)  // Change in UnitIn
  {
    form.UnitIn.blur();check_UnitIn=false
    uI=ParseUnit(form.UnitIn.value)
    if(uI.length<2)
    {
      write_text('','DimIn')
      if(form.Systems.selectedIndex!=0)
      {
        form.UnitOut.value="";write_text('','DimOut');uO=new Array(0)
      }
      if(uI.length==0){message(0)}
      if(uI.length==1){message(14)}
      return
    }
    write_text(uI[uI.length-1],'DimIn')
    if(form.Systems.selectedIndex!=0)
    {
      form.UnitOut.value=ToSystem(uI,system)
      uO=ParseUnit(form.UnitOut.value)
      write_text(uO[uO.length-1],'DimOut')
    }
    if(uI[uI.length-1]!=" ?"){message(13)}else{message(24)}
  }
  if(i==3)  // Double click in DimIn
  {
    message(15)
  }
  if(i==4)  // Double click in ValueOut
  {
    message(16)
  }
  if(i==5)  // Change in Notation
  {
    UpdateNotation(form)
    if(isNaN(VO)){write_text('','ValueOut')}
    else{write_text(format(VO,notation,digits),'ValueOut')}
  }
  if(i==6)  // Change in Digits
  {
    UpdateDigits(form)
    if(isNaN(VO)){write_text('','ValueOut')}
    else{write_text(format(VO,notation,digits),'ValueOut')}
  }
  if(i==17)  // Change in Separator
  {
    sep_US=1-sep_US; if(sep_US==1){sep_UK=0;form.Separator_UK.checked=false}
    if(isNaN(VO)){write_text('','ValueOut')}
    else{write_text(format(VO,notation,digits),'ValueOut')}
  }
  if(i==18)  // Change in Separator
  {
    sep_UK=1-sep_UK; if(sep_UK==1){sep_US=0;form.Separator_US.checked=false}
    if(isNaN(VO)){write_text('','ValueOut')}
    else{write_text(format(VO,notation,digits),'ValueOut')}
  }
  if(i==7)  // Change in UnitOut
  {
    form.UnitOut.blur();check_UnitOut=false
    form.Systems.options[0].selected=true;system=SI
    uO=ParseUnit(form.UnitOut.value)
    if(uO.length<2)
    {
      write_text('','DimOut')
      if(uO.length==0){message(0)}
      if(uO.length==1){message(18)}
      return
    }
    write_text(uO[uO.length-1],'DimOut')
    if(uO[uO.length-1]!=" ?"){message(17)}else{message(24)}
  }
  if(i==8)  // Change in Systems
  {
    UpdateSys(form)
    if(form.Systems.selectedIndex!=0)
    {
      write_text('','ValueOut');VO="NaN"
      if(check_UnitIn){error=0;Event(form,2);if(error==1){return}}
      if(uI.length==1){fatal(13,"");return}
      if(uI.length>1){
        form.UnitOut.value=ToSystem(uI,system)
        uO=ParseUnit(form.UnitOut.value)
        write_text(uO[uO.length-1],'DimOut')
      }
    }
  }
  if(i==9)  // Double click in DimOut
  {
    message(15)
  }
  if(i==10)  // Clear button
  {
    escape=true;form.clear.blur()
    form.ValueIn.value="1";form.UnitIn.value="";write_text('','DimIn')
    write_text('','ValueOut');form.UnitOut.value="";write_text('','DimOut')
    init(system,notation,digits)
    form.Vmol.value="22.4141";form.Mmol.value="1"
    message(0);form.UnitIn.focus();check_UnitIn=true
  }
  if(i==11)  // Adapt button
  {
    escape=true;form.adapt.blur()
    Adapt(form)
  }
  if(i==12)  // Convert button
  {
    escape=true;form.convert.blur()
    Compute(form)
  }
  if(i==13)  // Change in Vmol
  {
    form.Vmol.blur();check_Vmol=false
    if(isNaN(Number(form.Vmol.value)))
    {
      fatal(15,"Molar volume");message(19);return
    }
    UpdateMol(form)
    message(20)
  }
  if(i==14)  // Change in Mmol
  {
    form.Mmol.blur();check_Mmol=false
    if(isNaN(Number(form.Mmol.value)))
    {
      fatal(15,"Molar mass");message(21);return
    }
    UpdateMol(form)
    message(22)
  }
  if(i==15)  // Click in any of the fields
  {
    escape=true;Validate(form,"Click")
    write_text('','ValueOut');VO="NaN"
  }
  if(i==16)  // Double click in Mess
  {
    message(38)
  }
}

function format(x,not,dig)
// Formats the number a for printout, according to the options
// not ("automatic", "scientific", "decimal", or "engineering") and dig (number of digits)
{
  if(isNaN(x)){return x}
  if(x==0){return "0.00000000000".substring(0,dig+1)}
  // Extracts sign, mantissa and exponent
  var n=0;var s=String(x);if(x<1){var f="-"}else{var f="+"}
  while(s.indexOf("e")<0){n++;s=String(x*eval("1e"+f+String(n)))}
  var e=eval(s.substring(s.indexOf("e")+1,s.length)+"-("+f+String(n)+")")
  var m=eval(s.substring(0,s.indexOf("e")))
  var si=m/Math.abs(m);if(si==1){si=""}else{si="-"}
  m=Math.abs(m);if(m<1){m=10*m;e-=1}
  // Rounds the mantissa
  // This method avoids the function Math.round which might not work
  // properly with big numbers, for some browsers.
  m=String(m);if(m.indexOf(".")<0){m+="."};m+="00000000000"
  var j=0;for(var i=m.length;i>dig+1;i--)
    {j+=eval(m.substring(i-1,i));if(j>=5){j=1}else{j=0}}
  m=m.substring(0,i)
  for(i=dig+1;i>2;i--)
  {
    j+=eval(m.substring(i-1,i))
    if(j==10){m=m.substring(0,i-1)+"0"+m.substring(i,m.length);j=1}
    else{m=m.substring(0,i-1)+String(j)+m.substring(i,m.length);j=0}
  }
  j+=eval(m.substring(0,1))
  if(j==10){m="1"+m.substring(1,m.length);e+=1}
  else{m=String(j)+m.substring(1,m.length)}
  // Changes mantissa and exponent for engineering notation
  if(not=="engineering"&&e!=0)
  {
    if(e>0){i=e%3}else{i=(e%3+3)%3};e=e-i
    if(i>0)
    {
      if(dig==1){m=m.replace(".","0.")}
      else{m=m.substring(0,1)+m.substring(2,3)+"."+m.substring(3,m.length)}
      if(i>1)
      {
        if(dig==2){m=m.replace(".","0.")}
        else{m=m.substring(0,2)+m.substring(3,4)+"."+m.substring(4,m.length)}
      }
    }
  }
  // Formats the number for printout
  if((not=="scientific"&&e!=0)||
     (not=="automatic"&&((e>=dig||e>4)||(-e>3)))||
     (not=="engineering"&&((e>=3)||(-e>=3)))||
     e>15-si.length||dig-e>15-si.length)
  {
    if(m.substring(m.length-1,m.length)=="."){m=m.substring(0,m.length-1)}
    return si+m+" * 10<SUP><FONT SIZE='-2'>"+e+"</FONT></SUP>"
  }
  else
  {
    if(e==0)
    {
      if(m.substring(m.length-1,m.length)=="."){m=m.substring(0,m.length-1)}
      return si+m
    }
    else
    {
      if(e<0)
      {
        s="";for(i=1;i<-e;i++){s+="0"}
        m="0."+s+m.substring(0,1)+m.substring(2,m.length)
        if(m.substring(m.length-1,m.length)=="."){m=m.substring(0,m.length-1)}
        return si+m
      }
      else
      {
        s="";for(i=1;i<=e-dig+1;i++){s+="0"}
        m=m.substring(0,1)+m.substring(2,2+e)+s+"."+m.substring(2+e,m.length)
        // Adds thousands separators
        if(sep_US==1){j=m.indexOf(".")-3
          while(j>0){m=m.substring(0,j)+"'"+m.substring(j,m.length); j-=3}}
        if(sep_UK==1){j=m.indexOf(".")-3
          while(j>0){m=m.substring(0,j)+","+m.substring(j,m.length); j-=3}}
        if(m.substring(m.length-1,m.length)=="."){m=m.substring(0,m.length-1)}
        return si+m
      }
    }
  }
}

function message(i)
// Prints the messages
{
  erase_infos=true
  if(i== 0){write_text("&nbsp;",'Mess');document.main.pic.src=inert.src}
  if(i== 1){write_text(" Welcome to the Versatile Unit Converter !",'Mess');document.main.pic.src=happy.src}
  if(i== 2){write_text(" <font color='#666666'>A short version history</font>",'Mess');document.main.pic.src=inert.src}
  if(i== 3){write_text(" <font color='#666666'>The Entry page: general infos.</font>",'Mess');document.main.pic.src=inert.src}
  if(i== 4){write_text(" <font color='#666666'>Read the Help; then I'll hold no more secrets for you.</font>",'Mess');;document.main.pic.src=inert.src}
  if(i== 5){write_text(" <font color='#666666'>A few examples might be better than any Help file...</font>",'Mess');document.main.pic.src=inert.src}
  if(i== 6){write_text(" <font color='#666666'>See how the systems of units are defined.</font>",'Mess');document.main.pic.src=inert.src}
  if(i== 7){write_text(" <font color='#666666'>A list of the prefixes you can use.</font>",'Mess');document.main.pic.src=inert.src}
  if(i== 8){write_text(" <font color='#666666'>The JavaScript mathematical functions.</font>",'Mess');document.main.pic.src=inert.src}
  if(i== 9){write_text(" <font color='#666666'>My links to units related sites.</font>",'Mess');document.main.pic.src=inert.src}
  if(i==10){write_text(" Any question, comment, or good idea? Send me an email !",'Mess');document.main.pic.src=happy.src}
  if(i==11){write_text(" <font color='#FF0000'>I can't understand the number you typed !</font>",'Mess');document.main.pic.src=sad.src}
  if(i==12){write_text(" The number you typed is OK.",'Mess');document.main.pic.src=happy.src}
  if(i==13){write_text(" The source unit you typed is OK.",'Mess');document.main.pic.src=happy.src}
  if(i==14){write_text(" <font color='#FF0000'>Problem with the source unit.</font>",'Mess');document.main.pic.src=sad.src}
  if(i==15){write_text(" <font color='#FF0000'>I determine the dimension from the unit you type. You cannot edit it.</font>",'Mess');document.main.pic.src=inert.src}
  if(i==16){write_text(" <font color='#FF0000'>Computing the converted number is my job...</font>",'Mess');document.main.pic.src=inert.src}
  if(i==17){write_text(" The target unit you typed is OK.",'Mess');document.main.pic.src=happy.src}
  if(i==18){write_text(" <font color='#FF0000'>Problem with the target unit.</font>",'Mess');document.main.pic.src=sad.src}
  if(i==19){write_text(" <font color='#FF0000'>Please give me a valid number for 'Vmol' (in liters/mole).</font>",'Mess');document.main.pic.src=sad.src}
  if(i==20){write_text(" OK. I have updated the value of 'Vmol'.",'Mess');document.main.pic.src=happy.src}
  if(i==21){write_text(" <font color='#FF0000'>Please give me a valid number for 'Mmol' (in grams/mole).</font>",'Mess');document.main.pic.src=sad.src}
  if(i==22){write_text(" OK. I have updated the value of 'Mmol'.",'Mess');document.main.pic.src=happy.src}
  if(i==23){write_text(" <font color='#FF0000'>The character ^ is not allowed in this field. Please enter a number A*10^B like this: AeB.</font>",'Mess');document.main.pic.src=sad.src}
  if(i==24){write_text(" The unit is OK, but I don't know the dimension. If you know it, please email me !",'Mess');document.main.pic.src=inert.src}
  if(i==25){write_text(" These are the atomic Hartree units, with a0 = me = q = hbar = 1.",'Mess');document.main.pic.src=inert.src}
  if(i==26){write_text(" These units are such that c = me = q = hbar = 1.",'Mess');document.main.pic.src=inert.src}
  if(i==27){write_text(" These units are such that c = q = GN = hbar = k = 1.",'Mess');document.main.pic.src=inert.src}
  if(i==28){write_text(" These units are such that Am = eV = q = hbar = k = 1.",'Mess');document.main.pic.src=inert.src}
  if(i==29){write_text(" The conversion was successful !",'Mess');document.main.pic.src=happy.src}
  if(i==30){write_text(" The appropriate temperature shift was added.",'Mess');document.main.pic.src=inert.src}
  if(i==31){write_text(" The source and target units are compatible: no need to adapt them.",'Mess');document.main.pic.src=inert.src}
  if(i==32){write_text(" The adaptation was successful !",'Mess');document.main.pic.src=happy.src}
  if(i==33){write_text(" Sorry, the 'Adapt' button cannot work miracles.",'Mess');document.main.pic.src=sad.src}
  if(i==34){write_text(" <font color='#666666'>Examples: &nbsp;</font><font STYLE='font-family:Courier'> 3.14159, -1.2345e-6, 3*14/159, 1-2+3/(4-5), 3*pow(2,1/3), 1/sqrt(2)</font><br>",'Mess');document.main.pic.src=inert.src}
  if(i==35){write_text(" <font color='#666666'>Examples: &nbsp;</font><font STYLE='font-family:Courier'> m, ms, a0, mue, km/hr, kcal/mol, hbar^2/(2 me), MeV/c^2, m^2 kg/s</font>",'Mess');document.main.pic.src=inert.src}
  if(i==36){write_text(" Type a unit here or select a system of units in the menu.",'Mess');document.main.pic.src=inert.src}
  if(i==37){write_text(" <font color='#666666'>For infos on the units and symbols, select the <font color='#000000'>menus</font> or click the <font color='#000000'>By Name</font> and <font color='#000000'>By Symbol</font> buttons.</font>",'Mess');document.main.pic.src=inert.src}
  if(i==38){write_text(" <font color='#FF0000'>This area is reserved for me to talk...</font>",'Mess');document.main.pic.src=inert.src}
}

function fatal(i,s)
// Handles the error messages
{
  error+=1
  if(i!=9&&i!=15){s='<<   '+s+'   >>'}
  if(i== 1){alert('Missing a symbol in front of "^":\n'+s)}
  if(i== 2){alert('Illegal exponent:\n'+s+'\nExponents must be non zero integers.')}
  if(i== 3){alert('Unclosed parenthesis:\n'+s)}
  if(i== 4){alert('Empty parenthesis:\n'+s)}
  if(i== 5){alert('Illegal prefix:\n'+s)}
  if(i== 6){alert('Unknown unit:\n'+s)}
  if(i== 7){alert('Please enter a number in the field\n"Number to convert".')}
  if(i== 8){alert('Please enter a valid unit in the field\n"Unit to convert to",\nor select a system of units in the menu.');error=0}
  if(i== 9){alert('Incompatible units.\n'+s+"\n\nTry the Adapt button.")}
  if(i==10){alert('Missing exponent:\n'+s)}
  if(i==11){alert('Missing denominator.')}
  if(i==12){alert('Unable to adapt the units.')}
  if(i==13){alert('Type a valid unit in the field\n"Unit to convert from".')}
  if(i==14){alert('"0" (zero) is not allowed in this field.')}
  if(i==15){alert('Please enter a valid number in the '+s+' field')}
}

function Infos(select)
// Displays the info on the symbols and units
{
  var i=select.selectedIndex;select.options[0].selected=true
  var s=select.options[i].text;var n=-1
  for(var j=0;j<unit.length;j++){if(unit[j][0][0]==s){n=j}}
  if (n==-1){return}
  var u=ParseUnit(s);var s1=ToSystem(u,SI)
  if(unit[n][3][1]=="")
  {
    if(unit[n][3][2]=="")
    {
      var v=unit[n][2]
    }
    else
    {
      var v=Convert(unit[n][2],ParseUnit(unit[n][3][2]),-1)
    }
    v=format(v,"automatic",5)
  }
  else
  {
    var v=unit[n][3][1]
  }
  if(unit[n][3][2]==""){var s2=s1}else{var s2=unit[n][3][2]};if(s1==""){s1=" "}
  var s3="";for (i=1;i<unit[n][0].length;i++){s3+=', '+unit[n][0][i]};if(s3==""){s3=", none"}
  s3=s3.substring(1,s3.length)
  var s4='<TABLE PADDING=0 CELLPADDING=0 CELLSPACING=0 STYLE="white-space:nowrap"><TR VALIGN="bottom">'
  s4+='<TD HEIGHT="22pt" class="medium"><B>'+s+'</B> is the <B>'+unit[n][3][0]+'</B></TD><TD WIDTH="50px">&nbsp;&nbsp;</TD>'
  s4+='<TD class="small" ALIGN=RIGHT><font color="#666666">Valid synonym(s)&nbsp;:&nbsp;</font></TD>'
  s4+='<TD class="small">'+s3+'</TD></TR><TR VALIGN="bottom">'
  s4+='<TD HEIGHT="22pt" class="medium"><font color="#CC0000">'+s+' = '+v+' '+s2+'</font></TD><TD></TD>'
  s4+='<TD class="small" ALIGN=RIGHT><font color="#666666">Equivalent SI unit&nbsp;:&nbsp;</font></TD>'
  s4+='<TD class="small">'+s1
  if(u[u.length-1]!=" ?"){s4+='&nbsp;&nbsp;&nbsp;('+clean(u[u.length-1])+')'}
  s4+='</TD></TR></TABLE>'
  while(s4.match(/\^(-?\d+)/)){s4=s4.replace(/\^(-?\d+)/,'<SUP class="small">$1</SUP>')}
  write_text(s4,'Mess')
  document.main.pic.src=inert.src
  erase_infos=false
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

function winopen(s1,s2,x1,x2,d1,d2,s3)
{
  escape=true
  var s4="screenX="+x1+",screenY="+x2+",left="+x1+",top="+x2+",width="+d1+",height="+d2+",scrollbars=yes,resizable=yes"+s3
  window.open(s1,s2,s4)
}

happy = new Image(28,28);happy.src="gifs/happy.gif"
sad   = new Image(28,28);sad.src="gifs/sad.gif"
inert = new Image(28,28);inert.src="gifs/inert.gif"

function write_text(what,where)
// Adapted from Peter-Paul Koch code (www.quirksmode.org)
{
  if(document.getElementById)
  {
    x=document.getElementById(where);x.innerHTML='';x.innerHTML=what;
  }
  else if(document.all)
  {
    x=document.all[where];x.innerHTML=what;
  }
}






