import{_ as e,e as o}from"./app.a1eec05e.js";var t="/SteamTools-Guide/assets/reset-host.c6e13d8f.png";const r={},a=o('<h1 id="network-issues" tabindex="-1"><a class="header-anchor" href="#network-issues" aria-hidden="true">#</a> Network issues</h1><h2 id="host-file-related-read-only-access-denied-no-privileges" tabindex="-1"><a class="header-anchor" href="#host-file-related-read-only-access-denied-no-privileges" aria-hidden="true">#</a> Host file related (read-only, access denied, no privileges)</h2><ul><li><p>Please go to <code>C:\\Windows\\System32\\drivers\\etc</code>, right-click on the <code>host</code> file, open <code>Properties</code> and uncheck the <code>Read-only</code> option below.</p></li><li><p>Read-only may also be occupied by other software or blocked by anti-virus software. If the <code>hosts</code> file has no custom content, you can delete the file before starting it, or use the system agent mode with the file located at <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p></li><li><p>Or automatically reset the host problem with a disconnected one-click repair program, such as <code>360 Disconnect First Aid</code> <code>FireWire Disconnect Repair</code></p></li></ul><h2 id="unable-to-connect-to-the-network-after-a-program-crash" tabindex="-1"><a class="header-anchor" href="#unable-to-connect-to-the-network-after-a-program-crash" aria-hidden="true">#</a> Unable to connect to the network after a program crash</h2><ul><li><p>After the program crashes during acceleration, the community/game server cannot be connected because the <code>127.0.0.1</code> written to the <code>host</code> after the crash has not been eliminated properly, you can cancel the acceleration and reopen it, or you can clean up the <code>host</code> file manually</p></li><li><p>Or you can automatically reset the <code>host</code> problem with a one-click repair program, such as <code>360 Disconnect First Aid</code>, <code>FireWire Disconnect Repair</code>.</p></li></ul><blockquote><p>The problem of no network after a crash is due to the normal logic of accelerating and stopping acceleration, because the program was forced to quit in acceleration, so the logic of stopping acceleration was not executed, and the configuration modified by acceleration was not restored.</p><p>If you encounter this problem, you can try to restore the hosts file, close the windows system agent, and reset the network service.</p></blockquote><p><img src="'+t+'" alt="Reset host file"></p>',7);function c(i,s){return a}var d=e(r,[["render",c],["__file","Network problems.html.vue"]]);export{d as default};