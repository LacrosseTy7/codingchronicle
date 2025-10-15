const games = [
    {
        name: 'Boredom Button',
        image: 'images/ebd3jso5iogfsjh25lsdklj/button.png',
        class: 'boredom-button',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/boredom button.html"><img class="bored-button-shortcut-icon game-shortcut-icon" src="images/ebd3jso5iogfsjh25lsdklj/button.png"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/boredom button.html',
        price: 'Free'
    }, {
        name: 'Rock Paper Scissors',
        image: 'ebd3jso5iogfsjh25lsdklj/images/Rock-Paper-Scissors-Logo.webp',
        class: 'rock-paper-scissors',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/rock-paper-scissors.html"><img class="rps-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/Rock-Paper-Scissors-Logo.webp"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/rock-paper-scissors.html',
        price: 'Free'
    }, {
        name: 'Henry Stickmin',
        image: 'ebd3jso5iogfsjh25lsdklj/images/henrystickmincollection.jpg',
        class: 'stickmin-collection',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/stickmincollection.html"><img class="henry-collection-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/henrystickmincollection.jpg"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/stickmincollection.html',
        price: 'Free'
    }, {
        name: 'Escape 40 Times',
        image: 'ebd3jso5iogfsjh25lsdklj/images/40xescape.jpg',
        class: 'escape-40x',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/40exescape.html"><img class="40x-escape-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/40xescape.jpg"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/40exescape.html',
        price: 'Free'
    }, {
        name: 'Abandoned',
        image: 'ebd3jso5iogfsjh25lsdklj/images/abandoned.jpg',
        class: 'abandoned',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/abandoned.html"><img class="abandoned-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/abandoned.jpg"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/abandoned.html',
        price: 'Free'
    }, {
        name: 'Angry Birds',
        image: 'ebd3jso5iogfsjh25lsdklj/images/angry birds.png',
        class: 'angry-birds',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/Angrybirds.html"><img class="angry-birds-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/angry birds.png"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/Angrybirds.html',
        price: 'Free'
    }, {
        name: 'Black Jack Battle',
        image: 'ebd3jso5iogfsjh25lsdklj/images/blackjackbattle.webp',
        class: 'black-jack-battle',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/blackjackbattle.html"><img class="bjb-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/blackjackbattle.webp"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/blackjackbattle.html',
        price: 'Free'
    }, {
        name: 'Castle Wars Modern',
        image: 'ebd3jso5iogfsjh25lsdklj/images/castlewars.jpg',
        class: 'castle-wars',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/castlewarsmodern.html"><img class="castle-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/castlewars.jpg"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/castlewarsmodern.html',
        price: 'Free'
    }, {
        name: 'Cookie Clicker',
        image: 'ebd3jso5iogfsjh25lsdklj/images/cookieclicker',
        class: 'cookie-clicker',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/cookieclickercool.html"><img class="cc-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/cookieclicker"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/cookieclickercool.html',
        price: 'Free'
    }, {
        name: 'Obby Robby',
        image: 'ebd3jso5iogfsjh25lsdklj/images/obbyrobby',
        class: 'obby-robby',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/obbyonlyup.html"><img class="or-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/obbyrobby"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/obbyonlyup.html',
        price: 'Free'
    }, {
        name: 'Kitten Cannon',
        image: 'ebd3jso5iogfsjh25lsdklj/images/kittencannon',
        class: 'kitten-cannon',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/simplePlanes.html"><img class="kc-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/kittencannon"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/simplePlanes.html',
        price: 'Free'
    }, {
        name: '1v1 Lol',
        image: 'ebd3jso5iogfsjh25lsdklj/images/1v1lol',
        class: 'lol-1v1',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/1v1maybeidk.html"><img class="1v1-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/1v1lol"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/1v1maybeidk.html',
        price: 'Free'
    }, {
        name: '12 Mini Battles',
        image: 'ebd3jso5iogfsjh25lsdklj/images/minibattles',
        class: 'mini-battles',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/12minibattles.html"><img class="12mb-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/minibattles"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/12minibattles.html',
        price: 'Free'
    }, {
        name: 'Banjo and Kazooie',
        image: 'ebd3jso5iogfsjh25lsdklj/images/banjokazooie',
        class: 'banjo-kazooie',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/banjokazooie.html"><img class="bk-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/banjokazooie"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/banjokazooie.html',
        price: 'Free'
    }, {
        name: 'Bit Planes',
        image: 'ebd3jso5iogfsjh25lsdklj/images/bitplanes',
        class: 'bit-planes',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/bitplanes.html"><img class="bp-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/bitplanes"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/bitplanes.html',
        price: 'Free'
    }, {
        name: 'Gladihoppers',
        image: 'ebd3jso5iogfsjh25lsdklj/images/gladihoppers-logo',
        class: 'gladihoppers',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/gladihoppers.html"><img class="gh-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/gladihoppers-logo"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/gladihoppers.html',
        price: 'Free'
    }, {
        name: 'Block Blast',
        image: 'ebd3jso5iogfsjh25lsdklj/images/blockblast',
        class: 'block-blast',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/blockblast.html"><img class="blbl-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/blockblast"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/blockblast.html',
        price: 'Free'
    }, {
        name: 'Burrito Bison Launcha Libre',
        image: 'ebd3jso5iogfsjh25lsdklj/images/burritobison',
        class: 'burrito-bison',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/burritobisonlaunchalibre.html"><img class="bbll-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/burritobison"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/burritobisonlaunchalibre.html',
        price: 'Free'
    }, {
        name: 'Diddy Kong Racing',
        image: 'ebd3jso5iogfsjh25lsdklj/images/kongracing',
        class: 'kong-racing',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/diddykongracing.html"><img class="dkr-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/kongracing"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/diddykongracing.html',
        price: 'Free'
    }, {
        name: 'Doge Miner',
        image: 'ebd3jso5iogfsjh25lsdklj/images/dogeminer',
        class: 'doge-miner',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/dogeminer.html"><img class="dm-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/dogeminer"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/dogeminer.html',
        price: 'Free'
    }, {
        name: 'Escape Road',
        image: 'ebd3jso5iogfsjh25lsdklj/images/escaperoad',
        class: 'escape-road',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/escaperoad.html"><img class="er-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/escaperoad"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/escaperoad.html',
        price: 'Free'
    }, {
        name: 'Feed Us 3',
        image: 'ebd3jso5iogfsjh25lsdklj/images/feedus',
        class: 'feed-us',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/feedus3.html"><img class="fu3-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/feedus"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/feedus3.html',
        price: 'Free'
    }, {
        name: 'PolyTrack',
        image: 'ebd3jso5iogfsjh25lsdklj/images/polytrack',
        class: 'poly-track',
        shortcutHTML: '<a href="ebd3jso5iogfsjh25lsdklj/polytrack.html"><img class="poly-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/polytrack"></a>',
        href: 'ebd3jso5iogfsjh25lsdklj/polytrack.html',
        price: 'Free'
    }, {
        name: 'Papas Collection',
        image: 'ebd3jso5iogfsjh25lsdklj/images/papas-logo',
        class: 'papas',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/papa's.html"><img class="papas-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/papas-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/papa's.html",
        price: 'Free'
    }, {
        name: 'Infinite Craft',
        image: 'ebd3jso5iogfsjh25lsdklj/images/infinitecraft-logo',
        class: 'infinite-craft',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/infinitecraft.html"><img class="infinite-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/infinitecraft-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/infinitecraft.html",
        price: 'Free'
    }, {
        name: 'Drive Mad',
        image: 'ebd3jso5iogfsjh25lsdklj/images/drivemad-logo',
        class: 'drive-mad',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/drivemad.html"><img class="drive-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/drivemad-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/drivemad.html",
        price: 'Free'
    }, {
        name: 'Geometry Dash Lite',
        image: 'ebd3jso5iogfsjh25lsdklj/images/gdl-logo',
        class: 'g-d-l',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/geometrydashlite.html"><img class="dash-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/gdl-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/geometrydashlite.html",
        price: 'Free'
    }, {
        name: 'Ocarina of Time',
        image: 'ebd3jso5iogfsjh25lsdklj/images/oot-logo',
        class: 'oot',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/ocarinaoftime.html"><img class="oot-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/oot-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/ocarinaoftime.html",
        price: 'Free'
    }, {
        name: 'UnderTale',
        image: 'ebd3jso5iogfsjh25lsdklj/images/undertale-logo',
        class: 'undertale',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/undertale.html"><img class="under-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/undertale-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/undertale.html",
        price: 'Free'
    }, {
        name: 'Subway Surfers',
        image: 'ebd3jso5iogfsjh25lsdklj/images/subwaysurf-logo',
        class: 'subway-surf',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/subwaysurfers.html"><img class="subsurf-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/subwaysurf-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/subwaysurfers.html",
        price: 'Free'
    }, {
        name: 'Monkey Mart',
        image: 'ebd3jso5iogfsjh25lsdklj/images/monkey-logo',
        class: 'monkey-mart',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/monkeymart.html"><img class="monkey-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/monkey-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/monkeymart.html",
        price: 'Free'
    }, {
        name: 'Among Us',
        image: 'ebd3jso5iogfsjh25lsdklj/images/amongus-logo',
        class: 'among-us',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/amongus.html"><img class="among-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/amongus-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/amongus.html",
        price: 'Free'
    }, {
        name: 'Ragdoll Archers',
        image: 'ebd3jso5iogfsjh25lsdklj/images/ragdolla-logo',
        class: 'ragdoll-archers',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/ragdollarchers.html"><img class="ragarch-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/ragdolla-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/ragdollarchers.html",
        price: 'Free'
    }, {
        name: 'Ragdoll Hit',
        image: 'ebd3jso5iogfsjh25lsdklj/images/ragdollhit-logo',
        class: 'ragdoll-hit',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/ragdollhit.html"><img class="raghit-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/ragdollhit-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/ragdollhit.html",
        price: 'Free'
    }, {
        name: 'Stickman Hook',
        image: 'ebd3jso5iogfsjh25lsdklj/images/stickmanhook-logo',
        class: 'stickman-hook',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/stickmanhook.html"><img class="stickhook-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/stickmanhook-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/stickmanhook.html",
        price: 'Free'
    }, {
        name: 'Retro Bowl College',
        image: 'ebd3jso5iogfsjh25lsdklj/images/retrobowl-logo',
        class: 'retro-bowl',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/rb2-main/retrobowl.html"><img class="retrobowl-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/retrobowl-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/rb2-main/retrobowl.html",
        price: 'Free'
    }, {
        name: 'Retro Bowl',
        image: 'ebd3jso5iogfsjh25lsdklj/images/retrobowlnorm-logo',
        class: 'retro-bowl-normal',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/retrobowl.html"><img class="retrobowlnorm-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/retrobowlnorm-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/retrobowl.html",
        price: 'Free'
    }, {
        name: 'Geometry Dash 3D',
        image: 'ebd3jso5iogfsjh25lsdklj/images/geometrydashthreed-logo',
        class: 'geometry-dash-threed',
        shortcutHTML: `<a href="ebd3jso5iogfsjh25lsdklj/geometrythreed.html"><img class="geometrydashthreed-shortcut-icon game-shortcut-icon" src="ebd3jso5iogfsjh25lsdklj/images/geometrydashthreed-logo"></a>`,
        href: "ebd3jso5iogfsjh25lsdklj/geometrythreed.html",
        price: 'Free'
    }
];