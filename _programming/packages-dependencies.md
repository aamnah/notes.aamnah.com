---
layout: post
title: Packages and Dependencies
subtitle: What are packages, dependencies, libs and dependency managers
permalink: packages-and-dependencies
ctime: 2016-01-12
mtime: 2017-03-13
---

They call it package, because many times you would have a collection of libraries that are packaged together, and you download that package rather than each individual library. As for dependency, many times a package will depend on another package, and the dependency manager can help solve that problem.

A dependency manager also takes care of versioning and package updates.

Each programming language has it's own flavor of dependency manager. For instance, for Javascript Node.js you have NPM, for Ruby you have Bundler, for Python Pip, etc.

| Language | Dependency Manager |
|-------------|---------------------------|
| JavaScrippt, Node.js | npm |
| Ruby | Bundler |
| Python | pip |
| Swift, Objective-C Cocoa | [CocoaPods](https://cocoapods.org) |
| PHP | Composer |