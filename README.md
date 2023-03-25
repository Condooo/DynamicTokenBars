# Dynamic Token Bars
A simple Roll20 script to display or hide token bars depending on whether combat is active.

Token bar visibility is set depending on whether the turn tracker is open, updating as the turn tracker is opened or closed, or when players are moved to a new page, with the option to set/clear specific bars as permanently visible regardless of the turn tracker status.

Currently only sets visibility for players - token bars remain visible for GMs.

## Commands
`!dtb --pb [bar index]` Permanent Bars: Set the token bar at the given index to be permanently visible, remaining visible after the turn tracker is closed.<br>
`!dtb --clear` Clear: Clear all permanently visible token bars, setting them to show/hide with the turn tracker. 

## Version History
* `0.1` Initial commit
