1. Search filter, i picked this one cause this is the one that i keep having trouble of while building the page.

So basically when i type a letter on the search box and the moment i press the key it counts as an input event and my listener wakes up and gets passed an object automatically and thats how addevent listener works, it always gives yout functions the event info even tho your not requesting it.

2. Two event hitting the same elements at once.
Js is a single threaded so they never actually run at the same time even if they fire close. they line up in the event loop and get processed one at a time so whichever finish last is the winner and my set timeout in the characters counter is the one exception since it gets pushed to the back of the queue so the order swift if another event sneaks in while waiting.

3. Same pattern outside of the web dev.
first one is phone apps, you can tap or swipe the trigger and some listener in the background calls a functions.
second games, when a player gets hit a on damage listener runs and lower the player health.
third smart home, for example a motion sensor light so whenever a motion gets sense a light turns on.
last keyboard, a keypress is an interrupt that gets processed by a listener deciding which app it goes to
