const menu = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => { 
 
// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭─────────────────
│▢ • ${prefix}menuvip
│⫸ Funções exclusivas
╞─────────────────
│▢ • ${prefix}menumetodos
│⫸ Métodos de WhatsApp
╞─────────────────
│▢ • ${prefix}menufigurinhas
│⫸ Funções de stickers
╞─────────────────
│▢ • ${prefix}menudowloand
│⫸ Funções de dowloand
╞─────────────────
│▢ • ${prefix}menuhentai
│⫸ Funções adultas
╞─────────────────
│▢ • ${prefix}menudono
│⫸ Funções do meu dono
╞─────────────────
│▢ • ${prefix}menuadm
│⫸ Funções para admins
╞─────────────────
│▢ • ${prefix}menulogos
│⫸ Funções de logo maker
╞─────────────────
│▢ • ${prefix}menudiversao
│⫸ Funções divertidas
╞─────────────────
│▢ • ${prefix}menualteradores
│⫸ Funções de alterações
╞─────────────────
│▢ • ${prefix}menuanimes
│⫸ Funções otakus
╞───────────────
│▢ • ${prefix}menuoutros
│⫸ Funções diversas
╰─────────────────
`;
};

exports.menu = menu;

// MENU DE ADMINISTRADORES 

const adms = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => { 
 
// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ ATIVAÇÕES ⪨━━
│▢ • ${prefix}antifoto [1 ou 0]
│▢ • ${prefix}antivideo [1 ou 0]
│▢ • ${prefix}antiaudio [1 ou 0]
│▢ • ${prefix}antisticker [1 ou 0]
│▢ • ${prefix}antilocalizacao [1 ou 0]
│▢ • ${prefix}anticontato [1 ou 0]
│▢ • ${prefix}antidocumento [1 ou 0]
│▢ • ${prefix}antilinkgrupo [1 ou 0]
│▢ • ${prefix}antilinkhard [1 ou 0]
│▢ • ${prefix}antifake [1 ou 0]
│▢ • ${prefix}antinotas [1 ou 0]
│▢ • ${prefix}anticatalogo [1 ou 0]
│▢ • ${prefix}antipalavra [1 ou 0]
│▢ • ${prefix}bemvindo [1 ou 0]
│▢ • ${prefix}bemvindo2 [1 ou 0]
│▢ • ${prefix}autoresposta [1 ou 0]
│▢ • ${prefix}limitecaracteres [1 ou 0]
│▢ • ${prefix}autosticker [1 ou 0]
│▢ • ${prefix}leveling [1 ou 0]
│▢ • ${prefix}modobrincadeira [1 ou 0]
│▢ • ${prefix}soadm [1 ou 0]
│▢ • ${prefix}revelarvisuunica [1 ou 0]
│▢ • ${prefix}avisarmudancaadm [1 ou 0]
│▢ • ${prefix}msgstemporarias [1 ou 0]
╰━━─「📌」─━━

╭━━⪩ CONFIGURAÇÕES/PUNIÇÕES ⪨━━
│▢ • ${prefix}recrutar [número de telefone completo]
│▢ • ${prefix}advertir [marcar mensagem da pessoa]
│▢ • ${prefix}roletarussa
│▢ • ${prefix}rankinativos
│▢ • ${prefix}inativos [quantidade de mensagens]
│▢ • ${prefix}expulsarbot
│▢ • ${prefix}revelarenigma
│▢ • ${prefix}revelarresposta
│▢ • ${prefix}resetforca
│▢ • ${prefix}resetjv
│▢ • ${prefix}redefinirlink
│▢ • ${prefix}legendaantivideo [texto]
│▢ • ${prefix}legendaantifake [texto]
│▢ • ${prefix}legendaantifoto [texto]
│▢ • ${prefix}legendaantidocumento [texto]
│▢ • ${prefix}requestgp list
│▢ • ${prefix}aceitarentrada [número de telefone]
│▢ • ${prefix}recusarentrada [número de telefone]
│▢ • ${prefix}banghost [quantidade de mensagens]
│▢ • ${prefix}blacklist
│▢ • ${prefix}addblacklist [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}delblacklist [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}addadmsblacklist [link de um grupo]
│▢ • ${prefix}legendabv [texto]
│▢ • ${prefix}legendabv2 [texto]
│▢ • ${prefix}legendasaiu [texto]
│▢ • ${prefix}legendasaiu2 [texto]
│▢ • ${prefix}multiprefixo
│▢ • ${prefix}addprefixo [prefixo]
│▢ • ${prefix}delprefixo [prefixo]
│▢ • ${prefix}mute [@marcar pessoa]
│▢ • ${prefix}desmute [@marcar pessoa]
│▢ • ${prefix}ban [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}promover [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}rebaixar [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}editardadosgp ["all" ou "adms"]
│▢ • ${prefix}tirarfotogp
│▢ • ${prefix}descricaogp [texto]
│▢ • ${prefix}nomegp [texto]
│▢ • ${prefix}grupo ["f" ou "a"]
│▢ • ${prefix}status
│▢ • ${prefix}limpar 
│▢ • ${prefix}atividades
│▢ • ${prefix}linkgp
│▢ • ${prefix}grupoinfo
│▢ • ${prefix}hidetag [sua mensagem ou marcar mídia]
│▢ • ${prefix}marcar [sua mensagem (opcional)]
│▢ • ${prefix}marcar2 [sua mensagem (opcional)]
│▢ • ${prefix}marcarwame [sua mensagem (opcional)]
│▢ • ${prefix}criartabela [texto]
│▢ • ${prefix}tabelagp
╰━━─「💡」─━━`;
};

