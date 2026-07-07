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
    '/assets/game/card-pursuit-poison.png',
    '/assets/game/card-resistance-shield.png',
    '/assets/game/card-blood-sacrifice.png',
    '/assets/game/card-capture-ball.png',
    '/assets/game/card-energy-surge.png',
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
  ],
} as const;

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
      title: 'Chrono',
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
        'Each run pushes your deck toward a different identity. Stack damage-over-time, turn shields into offense, pay life for tempo, capture enemies as one-shot tools, or overcharge your energy engine.',
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
        text: 'Turn dangerous enemies into limited-use cards that reshape reward choices.',
      },
      {
        name: 'Energy Burst',
        text: 'Stretch each turn with extra energy, cheaper cards, and overload payoffs.',
      },
      {
        name: 'Adaptive Drafting',
        text: 'Rewards respond to your deck profile, helping a run lean into its strongest plan.',
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
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Cards, monsters, and wasteland pressure.',
      items: ['Main menu atmosphere', 'Battle backdrop', 'Captured threat', 'Chrono clue'],
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
        'Tell us which deck routes, card rewards, interface details, or story hooks you want to see improved. The comment area is powered by GitHub Issues, so every suggestion can be tracked publicly.',
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
      title: 'Chrono',
      subtitle: '构筑不同卡组，在高压肉鸽战斗中活下去，并逐步揭开红沙废土中的故事。',
      primaryCta: '加入愿望单',
      secondaryCta: '试玩 Demo',
      tertiaryCta: '媒体资料',
      stats: ['多路线卡组', '怪物捕捉卡', '红沙生存'],
    },
    gameplay: {
      eyebrow: '围绕奖励构筑',
      title: '多种卡组，一片残酷废土。',
      body:
        '每一局都会把卡组推向不同方向：叠加持续伤害、把护盾转化为攻势、用生命换节奏、捕捉敌人作为一次性工具，或用能量爆发撑开回合上限。',
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
        text: '把危险敌人变成有限使用的卡牌，改变后续奖励选择。',
      },
      {
        name: '能量爆发',
        text: '通过额外能量、低费卡和过载收益拉长每个回合。',
      },
      {
        name: '适应性选牌',
        text: '奖励会参考当前卡组倾向，帮助每局强化自己的核心路线。',
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
    },
    gallery: {
      eyebrow: '画廊',
      title: '卡牌、怪物和废土压力。',
      items: ['主菜单氛围', '战斗背景', '可捕捉威胁', '克罗诺线索'],
    },
    cta: {
      title: '从卡组开始，追索债务。',
      body: 'Chrono 首先是一款肉鸽卡牌游戏；时间逆流线索会通过探索和故事碎片逐步展开。',
    },
    feedback: {
      eyebrow: '玩家建议',
      title: '通过 GitHub Issues 留下建议。',
      body:
        '欢迎反馈你希望改进的卡组路线、卡牌奖励、界面细节或故事线索。留言区基于 GitHub Issues，建议可以被公开追踪。',
      openIssues: '打开 GitHub Issues',
      helper: '登录 GitHub 后即可留言。如果内嵌留言区尚未配置，请先使用上方 Issues 按钮。',
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
      title: 'Chrono',
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
        'ランごとにデッキの姿は変わる。継続ダメージを重ねる、防御を攻撃へ変える、体力をテンポに変換する、敵を捕獲カードにする、あるいはエネルギーで一気に展開する。',
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
        text: '危険な敵を限定カードに変え、報酬選択を変化させる。',
      },
      {
        name: 'エネルギーバースト',
        text: '追加エネルギー、低コストカード、オーバーロードでターンを伸ばす。',
      },
      {
        name: '適応ドラフト',
        text: '報酬はデッキ傾向を参照し、ランの核をさらに強める。',
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
    },
    gallery: {
      eyebrow: 'ギャラリー',
      title: 'カード、モンスター、荒野の圧力。',
      items: ['メニューの空気感', '戦闘背景', '捕獲できる脅威', 'クロノの手がかり'],
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
        '改善してほしいデッキ方針、カード報酬、UI、物語の手がかりを教えてください。コメント欄はGitHub Issuesを使うため、提案を公開で追跡できます。',
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
