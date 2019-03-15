---
title: Troubleshooing a Mac
date: 2019-03-15
---

Issue: Computer is booting in Safe Mode (Shift Key) only

## Do a Diagnostics Test (D) to check computer hardware
[ref link][1]

- Shutdown. Power on and immediately press D. It'll take a few minutes to run tests and give you results.
- Mine gave me _The battery requires service_ Reference Code: `PPT004`
- It'll also give you your Mac's serial number. Mine is:  `C02KTD35F5V7`

## Check System Diagnostics Log file

See [link 1][2], [link 2][3], and [link 3][4]

## Reset PRAM Boot arguments
[ref link][5]

- Power on and immidately press Cmd+Alt+P+R. Release the keys once the system has reset and sounds the boot chime again.
- This didn't work for me

## Reinstall OS X
this might work if third party kexts are being loaded and causing the issue

## Check hard disk
- if you're able to boot in safe mode, open _Disk Utility_ and **Verify Disk**. 
- (Optional) _Verify Disk Permissions_ and repair permissions.
- My hard disk was OK


[1]: https://support.apple.com/en-us/HT202731
[2]: https://discussions.apple.com/docs/DOC-3353https://discussions.apple.com/docs/DOC-3353
[3]: http://apple.stackexchange.com/questions/59917/
[4]: how-do-you-get-system-diagnostic-files-from-os-x
[5]: http://www.macissues.com/2014/07/05/tackle-os-x-only-booting-in-safe-mode/
