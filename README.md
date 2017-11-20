# briefly
Briefly is a super lightweight library for parsing `Date`s. It's just a bunch of functions.

## Why?
We were working in a project and noticed that another hugely popular library does a *lot* of stuff, but most importantly, a *lot* of stuff we didn't need. This library aims to do the exact opposite: it only does a few things, but it's tiny and simple. It's about 100x smaller than the library we were using on our compiled application.

## What does it do?
It formats `Date`s (or returns a formatted `new Date()`).

## Using briefly
Import the methods you want to use. These are the methods currently available:

### formatISO
Handles "YYYY/MM/DD HH:mm:SS" Date formats for Safari. 	Returns a date in the YYYY/MM/DDTHH:mm:SS format

### ddmmyyISO
Returns in the  `DD/MM/YYYY ISO` format (see formatISO above). 
Example: `04-08-2016`

### ddmmyyyy
Returns in the  DD/MM/YYYY  format. 
Example: `04/08/2016`


### ddmm
Returns date in the `DD/MM` format.
Example: `14/07`
	

### hhmm
Returns date in the `HH:MM` format.
xample: `16:08`

### hhmmddmm
Returns date in the `HH:MM DD/MM` format.
Example: `16:08 14/07`	

### hhmmss
Returns date in the `HH:MM:SS` format.
Example: `16:08:22`

### weekDayFull
Returns a localized weekday string for a given date. Accepts two parameters: `date` and `lang`, where `lang` is the desired ![language](https://github.com/pgsil/briefly/tree/master/src/langs).
Example: `sunday`/`domingo`/`日曜日`