exports.adms = adms;

// MENU DE DONO

const menudono = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {
	
// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ MENU DONO ⪨━━
│▢ • ${prefix}odelete [1 ou 0]
│▢ • ${prefix}verificado-global
│▢ • ${prefix}audio-menu
│▢ • ${prefix}openai [token]
│▢ • ${prefix}visualizarmsg
│▢ • ${prefix}console 
│▢ • ${prefix}botoff
│▢ • ${prefix}boton
│▢ • ${prefix}stickerid [marcar figurinha]
│▢ • ${prefix}registraraluguel [número da pessoa/dia(s)]
│▢ • ${prefix}deletarregistroaluguel
│▢ • ${prefix}registraraluguel24h
│▢ • ${prefix}registraraluguel48h
│▢ • ${prefix}listaalugueis
│▢ • ${prefix}reviverqr
│▢ • ${prefix}listblock
│▢ • ${prefix}sync
│▢ • ${prefix}delcontador [@marcar pessoa]
│▢ • ${prefix}addblacklistglobal [número de telefone completo ou marcar mensagem]
│▢ • ${prefix}delblacklistglobal [número de telefone completo ou marcar mensagem]
│▢ • ${prefix}bangp
│▢ • ${prefix}unbangp
│▢ • ${prefix}sairgpnumber [número da lista]
│▢ • ${prefix}saldo add [@marcar pessoa + saldo]
│▢ • ${prefix}saldo del [@marcar pessoa + saldo]
│▢ • ${prefix}listuservip
│▢ • ${prefix}fotomenu [marcar foto]
│▢ • ${prefix}blockcmd [comando]
│▢ • ${prefix}unblockcmd [comando]
│▢ • ${prefix}addcmdprem [comando]
│▢ • ${prefix}delcmdprem [comando]
│▢ • ${prefix}addindocmd [comando/texto]
│▢ • ${prefix}delinfocmd [comando]
│▢ • ${prefix}fundobemvindo [marcar foto]
│▢ • ${prefix}fundosaiu [marcar foto]
│▢ • ${prefix}listagp
│▢ • ${prefix}cases
│▢ • ${prefix}transmitir [mensagem de aviso]
│▢ • ${prefix}rgtm
│▢ • ${prefix}tirardatm
│▢ • ${prefix}listatm
│▢ • ${prefix}join [link do grupo]
│▢ • ${prefix}substituir [marcar documento ou arquivo]
│▢ • ${prefix}addpalavraforca [título|tema|dica]
│▢ • ${prefix}delpalavraforca [palavra]
│▢ • ${prefix}delpremium [@marcar pessoa]
│▢ • ${prefix}addpremium [@marcar pessoa]
│▢ • ${prefix}privphotobot ["all", "cntt" ou "ngm"]
│▢ • ${prefix}privaddgroup ["all", "cntt" ou "ngm"]
│▢ • ${prefix}clonar [@marcar pessoa]
│▢ • ${prefix}fotobot [marcar foto]
│▢ • ${prefix}block [@marcar pessoa]
│▢ • ${prefix}unblock [@marcar pessoa]
│▢ • ${prefix}setprefix [prefixo]
╰━━─「⚙️」─━━`;
};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {
  
// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

  
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ LOGOS DE VÍDEO ⪨━━
│▢ • ${prefix}pubgv [texto]
│▢ • ${prefix}natalmsg [texto]
│▢ • ${prefix}anonovo [texto]
│▢ • ${prefix}trigrev [texto]
╰━━─「🎬」─━━

╭━━⪩ LOGOS DE 3 TEXTOS ⪨━━
│▢ • ${prefix}googlesg [texto/texto/texto]
╰━━─「3️⃣」─━━

╭━━⪩ LOGOS DE 2 TEXTOS ⪨━━
│▢ • ${prefix}glitch [texto/texto]
│▢ • ${prefix}glitch3 [texto/texto]
│▢ • ${prefix}grafity [texto/texto]
│▢ • ${prefix}space [texto/texto]
│▢ • ${prefix}marvel [texto/texto]
│▢ • ${prefix}gameplay [texto/texto]
│▢ • ${prefix}stone [texto/texto]
│▢ • ${prefix}steel [texto/texto]
│▢ • ${prefix}ffbanner [texto/texto]
│▢ • ${prefix}avatar [texto/texto]
│▢ • ${prefix}videogame [texto/texto]
│▢ • ${prefix}pubg [texto/texto]
│▢ • ${prefix}thorstyle [texto/texto]
╰━━─「2⃣」─━━

╭━━⪩ LOGOS DE 1 TEXTO ⪨━━
│▢ • ${prefix}neonlight [texto] 
│▢ • ${prefix}orangejuice [texto]
│▢ • ${prefix}rainbowequalizer [texto]
│▢ • ${prefix}peridot [texto]
│▢ • ${prefix}rock [texto]
│▢ • ${prefix}esmeralda [texto]
│▢ • ${prefix}3ddragon [texto]
│▢ • ${prefix}purpleshiny [texto]
│▢ • ${prefix}robotr2 [texto]
│▢ • ${prefix}berry [texto]
│▢ • ${prefix}hologram [texto]
│▢ • ${prefix}cartoon [texto]
│▢ • ${prefix}deepsea [texto]
│▢ • ${prefix}shadow-sky [texto]
│▢ • ${prefix}metallic [texto]
│▢ • ${prefix}logoneon [texto]
│▢ • ${prefix}ninjalogo [texto]
│▢ • ${prefix}harry-potter [texto]
│▢ • ${prefix}flower-typography [texto]
│▢ • ${prefix}butterfly [texto]
│▢ • ${prefix}starballons [texto]
│▢ • ${prefix}frozen [texto]
│▢ • ${prefix}3dsilver [texto]
│▢ • ${prefix}goldtext [texto]
│▢ • ${prefix}illuminated-metallic [texto]
│▢ • ${prefix}sweet-candy [texto]
│▢ • ${prefix}strawberry [texto]
│▢ • ${prefix}seta [texto]
│▢ • ${prefix}grafite [texto]
│▢ • ${prefix}goldt [texto]
│▢ • ${prefix}tela [texto]
│▢ • ${prefix}3dboxtxt [texto]
│▢ • ${prefix}chocolate-cake [texto]
│▢ • ${prefix}magma [texto]
│▢ • ${prefix}green-horror [texto]
│▢ • ${prefix}blackpink2 [texto]
│▢ • ${prefix}logobear [texto]
│▢ • ${prefix}flaming [texto]
│▢ • ${prefix}carved-wood [texto]
│▢ • ${prefix}night-sky [texto]
│▢ • ${prefix}naturalleaves [texto]
│▢ • ${prefix}candycane [texto]
│▢ • ${prefix}christmas [texto]
│▢ • ${prefix}merrychristmas [texto]
│▢ • ${prefix}3ddeep [texto]
│▢ • ${prefix}drug [texto]
│▢ • ${prefix}americanflag [texto]
│▢ • ${prefix}scifi [texto]
│▢ • ${prefix}sandsummer [texto]
│▢ • ${prefix}desfocado [texto]
│▢ • ${prefix}vietnam [texto]
│▢ • ${prefix}brilhante [texto]
│▢ • ${prefix}sandwriting [texto]
│▢ • ${prefix}sandengraved [texto]
│▢ • ${prefix}summerysand [texto]
│▢ • ${prefix}glue [texto]
│▢ • ${prefix}dark [texto]
│▢ • ${prefix}galaxystyle [texto]
│▢ • ${prefix}minion [texto]
│▢ • ${prefix}horrorgift [texto]
│▢ • ${prefix}holographic [texto]
│▢ • ${prefix}deluxe [texto]
│▢ • ${prefix}glossyblue [texto]
│▢ • ${prefix}deluxegold [texto]
│▢ • ${prefix}glossycarbon [texto]
│▢ • ${prefix}fabric [texto]
│▢ • ${prefix}watercolor [texto]
│▢ • ${prefix}1917 [texto]
│▢ • ${prefix}multicolor [texto]
│▢ • ${prefix}generator [texto]
│▢ • ${prefix}wonderful [texto]
│▢ • ${prefix}holiday [texto]
│▢ • ${prefix}technology [texto]
│▢ • ${prefix}winter [texto]
│▢ • ${prefix}neontext [texto]
│▢ • ${prefix}halloweenfire [texto]
│▢ • ${prefix}metaldark [texto]
│▢ • ${prefix}darkgold [texto]
│▢ • ${prefix}wicker [texto]
│▢ • ${prefix}firework [texto]
│▢ • ${prefix}steeltext [texto]
│▢ • ${prefix}goldfoil [texto]
│▢ • ${prefix}ultragloss [texto]
│▢ • ${prefix}denimtext [texto]
│▢ • ${prefix}stargreen [texto]
│▢ • ${prefix}captain [texto]
│▢ • ${prefix}toxic [texto]
│▢ • ${prefix}ninjalogo [texto]
│▢ • ${prefix}txtquadrinhos [texto]
│▢ • ${prefix}hackneon [texto]
│▢ • ${prefix}equipemascote [texto]
│▢ • ${prefix}ffavatar [texto]
│▢ • ${prefix}gizquadro [texto]
│▢ • ${prefix}angelglx [texto]
│▢ • ${prefix}wingeffect [texto]
│▢ • ${prefix}angelwing [texto]
│▢ • ${prefix}blackpink [texto]
│▢ • ${prefix}girlmascote [texto]
│▢ • ${prefix}mascotegame [texto]
│▢ • ${prefix}fpsmascote [texto]
│▢ • ${prefix}logogame [texto]
│▢ • ${prefix}glitch2 [texto]
│▢ • ${prefix}3dgold [texto]
│▢ • ${prefix}placaloli [texto]
│▢ • ${prefix}phadow [texto]
│▢ • ${prefix}efeitoneon [texto]
│▢ • ${prefix}cemiterio [texto]
│▢ • ${prefix}metalgold [texto]
│▢ • ${prefix}narutologo [texto]
│▢ • ${prefix}narutologo2 [texto]
│▢ • ${prefix}fire [texto]
│▢ • ${prefix}romantic [texto]
│▢ • ${prefix}smoke [texto]
│▢ • ${prefix}papel [texto]
│▢ • ${prefix}lovemsg [texto]
│▢ • ${prefix}lovemsg2 [texto]
│▢ • ${prefix}lovemsg3 [texto]
│▢ • ${prefix}coffecup [texto]
│▢ • ${prefix}coffecup2 [texto]
│▢ • ${prefix}cup [texto]
│▢ • ${prefix}florwooden [texto]
│▢ • ${prefix}lobometal [texto]
│▢ • ${prefix}harryp [texto]
│▢ • ${prefix}txtborboleta [texto]
│▢ • ${prefix}madeira [texto]
│▢ • ${prefix}pornhublogo [texto]
│▢ • ${prefix}escudo [texto]
│▢ • ${prefix}transformer [texto]
│▢ • ${prefix}america [texto]
│▢ • ${prefix}demongreen [texto]
│▢ • ${prefix}wetglass [texto] 
│▢ • ${prefix}toxic [texto]
│▢ • ${prefix}neon3 [texto]
│▢ • ${prefix}neondevil [texto]
│▢ • ${prefix}neongreen [texto]
│▢ • ${prefix}lava [texto]
│▢ • ${prefix}halloween [texto]
│▢ • ${prefix}neondevil [texto]
│▢ • ${prefix}demonFire [texto]
│▢ • ${prefix}demonGreen [texto]
│▢ • ${prefix}thunderv2 [texto]
│▢ • ${prefix}thunder [texto]
│▢ • ${prefix}colaq [texto]
│▢ • ${prefix}luxury [texto]
│▢ • ${prefix}berry [texto]
│▢ • ${prefix}transformer [texto]
│▢ • ${prefix}matrix [texto]
│▢ • ${prefix}horror [texto]
│▢ • ${prefix}nuvem [texto]
│▢ • ${prefix}neon [texto]
│▢ • ${prefix}neon1 [texto]
│▢ • ${prefix}neon2 [texto]
│▢ • ${prefix}neon3d [texto]
│▢ • ${prefix}neongreen [texto]
│▢ • ${prefix}neon3 [texto]
│▢ • ${prefix}neve [texto]
│▢ • ${prefix}areia [texto]
│▢ • ${prefix}vidro [texto]
│▢ • ${prefix}style [texto]
│▢ • ${prefix}pink [texto]
│▢ • ${prefix}carbon [texto]
│▢ • ${prefix}metalblue [texto]
│▢ • ${prefix}jeans [texto]
│▢ • ${prefix}ossos [texto]
│▢ • ${prefix}asfalto [texto]
│▢ • ${prefix}3dgoldenblack [texto]
│▢ • ${prefix}natal [texto]
│▢ • ${prefix}jokerlogo [texto]
│▢ • ${prefix}blood [texto]
│▢ • ${prefix}break [texto]
│▢ • ${prefix}fiction [texto]
│▢ • ${prefix}3dstone [texto]
│▢ • ${prefix}lapis [texto]
│▢ • ${prefix}gelo [texto]
│▢ • ${prefix}rainbow [texto]
│▢ • ${prefix}metalfire [texto] 
│▢ • ${prefix}cria [texto] 
│▢ • ${prefix}anime1 [texto] 
│▢ • ${prefix}anime2 [texto] 
│▢ • ${prefix}ff1 [texto] 
│▢ • ${prefix}ff2 [texto] 
│▢ • ${prefix}game [texto] 
│▢ • ${prefix}entardecer [texto] 
│▢ • ${prefix}indian [texto] 
│▢ • ${prefix}ffrose [texto] 
│▢ • ${prefix}ffgren [texto] 
│▢ • ${prefix}chufuyu [texto]
│▢ • ${prefix}wolf [texto]
│▢ • ${prefix}dragonred [texto] 
│▢ • ${prefix}purple [texto] 
╰━━─「1⃣」─━━`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.


return`​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ ALTERADORES DE VÍDEO ⪨━━
│▢ • ${prefix}videolento [marcar vídeo]
│▢ • ${prefix}videorapido [marcar vídeo]
│▢ • ${prefix}videocontrario [marcar vídeo]
│▢ • ${prefix}tomp3 [marcar vídeo]
│▢ • ${prefix}ptvmsg [marcar vídeo]
╰━━─「📹」─━━

╭━━⪩ ALTERADORES DE ÁUDIO ⪨━━
│▢ • ${prefix}audiolento [marcar áudio]
│▢ • ${prefix}audiorapido [marcar áudio]
│▢ • ${prefix}grave [marcar áudio]
│▢ • ${prefix}grave2 [marcar áudio]
│▢ • ${prefix}esquilo [marcar áudio]
│▢ • ${prefix}estourar [marcar áudio]
│▢ • ${prefix}bass [marcar áudio]
│▢ • ${prefix}bass2 [marcar áudio]
│▢ • ${prefix}vozmenino [marcar áudio]
╰━━─「🎵」─━━

╭━━⪩ MONTAGENS DE IMAGEM ⪨━━
│▢ • ${prefix}legenda [marcar foto]
│▢ • ${prefix}caveira [marcar foto]
│▢ • ${prefix}animeia [marcar foto]
│▢ • ${prefix}comunismo [marcar foto]
│▢ • ${prefix}bolsonaro [marcar foto]
│▢ • ${prefix}bnw [marcar foto]
│▢ • ${prefix}beautiful [marcar foto]
│▢ • ${prefix}blur [marcar foto]
│▢ • ${prefix}affect [marcar foto]
│▢ • ${prefix}del [marcar foto]
│▢ • ${prefix}circle [marcar foto]
│▢ • ${prefix}beautiful [marcar foto]
│▢ • ${prefix}dither [marcar foto]
│▢ • ${prefix}facepalm [marcar foto]
│▢ • ${prefix}invert [marcar foto]
│▢ • ${prefix}lgbt [marcar foto]
│▢ • ${prefix}magik [marcar foto]
│▢ • ${prefix}rotate [marcar foto]
│▢ • ${prefix}rip [marcar foto]
│▢ • ${prefix}jail [marcar foto]
│▢ • ${prefix}trash [marcar foto]
│▢ • ${prefix}pixelate [marcar foto]
│▢ • ${prefix}sepia [marcar foto]
│▢ • ${prefix}wanted [marcar foto] 
│▢ • ${prefix}wasted [marcar foto] 
╰━━─「🖼️」─━━
`;
};

