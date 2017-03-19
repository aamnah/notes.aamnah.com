# CocoaPods

CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. Kinda like what npm is for Node.js and what Composer is for PHP.

tl;dr
---

```bash
sudo gem install cocoapods
cd project-dir
pod init 
# edit the Podfile
pod install
# open the .xcworkspace file and get to work
```

install

```bash
sudo gem install cocoapods
```

```bash
pod setup --verbose
```

create an Xcode project, save it, exit Xcode.

Now open Terminal, `cd` into the directory of your project, and run

```bash
pod init
```

this will create a `Podfile` in your project dir. This is the equivalent of `package.json` for`npm` in Node. Here you should uncomment the `platform :ios, '9.0'` and add the pods you want included before the `end`. For example: `pod 'Moltin'`

```bash
# Uncomment this line to define a global platform for your project
platform :ios, '9.0'

target 'MoltinShoppingApp' do
  # Comment this line if you're not using Swift and don't want to use dynamic frameworks
  use_frameworks!

  # Pods for MoltinShoppingApp
  pod 'Moltin'
end
```

Save the file, close. Now run:

```bash
pod install
```
to install your pods. You should see something like this:

```bash
$ pod install
Analyzing dependencies
Downloading dependencies
Installing AFNetworking (3.1.0)
Installing Moltin (1.1.5)
Generating Pods project
Integrating client project

[!] Please close any current Xcode sessions and use `MoltinShoppingApp.xcworkspace` for this project from now on.
Sending stats
Pod installation complete! There is 1 dependency from the Podfile and 2 total pods installed.
```
From now on, in order to access your installed projects, you should be using the `.xcworkspace` file to open the Xcode project.

That's it. Note that if your Pod is in objective-c, you might need to add a _bridging header_ to be able to use it in your Swift project.


Links
---

- https://cocoapods.org/
- [Youtube: Build a Shopping App with Moltin - Ep 3 - Xcode project, Cocoapods and Moltin SDK](https://www.youtube.com/watch?v=2Ai433HaTjo)