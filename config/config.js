module.exports = {

  Prefix: "!", // YOUR BOT PREFIX.

  Black_list: ["https://stresser.website", "172.66.43.44", "https://www.kvacdoor.cz", "172.67.172.229"],
  
  Method: {
    layer4: ['DNS-AMP', 'MIX-AMP', 'TCP-SYN', 'TCP-SYN-ACK', 'UDP-PPS', 'UDP-RAW', 'HOME', 'PROTOCOL-RANDOM', 'HANDSHAKE', 'TIBIA-BYPASS', 'BBHOST-STANDARD', 'BBHOST-PRO', 'TYNAHOST', 'HETZNER', 'OVH-HANDSHAKE', 'OVH-UDP', 'OVH-GAMING', 'MINECRAFT-MCPE', 'MINECRAFT-JOIN', 'MINECRAFT-MOTD', 'MINECRAFT-MOTD-JOIN', 'FIVEM-BYPASS', 'SAMP', 'MTA-BYPASS', 'RUST-UDP', 'GMOD-UDP', 'ROBLOX-UDP', 'VALVE-UDP', 'HANDSHAKE', 'DNS-PROVIDERS', 'NTP-PROVIDERS', 'DVR-PROVIDERS', 'MIX-PROVIDERS', 'TYNAHOST-HOSTING', 'ENXADAHOST-HOSTING', 'GAMERSCLUB-HOSTING', 'DNS-NUKE', 'SYN-NUKE', 'UDP-NUKE', 'HANDSHAKE-NUKE'],
    layer7: ['HTTP-RAW', 'HTTPS-RAW', 'HTTP-BYPASS', 'HTTPS-BROWSER', 'HTTPS-BYPASS', 'CF-BYPASS', 'CF-UAM-BYPASS', 'CF-PRO-BYPASS',  'HTTP-NUKE', 'HTTPS-NUKE'],
    network: ['']
  },

  Users: {
    OWNERS: ["328960300193939458"] // THE BOT OWNERS ID.
  },

  Handlers: {
    MONGO: "" // YOUR MONGO URI. (USE THIS ONLY IN VSCODE)
  },

  Sliver: {
    id: ["1054518884625031280"],
    roleid: "",
    Concurrents: 1,
    maxtime: 60
  },

  Gold: {
    id: ["624666217034154005"],
    roleid: "",
    Concurrents: 3,
    maxtime: 400
  },

  GOD: {
    id: ["575712504081285131","686258626410577925","516640699203059712","307512442617856000","800474485995732992","328960300193939458","1041870101080715374"],
    roleid: "",
    Concurrents: 10,
    maxtime: 1400,
  },

  icon: {
    setimage: "https://media.tenor.com/54mjjpuowCgAAAAM/ninjala-jane.gif",
    check: "<:check:1065008129894514751>",
    error: "<:error:1065008222727061514>"

  },

  Client: {
    TOKEN: "MTA2NDk3NzI1OTgwODY4NjA4MA.GeA1Ih.NEXYqkdNn-IlX3mVv9ot8s_WNldJLzyw1Ix40w", // YOUR BOT TOKEN. (USE THIS ONLY IN VSCODE)
    ID: "1064977259808686080" // YOUR BOT ID.
  }

}