exports.alteradores = alteradores;

// MENU PREMIUM

const menuvip = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => { 

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.


return `​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ PLAQUINHAS ⪨━━
│☆ • ${prefix}plaq [seu nome ou nick]
│☆ • ${prefix}plaq2 [seu nome ou nick]
│☆ • ${prefix}plaq3 [seu nome ou nick]
│☆ • ${prefix}plaq4 [seu nome ou nick]
│☆ • ${prefix}plaq5 [seu nome ou nick]
│☆ • ${prefix}plaq6 [seu nome ou nick]
│☆ • ${prefix}plaq7 [seu nome ou nick]
│☆ • ${prefix}plaq8 [seu nome ou nick]
╰━━─「🍑」─━━

╭━━⪩ CONSULTAS ⪨━━
│☆ • ${prefix}nome [nome da pessoa]
│☆ • ${prefix}nome2 [nome da pessoa]
│☆ • ${prefix}cpf1 [número do CPF]
│☆ • ${prefix}cpf2 [número do CPF]
│☆ • ${prefix}cpf3 [número do CPF]
│☆ • ${prefix}cpf4 [número do CPF[
│☆ • ${prefix}tel1 [número de telefone]
│☆ • ${prefix}tel2 [número de telefone]
│☆ • ${prefix}tel3 [número de telefone]
│☆ • ${prefix}parentes [número do CPF]
│☆ • ${prefix}beneficios [número do CPF]
│☆ • ${prefix}score [número do CPF]
│☆ • ${prefix}placa1 [número da placa de veículo]
│☆ • ${prefix}placa2 [número da placa de veículo]
│☆ • ${prefix}cnpj [número do CNPJ]
│☆ • ${prefix}site [domínio de site]
│☆ • ${prefix}email [endereço de email]
│☆ • ${prefix}bin [número do BIN]
│☆ • ${prefix}rg [número do RG]
│☆ • ${prefix}banco [instituição]
╰━━─「🌐」─━━
`;
};

