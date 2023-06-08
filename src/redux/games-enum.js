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
    title: 'CSGO',
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
};

export default games;
