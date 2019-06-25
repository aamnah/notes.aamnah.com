---
title: Getting started with Expo
date: 2019-04-01
lastmod: 2019-04-03

---

```bash
npx expo-cli init


cd PROJECT_SLUG
yarn start
```

Upload your project to Expo

```bash
expo login

? Username/Email Address: aamnah
? Password: [hidden]

Success. You are now logged in as aamnah.
```

```bash
expo publish
```

- `publish` will deploy your proh=ject to the Expo site and you'll be able to preview it with `https://expo.io/@USERNAME/PROJECT`. 
- If you have _distributed_ your app to the app stores, that app will get automatically updated (Over The Air - OTA updates) when you publish changes to your Expo project URL.

---


```bash
# install CLI tool
npm install -g expo-cli

# create a project
cd
expo init
```

It'll ask you what template to use, i went with Tabs, then it'll ask for project name and slug, and if you have Yarn installed it'll ask you if you want to use Yarn to install dependencies.

The `slug` will be the name of the folder Expo creates for the project

```bash
# start dev server
npm start
# or
yarn start
```

It'll open the app in browser `http://localhost:19002/` and show a QR code that you can scan in the Expo mobile client to view the app on your phone.

### Install Expo Client on your phone

- Download for Android from the [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) 
- Download for iOS from the [App Store](https://itunes.com/apps/exponent)

### Setup Android Emulator
- Download and Install Android Studio (almost 1 GB in download, took almost half an hour)
- Enable Developer Mode on Android. _Settings > Abou Phone > System_. Tap `Build number` 7 times.
- Install ADB `sudo apt install -y adb`
- Make sure you're in `plugdev` group (use the `id` command to find out). If not, use this command to add yourself `sudo usermod -aG plugdev $LOGNAME`


```bash
npm run android 
```

### Build

Get a `apk` or `ipa` ready to submit to Play Store or App Store

```bash
exp build:ios 
```


Links
---

- [Expo Docs](https://docs.expo.io/)
- [Android Studio: Run apps on a hardware device](https://developer.android.com/studio/run/device.html#developer-device-options)