exports.menuvip = menuvip;

// MENU DIVERSÃO

const diversao = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.


return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ BRINCADEIRAS ⪨━━
│▢ • ${prefix}gay [só o comando ou @marcar pessoa]
│▢ • ${prefix}feio [só o comando ou @marcar pessoa]
│▢ • ${prefix}corno [só o comando ou @marcar pessoa]
│▢ • ${prefix}vesgo [só o comando ou @marcar pessoa]
│▢ • ${prefix}bebado [só o comando ou @marcar pessoa]
│▢ • ${prefix}gostoso [só o comando ou @marcar pessoa]
│▢ • ${prefix}gostosa [só o comando ou @marcar pessoa]
│▢ • ${prefix}beijo [@marcar pessoa]
│▢ • ${prefix}matar [@marcar pessoa]
│▢ • ${prefix}tapa [@marcar pessoa]
│▢ • ${prefix}chute [@marcar pessoa]
│▢ • ${prefix}dogolpe [@marcar pessoa]
│▢ • ${prefix}nazista [só o comando ou @marcar pessoa]
│▢ • ${prefix}surubao [quantidade]
│▢ • ${prefix}quando [sua pergunta]
│▢ • ${prefix}chance [texto]
│▢ • ${prefix}casal
│▢ • ${prefix}shipo [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}death [nome]
╰━━─「🤡」─━━

