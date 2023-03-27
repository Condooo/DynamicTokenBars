# Dynamic Token Bars
A simple Roll20 script to display or hide token bars depending on whether combat is active.

Token bar visibility is set depending on whether the turn tracker is open, updating as the turn tracker is opened or closed, or when players are moved to a new page, with the option to set/clear specific bars as permanently visible regardless of the turn tracker status.

Currently only sets visibility for players - token bars remain visible for GMs.

## Commands
* `!dtb --pb [bar index]` Permanent Bars: Set the token bar at the given index to be permanently visible, remaining visible after the turn tracker is closed.<br>
* `!dtb --seeall` See All: Option to toggle `See All`, allowing players to see all other token bars in addition to their own.<br>
* `!dtb --clear` Clear: Clear all permanently visible token bars and `See All` status, reverting to default behaviour.

## Version History
* `0.2.1` Set token bars to update when `See All` is enabled/disabled
* `0.2` Added ability to toggle `See All`
* `0.1` Initial commit
