const MULTIPLAYER = 'Мультиплеер';
const SINGLEPLAYER = 'Синглплеер';
const COOPERATIVE = 'Кооператив';

const games = {
  GENSHIN: {
    title: 'Genshin Impact',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  HONKAI: {
    title: 'Honkai StarRail',
    types: [SINGLEPLAYER],
  },
  FOOL_ONLINE: {
    title: 'Дурак Онлайн',
    types: [MULTIPLAYER],
  },
  OSU: {
    title: 'osu!',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  ISAAC: {
    title: 'The Binding of Isaac: Repentance',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  MINECRAFT: {
    title: 'Minecraft',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  HOLLOW_KNIGHT: {
    title: 'Hollow Knight',
    types: [SINGLEPLAYER],
  },
  DOTA: {
    title: 'Dota 2',
    types: [MULTIPLAYER],
  },
  CYBERPUNK: {
    title: 'Cyberpunk 2077',
    types: [SINGLEPLAYER],
  },
  FORTNITE: {
    title: 'Fortnite',
    types: [MULTIPLAYER],
  },
  SEKAI: {
    title: 'Project SEKAI: Colorful Stage',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  DIVA: {
    title: 'Project DIVA',
    types: [SINGLEPLAYER],
  },
  MUSEDASH: {
    title: 'MuseDash',
    types: [SINGLEPLAYER],
  },
  GOD_OF_WAR: {
    title: 'God of War',
    types: [SINGLEPLAYER],
  },
  PHANTASY_STAR: {
    title: 'Phantasy Star',
    types: [SINGLEPLAYER],
  },
  FINAL_FANTASY: {
    title: 'Final Fantasy',
    types: [SINGLEPLAYER],
  },
  WILD_ARMS: {
    title: 'Wild ARMs',
    types: [SINGLEPLAYER],
  },
  SHINING_FORCE: {
    title: 'Shining Force',
    types: [SINGLEPLAYER],
  },
  GUILTY_GEAR: {
    title: 'Guilty Gear',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  GUILTY_GEAR_STRIVE: {
    title: 'Guilty Gear Strive',
    types: [MULTIPLAYER],
  },
  COD_WARZONE_II: {
    title: 'Call of Duty: Warzone 2',
    types: [MULTIPLAYER],
  },
  DEAD_BY_DAYLIGHT: {
    title: 'Dead by Daylight',
    types: [MULTIPLAYER],
  },
  RAINBOW_SIX: {
    title: "Tom Clancy's Rainbow Six Siege",
    types: [MULTIPLAYER],
  },
  RESIDENT_EVIL: {
    title: 'Resident Evil',
    types: [SINGLEPLAYER],
  },
  MORTAL_KOMBAT: {
    title: 'Mortal Kombat',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  DANGANRONPA: {
    title: 'Danganronpa',
    types: [SINGLEPLAYER],
  },
  ACE_ATTORNEY: {
    title: 'Ace Attorney',
    types: [SINGLEPLAYER],
  },
  GUITAR_HERO: {
    title: 'Guitar Hero',
    types: [SINGLEPLAYER],
  },
  SKULL_GIRLS: {
    title: 'Skullgirls',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  STARCRAFT: {
    title: 'StarCraft II',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  DND: {
    title: 'Dungeons & Dragons',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  WORLD_OF_TANKS: {
    title: 'World of Tanks',
    types: [MULTIPLAYER],
  },
  TERRARIA: {
    title: 'Terraria',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  BULLETS_PER_MINUTE: {
    title: 'Bullets per Minute',
    types: [SINGLEPLAYER],
  },
  SEVEN_DAYS_TO_DIE: {
    title: '7 days to die',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  DEEP_ROCK_GALACTIC: {
    title: 'Deep Rock Galactic',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  STARDEW_VALLEY: {
    title: 'Stardew Valley',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  IT_TAKES_TWO: {
    title: 'It Takes Two',
    types: [COOPERATIVE],
  },
  BORDERLANDS: {
    title: 'Borderlands',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  FOREST: {
    title: 'The Forest',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  OBLIVION: {
    title: 'The Elder Scrolls IV: Oblivion',
    types: [SINGLEPLAYER],
  },
  RETURN_TO_CASTLE_WOLFENSTEIN: {
    title: 'Return to Castle Wolfenstein',
    types: [SINGLEPLAYER],
  },
  EVERLASTING_SUMMER: {
    title: 'Бесконечное лето',
    types: [SINGLEPLAYER],
  },
  KATAWA_SHOUJO: {
    title: 'Katawa Shoujo',
    types: [SINGLEPLAYER],
  },
  MILK_INSIDE_A_BAG: {
    title: 'Milk inside a bag of milk inside a bag of milk',
    types: [SINGLEPLAYER],
  },
  STEINS_GATE: {
    title: 'Steins;Gate',
    types: [SINGLEPLAYER],
  },
  PHASMOPHOBIA: {
    title: 'Phasmophobia',
    types: [COOPERATIVE],
  },
  RUST: {
    title: 'Rust',
    types: [MULTIPLAYER],
  },
  CS_GO: {
    title: 'Counter Strike: Global Offensive (CS:GO)',
    types: [MULTIPLAYER],
  },
  SILENT_HILL: {
    title: 'Silent Hill',
    types: [SINGLEPLAYER],
  },
  SIGNALIS: {
    title: 'Signalis',
    types: [SINGLEPLAYER],
  },
  AMNESIA: {
    title: 'Amnesia',
    types: [SINGLEPLAYER],
  },
  OUTLAST: {
    title: 'Outlast',
    types: [SINGLEPLAYER],
  },
  PARASITE_EVE: {
    title: 'Parasite Eve',
    types: [SINGLEPLAYER],
  },
  DINO_CRISIS: {
    title: 'Dino Crisis',
    types: [SINGLEPLAYER],
  },
  BEYOND_TWO_SOULS: {
    title: 'Beyond two souls',
    types: [SINGLEPLAYER],
  },
  HEAVY_RAIN: {
    title: 'Heavy Rain',
    types: [SINGLEPLAYER],
  },
  SIFU: {
    title: 'Sifu',
    types: [SINGLEPLAYER],
  },
  REMEMBER_ME: {
    title: 'Remember Me',
    types: [SINGLEPLAYER],
  },
  OBSCURE: {
    title: 'Obscure',
    types: [SINGLEPLAYER],
  },
  BIOSHOCK: {
    title: 'Bioshock',
    types: [SINGLEPLAYER],
  },
  PORTAL: {
    title: 'Portal',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  ATOMIC_HEART: {
    title: 'Atomic Heart',
    types: [SINGLEPLAYER],
  },
  REPUBLIQUE: {
    title: 'Republique',
    types: [SINGLEPLAYER],
  },
  WITCHER: {
    title: 'Witcher',
    types: [SINGLEPLAYER],
  },
  HITMAN: {
    title: 'Hitman',
    types: [SINGLEPLAYER],
  },
  DISHONORED: {
    title: 'Dishonored',
    types: [SINGLEPLAYER],
  },
  METAL_GEAR_SOLID: {
    title: 'Metal Gear Solid',
    types: [SINGLEPLAYER],
  },
  SEKIRO: {
    title: 'Sekiro',
    types: [SINGLEPLAYER],
  },
  METAL_GEAR_RISING: {
    title: 'Metal Gear Rising',
    types: [SINGLEPLAYER],
  },
  DETROIT: {
    title: 'Detroit: Become Human',
    types: [SINGLEPLAYER],
  },
  RHYTHM_DOCTOR: {
    title: 'Rhythm Doctor',
    types: [SINGLEPLAYER],
  },
  UNDERTALE: {
    title: 'Undertale',
    types: [SINGLEPLAYER],
  },
  TO_THE_MOON: {
    title: 'To the Moon',
    types: [SINGLEPLAYER],
  },
  DELTARUNE: {
    title: 'Deltarune',
    types: [SINGLEPLAYER],
  },
  ADOFAI: {
    title: 'A Dance of Fire and Ice',
    types: [SINGLEPLAYER],
  },
  TINY_BUNNY: {
    title: 'Зайчик (Tiny Bunny)',
    types: [SINGLEPLAYER],
  },
  FAR_CRY: {
    title: 'Far Cry',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  GEOMETRY_DASH: {
    title: 'Geometry Dash',
    types: [SINGLEPLAYER],
  },
  WARCRAFT: {
    title: 'WarCraft',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  DDLC: {
    title: 'Doki Doki Literature Club',
    types: [SINGLEPLAYER],
  },
  CELESTE: {
    title: 'Celeste',
    types: [SINGLEPLAYER],
  },
  ASSASSINS_CREED: {
    title: 'Assassins Creed',
    types: [SINGLEPLAYER],
  },
  DEPONIA: {
    title: 'Deponia',
    types: [SINGLEPLAYER],
  },
  JUST_SHAPES_AND_BEATS: {
    title: 'Just Shapes and Beats',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  GTA: {
    title: 'Grand Theft Auto',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  ULTRAKILL: {
    title: 'ULTRAKILL',
    types: [SINGLEPLAYER],
  },
  NEVERLAND: {
    title: 'The Legend of Neverland',
    types: [MULTIPLAYER],
  },
  ALAWAR: {
    title: 'Игры Alawar',
    types: [SINGLEPLAYER],
  },
  G_FORCE: {
    title: 'G-Force (Миссия Дарвина)',
    types: [SINGLEPLAYER],
  },
  SHREK: {
    title: 'Shrek 2: the Game',
    types: [SINGLEPLAYER],
  },
  NEIGHBOUR_FROM_HELL: {
    title: 'Как достать соседа',
    types: [SINGLEPLAYER],
  },
  SONIC: {
    title: 'Sonic the Hedgehog (серия игр)',
    types: [SINGLEPLAYER],
  },
  GHOSTBUSTERS: {
    title: 'Ghostbusters The Video Game',
    types: [SINGLEPLAYER],
  },
  HARD_RESET: {
    title: 'Hard Reset',
    types: [SINGLEPLAYER],
  },
  CRYSIS: {
    title: 'Crysis',
    types: [SINGLEPLAYER],
  },
  DOOM: {
    title: 'Doom',
    types: [SINGLEPLAYER],
  },
  MINECRAFT_STORY_MODE: {
    title: 'Minecraft Story Mode',
    types: [SINGLEPLAYER],
  },
  SAINTS_ROW: {
    title: 'Saints Row',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  NOITA: {
    title: 'Noita',
    types: [SINGLEPLAYER],
  },
  FEAR: {
    title: 'F.E.A.R;',
    types: [SINGLEPLAYER],
  },
  JUST_CAUSE: {
    title: 'Just Cause',
    types: [SINGLEPLAYER],
  },
  POKEMONS: {
    title: 'Pokémon (серия игр)',
    types: [SINGLEPLAYER],
  },
  SLIME_RANCHER: {
    title: 'Slime Rancher',
    types: [SINGLEPLAYER],
  },
  CROSSOUT: {
    title: 'Crossout',
    types: [MULTIPLAYER],
  },
  SONS_OF_THE_FOREST: {
    title: 'Sons of the Forest',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  TRICKY_TOWERS: {
    title: 'Tricky Towers',
    types: [MULTIPLAYER],
  },
  CASTLE_CRASHERS: {
    title: 'Castle Crashers',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  LOBOTOMY_CORPORATION: {
    title: 'Lobotomy Corporation',
    types: [SINGLEPLAYER],
  },
  SCRAP_MECHANIC: {
    title: 'Scrap Mechanic',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  LEGO: {
    title: 'Lego (серия игр)',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  BEAMNG_DRIVE: {
    title: 'BeamNG Drive',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  AS_DUSK_FALLS: {
    title: 'As Dusk Falls',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  INSCRYPTION: {
    title: 'Inscryption',
    types: [SINGLEPLAYER],
  },
  TEARDOWN: {
    title: 'Teardown',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  VRCHAT: {
    title: 'VRChat',
    types: [MULTIPLAYER],
  },
  RAYMAN: {
    title: 'Rayman',
    types: [SINGLEPLAYER],
  },
  AMONG_US: {
    title: 'Among Us',
    types: [MULTIPLAYER],
  },
  DIG_OR_DIE: {
    title: 'Dig or Die',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  PILLARS_OF_ETERNITY: {
    title: 'Pillars of Eternity',
    types: [SINGLEPLAYER],
  },
  NEXOMON: {
    title: 'Nexomon',
    types: [SINGLEPLAYER],
  },
  ENTER_THE_GUNGEON: {
    title: 'Enter the Gungeon;',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  MONSTER_TRAIN: {
    title: 'Monster Train',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  SLAY_THE_SPIRE: {
    title: 'Slay the Spire',
    types: [SINGLEPLAYER],
  },
  FALL_GUYS: {
    title: 'Fall Guys;',
    types: [MULTIPLAYER],
  },
  FALLOUT: {
    title: 'Fallout',
    types: [SINGLEPLAYER],
  },
  KERBAL_SPACE_PROGRAM: {
    title: 'Kerbal Space Program;',
    types: [SINGLEPLAYER],
  },
  METRO: {
    title: 'Metro',
    types: [SINGLEPLAYER],
  },
  OVERCOOKED: {
    title: 'Overcooked',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  MUDRUNNER: {
    title: 'Mudrunner',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  DESPOTISM_3K: {
    title: 'Despotism 3k;',
    types: [SINGLEPLAYER],
  },
  RAGE: {
    title: 'Rage',
    types: [SINGLEPLAYER],
  },
  STRANDED_DEEP: {
    title: 'Stranded Deep',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  STICK_IT_TO_THE_MAN: {
    title: 'Stick It to the Man',
    types: [SINGLEPLAYER],
  },
  SUPRALAND: {
    title: 'Supraland',
    types: [SINGLEPLAYER],
  },
  THE_ESCAPISTS: {
    title: 'The Escapists',
    types: [SINGLEPLAYER],
  },
  THE_LONG_DARK: {
    title: 'The Long Dark',
    types: [SINGLEPLAYER],
  },
  PAPERS_PLEASE: {
    title: 'Papers, please',
    types: [SINGLEPLAYER],
  },
  HAT_IN_TIME: {
    title: 'A Hat in Time',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  MARIO_3D: {
    title: 'Mario 3D World;',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  MARIO_CART: {
    title: 'Mario Cart',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  WOOLLY_YOSHIS_WORLD: {
    title: "Woolly Yoshi's World;",
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  SUPER_MARIO_BROS: {
    title: 'Super Mario Bros.',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  WOBBLE_DOGS: {
    title: 'Wobble Dogs',
    types: [SINGLEPLAYER],
  },
  ASTRONEER: {
    title: 'Astroneer',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  SIMS: {
    title: 'The Sims',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  GOAT_SIMULATOR: {
    title: 'Goat Simulator',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  STICK_FIGHT: {
    title: 'Stick Fight: The Game',
    types: [MULTIPLAYER],
  },
  I_AM_BREAD: {
    title: 'I Am Bread',
    types: [SINGLEPLAYER],
  },
  VAMPIRE_SURVIVORS: {
    title: 'Vampire Survivors',
    types: [SINGLEPLAYER],
  },
  UNTITLED_GOOSE_GAME: {
    title: 'Untitled Goose Game;',
    types: [SINGLEPLAYER],
  },
  OCTODAD_DADLIEST_CATCH: {
    title: 'Octodad: Dadliest Catch',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  ROBLOX: {
    title: 'Roblox',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  SACKBOY_A_BIG_ADVENTURE: {
    title: 'Sackboy a Big Adventure;',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  SPORE: {
    title: 'Spore',
    types: [SINGLEPLAYER],
  },
  SKYRIM: {
    title: 'The Elder Scrolls Skyrim',
    types: [SINGLEPLAYER],
  },
  HOUSE_FLIPPER: {
    title: 'House Flipper',
    types: [SINGLEPLAYER],
  },
  CRAFT_THE_WORLD: {
    title: 'Craft the World',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  THEY_ARE_BILLIONS: {
    title: 'They are Billions',
    types: [SINGLEPLAYER],
  },
  DICEY_DUNGEON: {
    title: 'Dicey Dungeon',
    types: [SINGLEPLAYER],
  },
  TABS: {
    title: 'Totally Accurate Battle Simulator',
    types: [SINGLEPLAYER],
  },
  HOTLINE_MIAMI: {
    title: 'Hotline Miami',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  DESTROY_ALL_HUMANS: {
    title: 'Destroy All Humans!',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  DUCKTALES: {
    title: 'DuckTales',
    types: [SINGLEPLAYER],
  },
  TONY_HAWK_PRO_SKATER: {
    title: 'Tony Hawk Pro Skater',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  CONTRA: {
    title: 'Contra',
    types: [SINGLEPLAYER],
  },
  SUBNAUTICA: {
    title: 'Subnautica',
    types: [SINGLEPLAYER],
  },
  BROFORCE: {
    title: 'Broforce',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  SPIDERMAN_SHATTERED_DIMENSIONS: {
    title: 'Spiderman: Shattered Dimensions',
    types: [SINGLEPLAYER],
  },
  PLANTS_VS_ZOMBIES: {
    title: 'Plants VS Zombies',
    types: [SINGLEPLAYER],
  },
  DONT_STARVE: {
    title: "Don't Starve",
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  RAFT: {
    title: 'Raft',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  STARBOUND: {
    title: 'Starbound',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  TAZ_WANTED: {
    title: 'Taz: Wanted',
    types: [SINGLEPLAYER],
  },
  NEED_FOR_SPEED: {
    title: 'Need for Speed',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  MAD_MAX: {
    title: 'Mad Max',
    types: [SINGLEPLAYER],
  },
  THE_OUTER_WORLDS: {
    title: 'The Outer Worlds',
    types: [SINGLEPLAYER],
  },
  SALLY_FACE: {
    title: 'Sally Face',
    types: [SINGLEPLAYER],
  },
  SAKURA_SPIRITS: {
    title: 'Sakura: Spirits',
    types: [SINGLEPLAYER],
  },
  ANGELS: {
    title: 'Angels',
    types: [SINGLEPLAYER],
  },
  FANTASY: {
    title: 'Fantasy',
    types: [SINGLEPLAYER],
  },
  BEACH: {
    title: 'Beach',
    types: [SINGLEPLAYER],
  },
  SWIM_CLUB: {
    title: 'Swim Club',
    types: [SINGLEPLAYER],
  },
  WOLF_TAILS: {
    title: 'Wolf Tails',
    types: [SINGLEPLAYER],
  },
  NEKOPARA: {
    title: 'Nekopara',
    types: [SINGLEPLAYER],
  },
  BIG_DIPPER: {
    title: 'Big Dipper',
    types: [SINGLEPLAYER],
  },
  PLAGUE_INC: {
    title: 'Plague Inc.',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  SNIPER_ELITE: {
    title: 'Sniper Elite',
    types: [SINGLEPLAYER, MULTIPLAYER],
  },
  HEAVENLY_BODIES: {
    title: 'Heavenly Bodies',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  PEACE_DEATH: {
    title: 'Peace, Death!',
    types: [SINGLEPLAYER],
  },
  PONY_ISLAND: {
    title: 'Pony Island',
    types: [SINGLEPLAYER],
  },
  EDNA_AND_HARVEY: {
    title: 'Edna & Harvey: The Breakout',
    types: [SINGLEPLAYER],
  },
  MAFIA: {
    title: 'Mafia',
    types: [SINGLEPLAYER],
  },
  HELLO_NEIGHBOUR: {
    title: 'Hello Neighbour',
    types: [SINGLEPLAYER],
  },
  STANLEY_PARABLE: {
    title: 'The Stanley Parable',
    types: [SINGLEPLAYER],
  },
  THE_DARK_PICTURES: {
    title: 'The Dark Pictures',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  AI_DUNGEON: {
    title: 'AI Dungeon',
    types: [SINGLEPLAYER, COOPERATIVE, MULTIPLAYER],
  },
  LOVE_MONEY_ROCKNROLL: {
    title: 'Любовь, Деньги, Рок-н-Ролл',
    types: [SINGLEPLAYER],
  },
  FREEDOOM: {
    title: 'FreeDoom',
    types: [SINGLEPLAYER],
  },
  CARMAGEDDON: {
    title: 'Carmageddon',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  SOUL_KNIGHT: {
    title: 'Soul Knight',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  EARN_TO_DIE: {
    title: 'Earn to Die',
    types: [SINGLEPLAYER],
  },
  DATA_WING: {
    title: 'DATA WING',
    types: [SINGLEPLAYER],
  },
  VISCERA_CLEANUP: {
    title: 'Viscera Cleanup Detail',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  JUST_DANCE: {
    title: 'Just Dance',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  HALF_LIFE: {
    title: 'Half Life',
    types: [SINGLEPLAYER],
  },
  THERE_IS_NO_GAME: {
    title: 'There is No Game: Wrong Dimension',
    types: [SINGLEPLAYER],
  },
  SUPERLIMINAL: {
    title: 'Superliminal',
    types: [SINGLEPLAYER],
  },
  ROCK_OF_AGES: {
    title: 'Rock of Ages',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  YUPPIE_PSYCHO: {
    title: 'Yuppie psycho',
    types: [SINGLEPLAYER],
  },
  SPIDER_MAN_WEB_OF_SHADOWS: {
    title: 'Spider-Man Web of Shadows',
    types: [SINGLEPLAYER],
  },
  ROAD_96: {
    title: 'Road 96',
    types: [SINGLEPLAYER],
  },
  YES_YOUR_GRACE: {
    title: 'Yes, Your Grace',
    types: [SINGLEPLAYER],
  },
  LOST_IN_PLAY: {
    title: 'Lost in Play',
    types: [SINGLEPLAYER],
  },
  FIFA: {
    title: 'FIFA',
    types: [SINGLEPLAYER, MULTIPLAYER, COOPERATIVE],
  },
  I_RULE: {
    title: 'I.RULE',
    types: [SINGLEPLAYER],
  },
  THE_HENRY_STICKMIN: {
    title: 'The Henry Stickmin Collection',
    types: [SINGLEPLAYER],
  },
  TWELVE_MINUTES: {
    title: 'Twelve Minutes',
    types: [SINGLEPLAYER],
  },
  SPIDER_MAN_3: {
    title: 'Spider-Man 3',
    types: [SINGLEPLAYER],
  },
  CRYPT_OF_THE_NECRODANCER: {
    title: 'Crypt of the Necrodancer',
    types: [SINGLEPLAYER],
  },
  PROTOTYPE: {
    title: 'Prototype',
    types: [SINGLEPLAYER],
  },
  I_HATE_THIS_GAME: {
    title: 'I Hate This Game',
    types: [SINGLEPLAYER],
  },
  CS_1_6: {
    title: 'Counter Strike 1.6',
    types: [MULTIPLAYER],
  },
  MARVEL_ULTIMATE_ALLIANCE: {
    title: 'Marvel: Ultimate Alliance',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  X_MEN_LEGENDS_2: {
    title: 'X-Men Legends 2: Rise of Apocalypse',
    types: [SINGLEPLAYER, COOPERATIVE],
  },
  SPIDER_MAN_2: {
    title: 'Spider-Man 2 The Game',
    types: [SINGLEPLAYER],
  },
  GETTING_OVER_IT: {
    title: 'Getting Over It',
    types: [SINGLEPLAYER],
  },
  SPIDER_MAN_2000: {
    title: 'Spider-Man (2000)',
    types: [SINGLEPLAYER],
  },
  FRAN_BOW: {
    title: 'Fran Bow',
    types: [SINGLEPLAYER],
  },
  LITTLE_MISFORTUNE: {
    title: 'Little Misfortune',
    types: [SINGLEPLAYER],
  },
};

export default games;