╭━━⪩ RANKINGS ⪨━━
│▢ • ${prefix}rankgay 
│▢ • ${prefix}rankgado
│▢ • ${prefix}rankcorno 
│▢ • ${prefix}rankgostoso
│▢ • ${prefix}rankgostosa
│▢ • ${prefix}ranknazista
│▢ • ${prefix}rankotakus
│▢ • ${prefix}rankpau 
│▢ • ${prefix}mencionar [texto]
╰━━─「😽」─━━

╭━━⪩ JOGOS ⪨━━
│▢ • ${prefix}ppt [pedra, papel, tesoura]
│▢ • ${prefix}escolha
│▢ • ${prefix}cassino
│▢ • ${prefix}dado
│▢ • ${prefix}caracoroa
│▢ • ${prefix}enigma [1 ou 0]
│▢ • ${prefix}gartic [1 ou 0]
│▢ • ${prefix}jogodaforca
│▢ • ${prefix}anagrama [1 ou 0]
│▢ • ${prefix}quizanimais [1 ou 0]
│▢ • ${prefix}jogodavelha [@marcar pessoa]
╰━━─「🎮」─━━

╭━━⪩ ENTRETENIMENTO ⪨━━
│▢ • ${prefix}namorar [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}cancelarpedido
│▢ • ${prefix}terminarnamoro
│▢ • ${prefix}minhadupla
│▢ • ${prefix}rgtinder [nome/idade/bio/gênero + marcar foto/vídeo]
│▢ • ${prefix}tinder
│▢ • ${prefix}tindernumber [número de sequência]
│▢ • ${prefix}metch [número de telefone completo tudo junto]
│▢ • ${prefix}correio [número de telefone completo/sua mensagem]
│▢ • ${prefix}docfake [nome|tamanho|formato]
│▢ • ${prefix}perfil
╰━━─「🙉」─━━
`;
};

exports.diversao = diversao;

const porno = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date)=> {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.


return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ PORNÔ ⪨━━
│▢ • ${prefix}pornhub [palavra-chave]
│▢ • ${prefix}pornogratis [palavra-chave]
│▢ • ${prefix}onlyfansfoto
│▢ • ${prefix}onlyfansvideo
╰━━─「🔞」─━━

╭━━⪩ HENTAI ⪨━━
│▢ • ${prefix}ahegao
│▢ • ${prefix}ass
│▢ • ${prefix}bdsm
│▢ • ${prefix}blowjob
│▢ • ${prefix}cuckold 
│▢ • ${prefix}cum
│▢ • ${prefix}ero
│▢ • ${prefix}femdom
│▢ • ${prefix}foot
│▢ • ${prefix}gangbang
│▢ • ${prefix}glasses
│▢ • ${prefix}jahy
│▢ • ${prefix}manga
│▢ • ${prefix}masturbation
│▢ • ${prefix}neko
│▢ • ${prefix}orgy
│▢ • ${prefix}panties
│▢ • ${prefix}pussy
│▢ • ${prefix}neko2
│▢ • ${prefix}tentacles
│▢ • ${prefix}thighs
│▢ • ${prefix}yuri
│▢ • ${prefix}zettai
╰━━─「😺」─━━
`;
};

