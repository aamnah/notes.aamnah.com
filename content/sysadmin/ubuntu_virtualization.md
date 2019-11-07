---
title: Enabling Virtualization on Ubuntu
date: 2019-04-02
status: draft

---

- Enable virtualization in BIOS . For Asus motherboard with Intel CPU, go to BIOS (Press F7 for Advanced Mode) > Advanced > System Agent Configuration > VT-d (Virtualization) > Enable
- Install libs

```bash
sudo apt install -y virt-manager

sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils ia32-libs-multiarch
```

- `vert-manager` will install the `qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils` packages as part of install


```bash
sudo apt-get install -y cpu-checker

egrep -c '(vmx|svm)' /proc/cpuinfo
```

- `cpu-checker` will give you the `kvm-ok` command

```bash
kvm-ok
INFO: /dev/kvm does not exist
HINT:   sudo modprobe kvm_intel
INFO: For more detailed results, you should run this as root
HINT:   sudo /usr/sbin/kvm-ok
```

```bash
sudo kvm-ok
INFO: /dev/kvm does not exist
HINT:   sudo modprobe kvm_intel
INFO: Your CPU supports KVM extensions
INFO: KVM (vmx) is disabled by your BIOS
HINT: Enter your BIOS setup and enable Virtualization Technology (VT),
      and then hard poweroff/poweron your system
KVM acceleration can NOT be used
```