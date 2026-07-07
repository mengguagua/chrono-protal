export const defaultLocale = 'en' as const;
export const locales = ['en', 'zh', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const links = {
  wishlistUrl: '#',
  demoUrl: '#',
  pressKitUrl: '#',
  githubIssuesRepo: 'mengguagua/chrono-protal',
  githubIssuesUrl: 'https://github.com/issues',
} as const;

export const assets = {
  hero: '/assets/game/index-back.png',
  heroAlt: '/assets/game/index-back-2.png',
  tunnel: '/assets/game/time-tunnel.png',
  battle: '/assets/game/bg-default.png',
  battleAlt: '/assets/game/battle-abg-8.png',
  cards: [
    '/assets/game/card-small-fireball.png',
    '/assets/game/card-resistance-shield.png',
    '/assets/game/card-blood-sacrifice.png',
    '/assets/game/card-capture-ball.png',
    '/assets/game/card-venomous-spider.png',
    '/assets/game/card-pursuit-bullet.png',
    '/assets/game/card-dice-burst.png',
    '/assets/game/card-energy-surge.png',
  ],
  showcaseCards: [
    '/assets/game/showcase-time-anchor.png',
    '/assets/game/showcase-spacetime-echo.png',
    '/assets/game/showcase-dimensional-shatter.png',
    '/assets/game/showcase-chrono-stasis.png',
  ],
  relics: [
    '/assets/game/relic-recursive-poison.png',
    '/assets/game/relic-guardian.png',
    '/assets/game/relic-energy-furnace.png',
    '/assets/game/relic-perfect-catch.png',
  ],
  monsters: [
    '/assets/game/monster-black-dog.png',
    '/assets/game/monster-four-barrel-tank.png',
    '/assets/game/monster-diving-man.png',
    '/assets/game/monster-bird.png',
    '/assets/game/monster-spider.png',
  ],
  gallery: {
    scenes: [
      '/assets/gallery/scenes/abg-1.png',
      '/assets/gallery/scenes/abg-10.png',
      '/assets/gallery/scenes/abg-2.png',
      '/assets/gallery/scenes/abg-3.png',
      '/assets/gallery/scenes/abg-4.png',
      '/assets/gallery/scenes/abg-5.png',
      '/assets/gallery/scenes/abg-6.png',
      '/assets/gallery/scenes/abg-7.png',
      '/assets/gallery/scenes/abg-8.png',
      '/assets/gallery/scenes/abg-9.png',
      '/assets/gallery/scenes/bg_default.png',
      '/assets/gallery/scenes/black_market_bg.png',
      '/assets/gallery/scenes/day_bg.png',
      '/assets/gallery/scenes/day_bg_topdown_clean_v3_2848x1502.png',
      '/assets/gallery/scenes/index-back-2.png',
      '/assets/gallery/scenes/index-back.png',
      '/assets/gallery/scenes/lab_bg.png',
      '/assets/gallery/scenes/shop_bg.png',
      '/assets/gallery/scenes/time-tunnel.png',
    ],
    monsters: [
      '/assets/gallery/monsters/armored_turtle.png',
      '/assets/gallery/monsters/bird.png',
      '/assets/gallery/monsters/black_dog.png',
      '/assets/gallery/monsters/boxing_kangaroo.png',
      '/assets/gallery/monsters/coral_eyes.png',
      '/assets/gallery/monsters/devourer.png',
      '/assets/gallery/monsters/diving_man.png',
      '/assets/gallery/monsters/fly_ant.png',
      '/assets/gallery/monsters/four_barrel_tank.png',
      '/assets/gallery/monsters/green_mouth.png',
      '/assets/gallery/monsters/pink_car.png',
      '/assets/gallery/monsters/poisonous_flower.png',
      '/assets/gallery/monsters/self_destruct_bomb.png',
      '/assets/gallery/monsters/ship_dragon.png',
      '/assets/gallery/monsters/soundwave_bull.png',
      '/assets/gallery/monsters/spider.png',
      '/assets/gallery/monsters/stone_goblin.png',
      '/assets/gallery/monsters/three_headed_mosquitoes.png',
      '/assets/gallery/monsters/triceratops.png',
      '/assets/gallery/monsters/vine.png',
    ],
    relics: [
      '/assets/gallery/relics/relic_all_or_nothing.png',
      '/assets/gallery/relics/relic_always_surplus.png',
      '/assets/gallery/relics/relic_bald.png',
      '/assets/gallery/relics/relic_berserk_flask.png',
      '/assets/gallery/relics/relic_bonus_poison.png',
      '/assets/gallery/relics/relic_complete_combustion.png',
      '/assets/gallery/relics/relic_continuous_training.png',
      '/assets/gallery/relics/relic_decode_dream.png',
      '/assets/gallery/relics/relic_demon_contract.png',
      '/assets/gallery/relics/relic_energy_furnace.png',
      '/assets/gallery/relics/relic_enter_dream.png',
      '/assets/gallery/relics/relic_feather.png',
      '/assets/gallery/relics/relic_flawless_crystal.png',
      '/assets/gallery/relics/relic_gamble.png',
      '/assets/gallery/relics/relic_gamma_ray.png',
      '/assets/gallery/relics/relic_gold_magnet.png',
      '/assets/gallery/relics/relic_guardian.png',
      '/assets/gallery/relics/relic_guardian_heart.png',
      '/assets/gallery/relics/relic_late_bloomer.png',
      '/assets/gallery/relics/relic_offense_defense.png',
      '/assets/gallery/relics/relic_perfect_catch.png',
      '/assets/gallery/relics/relic_quick_thrill.png',
      '/assets/gallery/relics/relic_recursive_poison.png',
      '/assets/gallery/relics/relic_scattered_gamma.png',
      '/assets/gallery/relics/relic_self_harm_backstab.png',
      '/assets/gallery/relics/relic_speed_boots.png',
      '/assets/gallery/relics/relic_strong.png',
      '/assets/gallery/relics/relic_unexpected.png',
      '/assets/gallery/relics/relic_whetstone.png',
      '/assets/gallery/relics/relic_zero_point.png',
    ],
  },
} as const;

export const galleryMonsterLabels: Record<string, string> = {
  '/assets/gallery/monsters/armored_turtle.png': '装甲龟',
  '/assets/gallery/monsters/bird.png': '巨喙',
  '/assets/gallery/monsters/black_dog.png': '黑狗',
  '/assets/gallery/monsters/boxing_kangaroo.png': '拳击袋鼠',
  '/assets/gallery/monsters/coral_eyes.png': '珊瑚眼睛',
  '/assets/gallery/monsters/devourer.png': '吞噬者',
  '/assets/gallery/monsters/diving_man.png': '潜水怪',
  '/assets/gallery/monsters/fly_ant.png': '飞蚁',
  '/assets/gallery/monsters/four_barrel_tank.png': '4门坦克',
  '/assets/gallery/monsters/green_mouth.png': '大绿嘴',
  '/assets/gallery/monsters/pink_car.png': '粉色战车',
  '/assets/gallery/monsters/poisonous_flower.png': '毒液花',
  '/assets/gallery/monsters/self_destruct_bomb.png': '自爆炸弹',
  '/assets/gallery/monsters/ship_dragon.png': '船龙',
  '/assets/gallery/monsters/soundwave_bull.png': '音波牛',
  '/assets/gallery/monsters/spider.png': '巨蛛',
  '/assets/gallery/monsters/stone_goblin.png': '石块哥布林',
  '/assets/gallery/monsters/three_headed_mosquitoes.png': '三头蚊',
  '/assets/gallery/monsters/triceratops.png': '钻尾龙',
  '/assets/gallery/monsters/vine.png': '酸液藤鞭',
};

export const galleryRelicLabels: Record<string, string> = {
  '/assets/gallery/relics/relic_all_or_nothing.png': '所有或一无所有',
  '/assets/gallery/relics/relic_always_surplus.png': '回回有余',
  '/assets/gallery/relics/relic_bald.png': '变秃',
  '/assets/gallery/relics/relic_berserk_flask.png': '狂热血瓶',
  '/assets/gallery/relics/relic_bonus_poison.png': '追加投毒',
  '/assets/gallery/relics/relic_complete_combustion.png': '完全燃烧',
  '/assets/gallery/relics/relic_continuous_training.png': '持续锻炼',
  '/assets/gallery/relics/relic_decode_dream.png': '解梦',
  '/assets/gallery/relics/relic_demon_contract.png': '恶魔契约',
  '/assets/gallery/relics/relic_energy_furnace.png': '能源回炉',
  '/assets/gallery/relics/relic_enter_dream.png': '入梦',
  '/assets/gallery/relics/relic_feather.png': '复苏羽毛',
  '/assets/gallery/relics/relic_flawless_crystal.png': '无瑕水晶',
  '/assets/gallery/relics/relic_gamble.png': '赌局',
  '/assets/gallery/relics/relic_gamma_ray.png': '伽马射线',
  '/assets/gallery/relics/relic_gold_magnet.png': '吸金',
  '/assets/gallery/relics/relic_guardian.png': '守护石符',
  '/assets/gallery/relics/relic_guardian_heart.png': '守护的心',
  '/assets/gallery/relics/relic_late_bloomer.png': '后劲',
  '/assets/gallery/relics/relic_offense_defense.png': '攻防一体',
  '/assets/gallery/relics/relic_perfect_catch.png': '一球入魂',
  '/assets/gallery/relics/relic_quick_thrill.png': '一时之快',
  '/assets/gallery/relics/relic_recursive_poison.png': '毒中毒',
  '/assets/gallery/relics/relic_scattered_gamma.png': '散射伽马',
  '/assets/gallery/relics/relic_self_harm_backstab.png': '自残补刀',
  '/assets/gallery/relics/relic_speed_boots.png': '速度鞋',
  '/assets/gallery/relics/relic_strong.png': '变强',
  '/assets/gallery/relics/relic_unexpected.png': '意料之外',
  '/assets/gallery/relics/relic_whetstone.png': '砥石',
  '/assets/gallery/relics/relic_zero_point.png': '零点发生器',
};

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '中',
  ja: '日',
};