exports.porno = porno;


const animes = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.


return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ VÍDEOS DE ANIME ⪨━━
│▢ • ${prefix}random
│▢ • ${prefix}bleach
│▢ • ${prefix}chainsaw
│▢ • ${prefix}dragonball
│▢ • ${prefix}kimetsu
│▢ • ${prefix}jujutsu
│▢ • ${prefix}narutovid
╰━━─「🎈」─━━

╭━━⪩ IMAGENS DE ANIME ⪨━━
│▢ • ${prefix}metadinha
│▢ • ${prefix}shota 
│▢ • ${prefix}waifu 
│▢ • ${prefix}loli2 
│▢ • ${prefix}yotsuba 
│▢ • ${prefix}shinomiya 
│▢ • ${prefix}yumeko 
│▢ • ${prefix}tejina 
│▢ • ${prefix}chiho 
│▢ • ${prefix}boruto 
│▢ • ${prefix}kaori 
│▢ • ${prefix}shizuka 
│▢ • ${prefix}kaga 
│▢ • ${prefix}kotori 
│▢ • ${prefix}mikasa 
│▢ • ${prefix}akiyama 
│▢ • ${prefix}gremory 
│▢ • ${prefix}isuzu 
│▢ • ${prefix}shina 
│▢ • ${prefix}kagura 
│▢ • ${prefix}shinka 
│▢ • ${prefix}eba 
│▢ • ${prefix}elaina 
│▢ • ${prefix}erza 
│▢ • ${prefix}hinata 
│▢ • ${prefix}minato 
│▢ • ${prefix}naruto 
│▢ • ${prefix}sagiri 
│▢ • ${prefix}nezuko 
│▢ • ${prefix}rize 
│▢ • ${prefix}deidara 
│▢ • ${prefix}yuki 
│▢ • ${prefix}ana 
│▢ • ${prefix}asuna 
│▢ • ${prefix}ayuzawa 
│▢ • ${prefix}chitoge 
│▢ • ${prefix}emilia 
│▢ • ${prefix}hestia 
│▢ • ${prefix}inori 
│▢ • ${prefix}itachi 
│▢ • ${prefix}madara  
│▢ • ${prefix}sakura 
│▢ • ${prefix}sasuke 
│▢ • ${prefix}tsunade 
│▢ • ${prefix}onepiece 
│▢ • ${prefix}mobil 
│▢ • ${prefix}montor 
│▢ • ${prefix}keneki 
│▢ • ${prefix}megumin 
│▢ • ${prefix}toukachan 
│▢ • ${prefix}itori 
│▢ • ${prefix}kurumi 
│▢ • ${prefix}sakurajima 
│▢ • ${prefix}miku 
│▢ • ${prefix}pokemon 
╰━━─「🎇」─━━
`;
};

exports.animes = animes;

const menuoutros = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return`╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ UTILIDADES ⪨━━
│▢ • ${prefix}pix
│▢ • ${prefix}cuttly [seu link]
│▢ • ${prefix}bitly [seu link]
│▢ • ${prefix}tinyurl [seu link]
│▢ • ${prefix}ausente [motivo]
│▢ • ${prefix}ativo
│▢ • ${prefix}destrava
│▢ • ${prefix}destrava2
│▢ • ${prefix}tabela
│▢ • ${prefix}fazernick [seu nome ou nick]
│▢ • ${prefix}printsite [URL]
│▢ • ${prefix}htmlsite [URL]
│▢ • ${prefix}frase [nome de uma celebridade ou personagem famoso]
│▢ • ${prefix}anotar [título|texto]
│▢ • ${prefix}tirarnota [título]
│▢ • ${prefix}anotacoes
│▢ • ${prefix}quantidadeletras [palavra]
│▢ • ${prefix}infonumero [número de telefone completo sem espaços, "+" e "-"]
│▢ • ${prefix}wame
│▢ • ${prefix}wametxt [seu texto]
│▢ • ${prefix}imgpralink [marcar foto]
│▢ • ${prefix}videopralink [marcar vídeo]
│▢ • ${prefix}imgpralink [marcar foto]
│▢ • ${prefix}criarqrcode [seu texto ou link]
╰━━─「💢」─━━

