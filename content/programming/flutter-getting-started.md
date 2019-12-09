---
title: Getting started with Flutter
date: 2019-11-24
---

### Setting up on Linux

#### Download and extract the Flutter SDK
  - Extract the tarball where you want, usual places are `/usr/local/` and `/opt`
  - Update `$PATH`

#### Install VS Code extension `ext install ms-vscode.cpptools`

At this point, if you run `flutter doctor` it'll look up your system for development capabilities. For example, it told me i didn't have the Android toolchain and Android studio not installed so couldn't develop for Android. Also, no connected devices.

- Install Android SDK separately to avoid issues with finding Android SDK later
  - `apt install android-sdk` will install to `/usr/lib/android-sdk`
- Tried installing Android SDK separately, Android Studio gave the _location not accesible_ error. Went back to installing in home directory.

#### [Install Android Studio](https://developer.android.com/studio/install)

  - Extract the tarball where you want, usual places are `/usr/local/` and `/opt`
  - InstallAndroid Studio  by running `./studio.sh` inside the `android-studio/bin` directory
  - Add Android Studio to `$PATH`
  - Add shortcut: _Tools > Create Desktop Entry_ from the Android Studio menu bar

#### Setup Android device

  - Enable Developer Mode (Tap _System > About > Build number_ 7 times) and USB Debugging (_System > Developer options_) on Phone 
  - Install `adb` on my Linux system: `sudo apt install adb`
  - Make sure you're in `plugdev` group `sudo usermod -aG pugdev $LOGNAME` (your user is  likely to already be in the `plugdev` group..)
  - Make sure you are connected in File Transfer Mode (MTP). It'll show you a prompt asking for permission to allow remote debugging.
  - Run `flutter devices` to make sure your device is connected. (You can also try `adb devices`)

```bash
# ~/.bashrc

# Add Futter SDK to PATH
export PATH="$PATH:/media/aamnah/Files/Dev/flutterSDK/bin"

# Add  Android Studio to PATH
export PATH="$PATH:/media/aamnah/Files/Dev/android-studio/bin"

# Set ANDROID_HOME
# i did this because i had moved the `~/.android` directory because i was low on space
export ANDROID_HOME="/media/aamnah/Files/Dev/androidSDK"
```

At the end of it all, your `flutter doctor` output will look like this:

```
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, v1.9.1+hotfix.6, on Linux, locale en_US)
[✓] Android toolchain - develop for Android devices (Android SDK version 29.0.2)
[✓] Android Studio (version 3.5)
[✓] Connected device (1 available)

• No issues found!
```

### Getting started with Flutter

Create a flutter app

```bash
flutter create myapp
flutter run
```

The app name needs to be `lowercase_with_underscore`

#### Enable web apps

- Web support is not in production yet, it's only available for testing
- Debugging for web only works in Chrome

```bash
 flutter channel dev
 flutter upgrade
 flutter config --enable-web
 cd <into project directory>
 flutter create .
 flutter run -d chrome
 ```

 ```bash
 # generate a release build
 flutter build web
 ```
