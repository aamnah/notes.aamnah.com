---

title: iOS, Bluetooth Low Energy (BLE), CoreBluetooth and Swift - for noobs
date: 2016-08-28 15:35:22.000000000 +05:00
type: post
published: true
status: publish
categories: []
tags:
- ios
- bluetooth
- CoreBlueooth
---

This [talk by Yoav Shwartz](https://realm.io/news/yoav-schwartz-corebluetooth-peripherals/) on the Realm.io site and this [post by Ryan Jones](https://medium.com/@ryanjjones10/how-to-set-up-ble-with-swift-2-2-34bb6f209de2) on Medium are the best starting points I have come across. 

The official documentation by Apple on CoreBluetooth is in Objective-C, which sucks because Objective-C looks like gibberish to me and i want to write Swift code. You can still read the docs though, they have listed [best practices](https://developer.apple.com/library/ios/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/BestPracticesForInteractingWithARemotePeripheralDevice/BestPracticesForInteractingWithARemotePeripheralDevice.html) to work with BLE and CoreBluettoth.

You do need to have an iOS device in order to use CoreBlueooth, it is not supported in the Simulator. It was, originally, but they removed it after a year because BLE got more advanced and it was difficult to remove inconsistencies between Mac and iPhone implementations, or sumthin' like that..

Look at other people's Swift code dealing with CoreBluetooth on Github.