╭━━⪩ GERADORES ⪨━━
│▢ • ${prefix}gerarcpf
│▢ • ${prefix}geraremail
│▢ • ${prefix}gerargrupos [categoria]
│▢ • ${prefix}gerarnumerobuzon  [número de telefone com DDI do país, DDD da cidade, 4/5 primeiros dígitos, letra 'x' repetida 4 vezes no lugar dos últimos quatro dígitos + quantidade de números pra gerar. Exemplo: 55918257xxxx 10]
╰━━─「🌀」─━━

╭━━⪩ CONTAS ⪨━━
│▢ • ${prefix}disney
│▢ • ${prefix}deezermusic
│▢ • ${prefix}nordvpn
│▢ • ${prefix}crunchyroll
│▢ • ${prefix}star
│▢ • ${prefix}hbomax
│▢ • ${prefix}netflix
│▢ • ${prefix}ufc
│▢ • ${prefix}express
│▢ • ${prefix}paramount
│▢ • ${prefix}pmrj
│▢ • ${prefix}credlink
│▢ • ${prefix}sp-pni
╰━━─「📱」─━━

╭━━⪩ INFORMAÇÕES ⪨━━
│▢ • ${prefix}checkativo [@marcar pessoa]
│▢ • ${prefix}ping
│▢ • ${prefix}ranklevel
│▢ • ${prefix}rankativo
│▢ • ${prefix}tagme
╰━━─「📲」─━━

╭━━⪩ SUPORTE ⪨━━
│▢ • ${prefix}sugestao [dica]
│▢ • ${prefix}infocmd [comando]
│▢ • ${prefix}idiomas
│▢ • ${prefix}bug [erro]
│▢ • ${prefix}criador
│▢ • ${prefix}avalie [feedback]
╰━━─「🆘」─━━
`;
};

exports.menuoutros = menuoutros;

const dowloand = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return`​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ DOWLOANDERS ⪨━━
│▢ • ${prefix}playdoc [nome]
│▢ • ${prefix}playmix [nome]
│▢ • ${prefix}play [nome ou link]
│▢ • ${prefix}playvideo [nome ou link]
│▢ • ${prefix}audiomeme [nome] 
│▢ • ${prefix}shazam [marcar áudio]
│▢ • ${prefix}spotify [nome]
│▢ • ${prefix}facebook [link]
│▢ • ${prefix}instagram [link]
│▢ • ${prefix}twitter [link]
│▢ • ${prefix}tiktok [link]
│▢ • ${prefix}tiktokfoto [link]
│▢ • ${prefix}pinterest [nome]
│▢ • ${prefix}drive [link]
│▢ • ${prefix}deezer [nome]
│▢ • ${prefix}soundcloud [link]
│▢ • ${prefix}kwai [link] 
│▢ • ${prefix}mediafire [link]
│▢ • ${prefix}gitclone [link]
╰━━─「▶️」─━━

╭━━⪩ PESQUISAS ⪨━━
│▢ • ${prefix}google [título da pesquisa]
│▢ • ${prefix}clima [cidade]
│▢ • ${prefix}rastrear [código]
│▢ • ${prefix}githubstalker [nome de perfil]
│▢ • ${prefix}instagramstalker [nome de perfil]
│▢ • ${prefix}tiktokstalker [nome de perfil]
│▢ • ${prefix}cotacao
│▢ • ${prefix}ddd [número do DDD]
│▢ • ${prefix}cep [número do CEP]
│▢ • ${prefix}ip [número do IP]
│▢ • ${prefix}memedroid
│▢ • ${prefix}memeifunny
│▢ • ${prefix}receita [prato]
│▢ • ${prefix}amazon [nome]
│▢ • ${prefix}nasa [dia-mês-ano]
│▢ • ${prefix}book [nome do livro]
│▢ • ${prefix}movie [nome do filme]
│▢ • ${prefix}serie [nome da série]
│▢ • ${prefix}lyrics [nome da música]
│▢ • ${prefix}lyrics2 [nome da música]
│▢ • ${prefix}playstore [nome do app]
│▢ • ${prefix}aptoide [nome do APK]
│▢ • ${prefix}signo [seu signo]
│▢ • ${prefix}celular [marca e modelo]
│▢ • ${prefix}mlsrc [palavra-chave]
│▢ • ${prefix}wikipedia [título da página]
│▢ • ${prefix}bing [palavra-chave]
│▢ • ${prefix}americanas [palavra-chave]
╰━━─「🔭」─━━

╭━━⪩ PAPÉIS DE PAREDE ⪨━━
│▢ • ${prefix}wpsatanic
│▢ • ${prefix}wptech
│▢ • ${prefix}wpanime
│▢ • ${prefix}wpcyberspace
│▢ • ${prefix}wpgaming
│▢ • ${prefix}wpppcouple
│▢ • ${prefix}wppubg
│▢ • ${prefix}wpaesthetic
╰━━─「🖼️」─━━

╭━━⪩ JORNALISMO ⪨━━
│▢ • ${prefix}noticias [tema]
│▢ • ${prefix}esporte
│▢ • ${prefix}cnnbrasil 
│▢ • ${prefix}g1
│▢ • ${prefix}poder360 
│▢ • ${prefix}uol
│▢ • ${prefix}jovempan
╰━━─「📰」─━━

