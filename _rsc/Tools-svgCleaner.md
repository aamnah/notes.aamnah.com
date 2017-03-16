# SVG Cleaner

Here are the install instructions for Linux Ubuntu 16.04 LTS

For _SVG Cleaner_ you need to install Rust compiler and Cargo. Cargo is the package manager for Rust. The packages are called _crates_..

### install Rust compiler

```bash
curl https://sh.rustup.rs -sSf | sh
```

it'll ask you for installation option and then take a while (downloads 100MiB+) to install.

During installation, rustup, will attempt to configure PATH, but because of differences between platforms, command shells, and bugs in rustup, the modifications to PATH may not take effect until the console is restarted, or the user logged out, or may not succeed at all.

If, after installation, running `rustc --version` in the console fails, this is the most likely reason.

Add Rust Compiler to `PATH`

```bash
export PATH=$PATH:$HOME/.cargo/bin
```

Check if rust compiler is recognized

```bash
rustc --version
```

### install SVG Cleaner (CLI tool)

install SVG cleaner (v0.8.0 as of this writing)

```bash
cargo install svgcleaner
```

If you're using Rust and Cargo for the first time, it'll take a while to update registry..

### install SVG Cleaner GUI

install SVG cleaner GUI (v0.8.0 as of this writing)

```bash
cd ~/Downloads
mkdir svgcleaner-gui
cd svgcleaner-gui
wget https://github.com/RazrFalcon/svgcleaner-gui/releases/download/v0.8.0/svgcleaner-gui_linux_x86_64_0.8.0.tar.gz
tar -zxvf svgcleaner-gui_linux_x86_64_0.8.0.tar.gz

# to be continued..
```


Links
---
- [Install Rust](https://www.rust-lang.org/en-US/install.html)
- [Github: SVG Cleaner](https://github.com/RazrFalcon/svgcleaner)
- [Github: SVG Cleaner GUI](https://github.com/RazrFalcon/svgcleaner-gui)