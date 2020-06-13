<template>
  <div>
    <button @click="cmd1">亮</button>
    <button @click="cmd2">灭</button>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';

export default {
  methods: {
    cmd1() {
      ipcRenderer.send('serialPort:write', Buffer.from([0x01, 0x05, 0x00, 0x00, 0xFF, 0x00, 0x8C, 0x3A]));
    },
    cmd2() {
      ipcRenderer.send('serialPort:write', Buffer.from([0x01, 0x05, 0x00, 0x00, 0x00, 0x00, 0xCD, 0xCA]));
    },
  },
};
</script>