export const messages = {
  en: {
    nav: {
      game: 'Gameplay',
      cards: 'Cards',
      story: 'Story',
      gallery: 'Gallery',
      feedback: 'Feedback',
    },
    hero: {
      eyebrow: 'Roguelike Deckbuilder',
      title: 'Reverse Chrono',
      subtitle:
        'Build different decks, survive brutal roguelike battles, and uncover a red-sand wasteland story one run at a time.',
      primaryCta: 'Wishlist',
      secondaryCta: 'Play Demo',
      tertiaryCta: 'Press Kit',
      stats: ['Multi-route decks', 'Monster capture cards', 'Red-sand survival'],
    },
    gameplay: {
      eyebrow: 'Build Around Your Finds',
      title: 'Many decks, one harsh wasteland.',
      body:
        'Each run pushes your deck toward a different identity: stack damage-over-time, turn shields into offense, trade life for tempo, capture monsters into cards, fuse and strengthen monster cards, use follow-up attacks, link card effects through dice, or overcharge your energy engine.',
    },
    deckTypes: [
      {
        name: 'Burn & Poison',
        text: 'Layer status damage, then trigger finishers when the enemy is already weakened.',
      },
      {
        name: 'Shield Engine',
        text: 'Stay alive with durable defense and convert protection into pressure.',
      },
      {
        name: 'Blood Tempo',
        text: 'Trade health for power, cards, and explosive turns when the risk is worth it.',
      },
      {
        name: 'Captured Monsters',
        text: 'Capture enemies during battle, then turn them into monster cards for later rewards and routes.',
      },
      {
        name: 'Monster Fusion',
        text: 'Fuse captured monster cards into stronger variants with sharper roles and bigger payoffs.',
      },
      {
        name: 'Follow-up Attacks',
        text: 'Chain extra attacks from pursuit cards and turn one action into repeated pressure.',
      },
      {
        name: 'Dice Links',
        text: 'Connect card effects through dice results, making each roll reshape your tactical options.',
      },
      {
        name: 'Energy Burst',
        text: 'Stretch each turn with extra energy, cheaper cards, and overload payoffs.',
      },
    ],
    cards: {
      eyebrow: 'Cards & Rewards',
      title: 'Draft cards, upgrade them, and let relics tilt the run.',
      body:
        'The MVP site uses real game assets: attack cards, defense plans, capture tools, relic rewards, battle backgrounds, and enemy art from the current build.',
      labels: ['Cards', 'Relics', 'Battlefield'],
    },
    story: {
      eyebrow: 'World Story',
      title: 'A physicist wakes in the red sand.',
      body:
        'Kurt wakes without his memories and is marked by an old military clearance system as an unregistered driver. Tomorrow Station becomes his first shelter, but every clue points toward Chrono debt: a cost recorded in the future, waiting to return.',
      beats: ['Kurt, an amnesiac physicist', 'Tomorrow Station, a fragile shelter', 'Chrono debt, a story mystery'],
      tunnelTitle: 'Time Tunnel',
      tunnelBody:
        'Cards sent into the Time Tunnel gain an extra effect, then trigger their own card effect on the next turn.',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Cards, monsters, and wasteland pressure.',
      items: ['Scene art', 'Adventure monster', 'Relic'],
    },
    cta: {
      title: 'Start with the deck. Follow the debt.',
      body:
        'Chrono is being shaped as a roguelike card game first, with the reverse-time thread unfolding through exploration and story fragments.',
    },
    feedback: {
      eyebrow: 'Player Feedback',
      title: 'Leave suggestions through GitHub Issues.',
      body:
        'Tell us which deck routes, card rewards, interface details, or story hooks you want to see improved. The comment area is powered by GitHub Issues, so every suggestion can be tracked publicly. If you are interested in joining an internal playtest, leave a note and I will contact you privately. Thank you.',
      openIssues: 'Open GitHub Issues',
      helper: 'Sign in with GitHub to leave a comment. If the embedded thread is not configured yet, use the Issues button above.',
      unconfiguredTitle: 'GitHub Issues comments are ready to connect.',
      unconfiguredBody:
        'Set links.githubIssuesRepo in src/content.ts to the public GitHub repository, for example owner/repo, to enable the embedded Issues comment widget.',
    },
  },
  zh: {
    nav: {
      game: '玩法',
      cards: '卡牌',
      story: '故事',
      gallery: '画廊',
      feedback: '留言',
    },
    hero: {
      eyebrow: '肉鸽卡牌构筑',
      title: 'Reverse Chrono',
      subtitle: '构筑不同卡组，在高压肉鸽战斗中活下去，并逐步揭开红沙废土中的故事。',
      primaryCta: '加入愿望单',
      secondaryCta: '试玩 Demo',
      tertiaryCta: '媒体资料',
      stats: ['多方式卡组构建', '怪物捕捉卡', '怪物融合卡'],
    },
    gameplay: {
      eyebrow: '围绕奖励构筑',
      title: '多种卡组，一片残酷废土。',
      body:
        '每一局都会把卡组推向不同方向：叠加持续伤害、把护盾转化为攻势、用生命换节奏、捕捉获取怪物牌、融合强化怪物牌、使用追加攻击、通过骰子关联卡牌效果，或用能量爆发撑开回合上限。',
    },
    deckTypes: [
      {
        name: '燃烧与中毒',
        text: '叠加状态伤害，在敌人被削弱后用终结牌收割。',
      },
      {
        name: '护盾引擎',
        text: '用稳定防御活下来，再把保护转化为输出压力。',
      },
      {
        name: '自伤节奏',
        text: '用生命换力量、手牌和爆发回合，风险越高回报越直接。',
      },
      {
        name: '捕捉怪物',
        text: '在战斗中捕捉敌人，获取可加入后续构筑的怪物牌。',
      },
      {
        name: '怪物融合',
        text: '把怪物牌融合成更强形态，获得更明确的定位和更高收益。',
      },
      {
        name: '追加攻击',
        text: '用追击类卡牌连续触发额外攻击，把单次行动扩展成持续压力。',
      },
      {
        name: '骰子关联',
        text: '通过骰子结果关联卡牌效果，让每次投掷改变当回合选择。',
      },
      {
        name: '能量爆发',
        text: '通过额外能量、低费卡和过载收益拉长每个回合。',
      },
    ],
    cards: {
      eyebrow: '卡牌与奖励',
      title: '选牌、强化，并让遗物改变整局走势。',
      body: 'MVP 官网使用当前游戏真实素材：攻击牌、防御牌、捕捉工具、遗物奖励、战斗背景和敌人立绘。',
      labels: ['卡牌', '遗物', '战场'],
    },
    story: {
      eyebrow: '世界故事',
      title: '一名物理学家在红沙中醒来。',
      body:
        '失忆的库尔特被旧军方清算系统标记为“未登记驾驶员”。明日站是他的第一处庇护所，但越来越多线索指向克罗诺债务：一种登记在未来、终会回流的代价。',
      beats: ['库尔特，失忆物理学家', '明日站，脆弱据点', '克罗诺债务，叙事悬念'],
      tunnelTitle: '时空隧道',
      tunnelBody: '卡牌投入时空隧道会有额外效果，并且在下一回合触发卡牌自身效果。',
    },
    gallery: {
      eyebrow: '画廊',
      title: '卡牌、怪物和废土压力。',
      items: ['场景图', '冒险中的怪物', '遗物'],
    },
    cta: {
      title: '从卡组开始，追索债务。',
      body: 'Chrono 首先是一款肉鸽卡牌游戏；时间逆流线索会通过探索和故事碎片逐步展开。',
    },
    feedback: {
      eyebrow: '玩家建议',
      title: '通过 GitHub Issues 留下建议。',
      body:
        '欢迎反馈你希望改进的卡组路线、卡牌奖励、界面细节或故事线索。留言区基于 GitHub Issues，建议可以被公开追踪。有意内测试玩的朋友，请留言说明，我会私下联系，谢谢。',
      openIssues: '打开 GitHub Issues',
      helper: '登录 GitHub 后即可留言。也可以使用上方 Issues 按钮。',
      unconfiguredTitle: 'GitHub Issues 留言区已预留。',
      unconfiguredBody:
        '在 src/content.ts 中把 links.githubIssuesRepo 设置为公开 GitHub 仓库，例如 owner/repo，即可启用内嵌 Issues 留言组件。',
    },
  },
  ja: {
    nav: {
      game: 'ゲーム性',
      cards: 'カード',
      story: '物語',
      gallery: 'ギャラリー',
      feedback: 'フィードバック',
    },
    hero: {
      eyebrow: 'ローグライク・デッキビルダー',
      title: 'Reverse Chrono',
      subtitle:
        '多彩なデッキを組み、過酷なローグライク戦闘を生き延び、赤い砂の荒野に隠された物語を少しずつ解き明かす。',
      primaryCta: 'ウィッシュリスト',
      secondaryCta: 'デモを遊ぶ',
      tertiaryCta: 'プレスキット',
      stats: ['多系統デッキ', 'モンスター捕獲カード', '赤砂のサバイバル'],
    },
    gameplay: {
      eyebrow: '報酬から構築する',
      title: 'いくつものデッキ、ひとつの過酷な荒野。',
      body:
        'ランごとにデッキは違う方向へ伸びる。継続ダメージを重ねる、防御を攻撃へ変える、体力をテンポに変換する、捕獲でモンスターカードを得る、モンスターカードを融合強化する、追撃を使う、ダイスでカード効果をつなぐ、あるいはエネルギーでターン上限を広げる。',
    },
    deckTypes: [
      {
        name: '燃焼と毒',
        text: '状態異常を重ね、弱った敵をフィニッシャーで倒す。',
      },
      {
        name: 'シールドエンジン',
        text: '堅い防御で生き残り、守りを攻撃圧に変える。',
      },
      {
        name: 'ライフテンポ',
        text: '体力を代償に、火力・手札・爆発的なターンを得る。',
      },
      {
        name: '捕獲モンスター',
        text: '戦闘中に敵を捕獲し、以後の構築に使えるモンスターカードを得る。',
      },
      {
        name: 'モンスター融合',
        text: 'モンスターカードを融合し、役割が明確でより強い形へ強化する。',
      },
      {
        name: '追撃',
        text: '追撃系カードで追加攻撃を連鎖させ、一度の行動を継続圧力へ変える。',
      },
      {
        name: 'ダイス連携',
        text: 'ダイス結果でカード効果をつなぎ、ロールごとにそのターンの選択を変える。',
      },
      {
        name: 'エネルギーバースト',
        text: '追加エネルギー、低コストカード、オーバーロードでターンを伸ばす。',
      },
    ],
    cards: {
      eyebrow: 'カードと報酬',
      title: 'カードを選び、強化し、レリックで流れを変える。',
      body:
        'MVPサイトでは現ビルドの実素材を使用する。攻撃カード、防御プラン、捕獲ツール、レリック、戦闘背景、敵アートをそのまま見せる。',
      labels: ['カード', 'レリック', '戦場'],
    },
    story: {
      eyebrow: 'ワールドストーリー',
      title: '物理学者は赤い砂の中で目を覚ます。',
      body:
        '記憶を失ったカートは、旧軍の清算システムに未登録ドライバーとして記録される。明日ステーションは最初の避難所となるが、手がかりはやがてクロノ債務へ向かう。未来に記録され、いつか戻ってくる代償だ。',
      beats: ['カート、記憶喪失の物理学者', '明日ステーション、脆い避難所', 'クロノ債務、物語の謎'],
      tunnelTitle: '時空トンネル',
      tunnelBody:
        'カードを時空トンネルへ投入すると追加効果が発生し、次のターンにそのカード自身の効果も発動する。',
    },
    gallery: {
      eyebrow: 'ギャラリー',
      title: 'カード、モンスター、荒野の圧力。',
      items: ['シーンアート', '冒険中のモンスター', 'レリック'],
    },
    cta: {
      title: 'デッキから始まり、債務へ進む。',
      body:
        'Chronoはまずローグライクカードゲームとして作られている。時間逆流の糸は探索と物語断片から少しずつ現れる。',
    },
    feedback: {
      eyebrow: 'プレイヤーフィードバック',
      title: 'GitHub Issuesで意見を送る。',
      body:
        '改善してほしいデッキ方針、カード報酬、UI、物語の手がかりを教えてください。コメント欄はGitHub Issuesを使うため、提案を公開で追跡できます。内部テストプレイに興味がある方はコメントでお知らせください。後ほど個別に連絡します。ありがとうございます。',
      openIssues: 'GitHub Issuesを開く',
      helper: 'GitHubにログインするとコメントできます。埋め込み欄が未設定の場合は、上のIssuesボタンを使ってください。',
      unconfiguredTitle: 'GitHub Issuesコメント欄を接続できます。',
      unconfiguredBody:
        'src/content.ts の links.githubIssuesRepo に公開GitHubリポジトリ、例 owner/repo を設定すると、埋め込みIssuesコメントが有効になります。',
    },
  },
} satisfies Record<Locale, {
  nav: Record<'game' | 'cards' | 'story' | 'gallery' | 'feedback', string>;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    stats: string[];
  };
  gameplay: {
    eyebrow: string;
    title: string;
    body: string;
  };
  deckTypes: Array<{ name: string; text: string }>;
  cards: {
    eyebrow: string;
    title: string;
    body: string;
    labels: string[];
  };
  story: {
    eyebrow: string;
    title: string;
    body: string;
    beats: string[];
    tunnelTitle: string;
    tunnelBody: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    body: string;
  };
  feedback: {
    eyebrow: string;
    title: string;
    body: string;
    openIssues: string;
    helper: string;
    unconfiguredTitle: string;
    unconfiguredBody: string;
  };
}>;

export function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as readonly string[]).includes(value);
}