╭━━⪩ INTELIGÊNCIA ARTIFICIAL ⪨━━
│▢ • ${prefix}corretor [texto]
│▢ • ${prefix}lerqrcode [marcar foto]
│▢ • ${prefix}animechar [marcar foto]
│▢ • ${prefix}bard [pergunta ou pedido]
│▢ • ${prefix}drex [pergunta ou pedido]
│▢ • ${prefix}gpt2 [pergunta ou pedido]
│▢ • ${prefix}gpt3 [pergunta ou pedido]
│▢ • ${prefix}gptvoz [pergunta ou pedido]
│▢ • ${prefix}summerize [texto]
│▢ • ${prefix}redacao [tema]
│▢ • ${prefix}imagine [definição da foto]
│▢ • ${prefix}gptfoto [definição da foto]
│▢ • ${prefix}cantada
│▢ • ${prefix}conselhobiblico
│▢ • ${prefix}calcular [conta]
│▢ • ${prefix}gtts [idioma + texto]
│▢ • ${prefix}fato
│▢ • ${prefix}removerfundo [marcar foto]
│▢ • ${prefix}fotohd [marcar foto]
╰━━─「🤖」─━━
`;
};

exports.dowloand = dowloand;

const figurinhas = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return`​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ GERAR FIGURINHAS ⪨━━
│▢ • ${prefix}ttp [texto]
│▢ • ${prefix}ttp2 [texto]
│▢ • ${prefix}attp [texto]
│▢ • ${prefix}attp2 [texto]
│▢ • ${prefix}attp3 [texto]
│▢ • ${prefix}attp4 [texto]
│▢ • ${prefix}attp5 [texto]
│▢ • ${prefix}attp6 [texto]
│▢ • ${prefix}stickeroriginal [marcar foto ou vídeo]
│▢ • ${prefix}sticker [marcar foto ou vídeo]
│▢ • ${prefix}stickersemfundo [marcar foto]
│▢ • ${prefix}toimg [marcar figurinha parada]
│▢ • ${prefix}togif [marcar figurinha animada]
│▢ • ${prefix}emoji [emoji/serviço]
│▢ • ${prefix}emojimix [emoji+emoji]
│▢ • ${prefix}roubar [texto/texto]
│▢ • ${prefix}qc [mensagem para fake chat]
╰━━─「🎴」─━━

╭━━⪩ PACKS DE FIGURINHAS ⪨━━
│▢ • ${prefix}figurinhas
│▢ • ${prefix}figumemes [quantidade]
│▢ • ${prefix}figuemoji [quantidade]
│▢ • ${prefix}figuflork [quantidade]
│▢ • ${prefix}figucoreana [quantidade]
│▢ • ${prefix}figubebe [quantidade]
│▢ • ${prefix}figuanime [quantidade]
│▢ • ${prefix}figufunny [quantidade]
│▢ • ${prefix}figuanimais [quantidade]
│▢ • ${prefix}figudesenho [quantidade]
│▢ • ${prefix}figuraiva [quantidade]
│▢ • ${prefix}figuroblox [quantidade]
│▢ • ${prefix}figaleatoria
╰━━─「💌」─━━
`;
};

exports.figurinhas = figurinhas;

const metodos = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return`​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ MÉTODOS FREE ⪨━━
│▢ • ${prefix}desbanperma [número de telefone completo]
│▢ • ${prefix}desbanperma2 [número de telefone completo]
│▢ • ${prefix}desbanperma3 [número de telefone completo]
│▢ • ${prefix}desbanperma4 [número de telefone completo]
│▢ • ${prefix}desbanperma5 [número de telefone completo]
│▢ • ${prefix}desbanperma6 [número de telefone completo]
│▢ • ${prefix}blindarnumero [número de telefone completo]
│▢ • ${prefix}desbananalise [número de telefone completo]
│▢ • ${prefix}desbananalise2 [número de telefone completo]
│▢ • ${prefix}resetarcodigo [número de telefone completo]
│▢ • ${prefix}resetarcodigo2 [número de telefone completo]
│▢ • ${prefix}resetarcodigo3 [número de telefone completo]
╰━━─「⚡」─━━
`;
};

exports.metodos = metodos;

const menubanco = (prefix, isPremium, pushname, SoDono, isGroup, isGroupAdmins, time, date) => {

// NÃO APAGUE esse ${prefix} nem ${isPremium} nem ${pushname} nem ${isGroupAdmins} nem ${time} nem ${date} e não coloque nada ${dentro assim} essas definições estão puxando dos arquivos settings.json e index.js, só pode alterar a base dos menus, menos as definições.

return`​╭━━⪩ SOBRE ⪨━━
│▢ • Nome: ${pushname}
│▢ • Hierarquia: ${isGroup ? (SoDono ? '👨🏻‍💻 Desenvolvedor' : (isGroupAdmins ? '👔 Admin' : '👤 Membro comum')) : (SoDono ? '👨🏻‍💻 Desenvolvedor' : '👤 Utilizador')}
│▢ • ${isPremium ? '🌟 Usuário VIP' : '🆓 Usuário free'}
│▢ • Hora: ${time}
│▢ • Data: ${date}
╰━━─「ℹ️」─━━

╭━━⪩ BANCO ⪨━━
│▢ • ${prefix}carteira
│▢ • ${prefix}apostar [valor]
│▢ • ${prefix}assaltar [@marcar pessoa]
│▢ • ${prefix}peixaria
│▢ • ${prefix}acougue
│▢ • ${prefix}minerar
│▢ • ${prefix}protecao
│▢ • ${prefix}desproteger [marcar mensagem ou @marcar pessoa]
│▢ • ${prefix}transferir [@marcar pessoa/valor]
│▢ • ${prefix}hackear [@marcar pessoa]
╰━━─「🏦」─━━
`;
};

exports.menubanco = menubanco;