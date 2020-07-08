import React from 'react'
import ScrollToBotton from 'react-scroll-to-bottom'

export default class TerminalView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
    }
  }

  async componentDidMount() {
    let msg = `============ start debug info ============
    libhd version 21.68 (x86-64) [7688]
    using /var/lib/hardware
    kernel version is 4.19
    ----- /proc/cmdline -----
    BOOT_IMAGE=/boot/vmlinuz-4.19-x86_64 root=UUID=69d9dd18-36be-4631-9ebb-78f05fe3217f rw quiet resume=UUID=a2092b92-af29-4760-8e68-7a201922573b
    ----- /proc/cmdline end -----
    debug = 0xff7ffff7
    probe = 0x15938fcdaa17fcf9fffe (+memory +pci +isapnp +net +floppy +misc +misc.serial +misc.par +misc.floppy +serial +cpu +bios +monitor +mouse +scsi +usb -usb.mods +modem +modem.usb +parallel +parallel.lp +parallel.zip -isa -isa.isdn +isdn +kbd +prom +sbus +int +braille +braille.alva +braille.fhp +braille.ht -ignx11 +sys -bios.vbe -isapnp.old -isapnp.new -isapnp.mod +braille.baum -manual +fb +pppoe -scan +pcmcia +fork -parallel.imm +s390 +cpuemu -sysfs -s390disks +udev +block +block.cdrom +block.part +edd +edd.mod -bios.ddc -bios.fb -bios.mode +input +block.mods +bios.vesa -cpuemu.debug -scsi.noserial +wlan -bios.crc -hal +bios.vram +bios.acpi -bios.ddc.ports=0 +modules.pata -net.eeprom +x86emu=dump -max -lxrc)
    shm: attached segment 2129939 at 0x7ff3608d8000
    >> hal.1: read hal data
    >> floppy.1: get nvram
    >> floppy.2: klog info
    >> bios.1: cmdline
    >> bios.1.1: apm
    >> bios.2: ram
    /dev/mem[0x400, 256]: mmap(, 4096,,,, 0x0) ok
    /dev/mem[0xc0000, 262144]: mmap(, 262144,,,, 0xc0000) ok
      bios: 2 disks
      bios: 634k low mem
    /dev/mem[0x9e800, 1]: mmap(, 4096,,,, 0x9e000) ok
    /dev/mem[0x9e800, 2048]: mmap(, 4096,,,, 0x9e000) ok
      bios: EBDA 0x00800 bytes at 0x9e800
    >> bios.2: rom
    ----- SMBIOS Entry Point (sysfs) 0x00000 - 0x0001e -----
      000  5f 53 4d 5f 59 1f 02 08 1f 01 00 00 00 00 00 00  "_SM_Y..........."
      010  5f 44 4d 49 5f 96 23 0a e0 5f 0e 00 30 00 28  "_DMI_.#.._..0.("
    ----- SMBIOS Entry Point (sysfs) end -----
      Found DMI table at 0x000e5fe0 (0x0a23 bytes)
      Got DMI table from sysfs (0x0a23 bytes)
    ----- SMBIOS Structure Table 0xe5fe0 - 0xe6a02 -----
      e5fe0  00 18 00 00 01 02 00 e0 03 5f 80 98 f9 4b 00 00  "........._...K.."
      e5ff0  1a 00 03 0d 01 23 01 23 4c 45 4e 4f 56 4f 00 43  ".....#.#LENOVO.C"
      e6000  44 43 4e 33 35 57 57 00 30 33 2f 32 39 2f 32 30  "DCN35WW.03/29/20"
    .
    .`
    const msgSplit = msg.split('\n')
    for (let line of msgSplit) {
      line = line.trim()
      for (let i = 0; i < line.length; i++) {
        this.setState({ msg: this.state.msg + line.charAt(i) })
        await this.sleep(3)
      }
      this.setState({ msg: this.state.msg + '\n' })
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  render() {
    return (
      <ScrollToBotton className="feed">
        <pre>{this.state.msg}</pre>
      </ScrollToBotton>
    )
  }
}
