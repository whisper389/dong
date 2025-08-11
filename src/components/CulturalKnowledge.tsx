import React, { useState } from 'react';
import { ArrowLeft, Droplets, Building2, Shield, ChevronRight, MapPin, Clock, Users, Star } from 'lucide-react';

interface CulturalKnowledgeProps {
  onBack: () => void;
}

interface KnowledgeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  highlights: string[];
}

const CulturalKnowledge: React.FC<CulturalKnowledgeProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(null);

  // 泉水文化知识
  const springCulture: KnowledgeItem[] = [
    {
      id: 'baotu-spring',
      title: '趵突泉 - 天下第一泉',
      description: '济南七十二名泉之首，泉水一年四季恒定在18℃左右',
      image: 'https://static.yueya.net/shuomingshu.cn//wp-content/uploads/images/2022/11/25/daeace802891460c8c08c5f74570d727_mugypk0a1st.jpg',
      content: `趵突泉位于济南市历下区，南靠千佛山，东临泉城广场，北望大明湖，面积达158亩。趵突泉是泉城济南的象征与标志，与济南千佛山、大明湖并称为济南三大名胜。

**历史文化价值**
趵突泉有着悠久的历史，最早见于古代文献《春秋》，至今已有2700年的历史。北魏郦道元《水经注》记载："泉源上奋，水涌若轮"。宋代文学家曾巩为其定名为"趵突泉"。

**泉水特色**
趵突泉泉水清澈透明，味甘甜，是优质的饮用水。泉水一年四季恒定在18℃左右，严冬水面上水气袅袅，像一层薄薄的烟雾，一边是泉池幽深波光粼粼，一边是楼阁彩绘，雕梁画栋，构成了一幅奇妙的人间仙境。

**文化传承**
历代文人墨客都对趵突泉情有独钟，留下了大量的诗词歌赋。元代散曲家张养浩在《趵突泉》中写道："云雾润蒸华不注，波涛声震大明湖"，生动地描绘了趵突泉的壮观景象。`,
      highlights: ['天下第一泉', '恒温18℃', '2700年历史', '济南三大名胜']
    },
    {
      id: 'black-tiger-spring',
      title: '黑虎泉群 - 声如虎啸',
      description: '济南四大泉群之一，以黑虎泉为主，包含白石泉、玛瑙泉等14处泉水',
      image: 'https://youimg1.c-ctrip.com/target/100o0z000000n5xzw010C.jpg',
      content: `黑虎泉群位于济南旧城东南隅，沿护城河南岸一带分布，是济南四大泉群中最大的泉群，包含黑虎泉、白石泉、玛瑙泉、九女泉等14处泉水。

**黑虎泉的特色**
黑虎泉是该泉群的主泉，泉水从三个石雕虎头中喷射而出，声如虎啸，因此得名。泉池呈长方形，用石块砌垒，池长约13米，宽约9米，深约3米。

**泉群分布**
黑虎泉群沿护城河分布，形成了独特的泉水景观带：
- 黑虎泉：主泉，三个虎头喷水
- 白石泉：泉底铺白石，水质清澈
- 玛瑙泉：泉水如玛瑙般晶莹
- 九女泉：相传九位仙女在此沐浴

**民俗文化**
黑虎泉是济南市民取水的重要场所，每天都有大量市民前来取水。这里形成了独特的"取水文化"，成为济南城市生活的重要组成部分。`,
      highlights: ['四大泉群之一', '14处泉水', '虎头喷水', '取水文化']
    },
    {
      id: 'five-dragon-pool',
      title: '五龙潭泉群 - 古潭深幽',
      description: '济南四大泉群之一，以五龙潭为中心，包含古温泉、贤清泉等29处泉水',
      image: 'https://img1.qunarzz.com/travel/d5/1703/5b/4590a549977c07b5.jpg_r_640x426x70_16dec1a9.jpg',
      content: `五龙潭泉群位于济南旧城西门外，是济南四大泉群之一，以五龙潭为中心，包含古温泉、贤清泉、天镜泉等29处泉水，是济南泉水最为集中的地区之一。

**五龙潭的传说**
相传，五龙潭昔日潭深莫测，每遇大旱，祷雨辄应，故元代有好事者在潭边建庙，内塑五方龙神，自此便改称五龙潭。

**泉群特色**
五龙潭泉群具有以下特点：
- 泉水众多：共有29处泉水，是济南泉水最密集的区域
- 历史悠久：有着深厚的历史文化底蕴
- 景观优美：潭水清澈，古树参天，环境幽雅
- 文化丰富：历代文人墨客留下众多诗词

**主要泉水**
- 五龙潭：主潭，面积最大，水深数米
- 古温泉：水温较高，四季如春
- 贤清泉：水质清澈，味道甘甜
- 天镜泉：水面如镜，倒映天空`,
      highlights: ['29处泉水', '五方龙神', '历史悠久', '景观优美']
    }
  ];

  // 古城与老街知识
  const oldCityStreets: KnowledgeItem[] = [
    {
      id: 'furong-street',
      title: '芙蓉街 - 济南第一小吃街',
      description: '济南最著名的小吃街，有着400多年历史的明清古街',
      image: 'https://n.sinaimg.cn/sinakd20113/762/w1000h562/20230525/ba96-814fb69e446ec5569624ba8466b8c211.jpg',
      content: `芙蓉街是济南市的一条历史文化街区，位于济南市历下区，南起泉城路，北至大明湖路，全长432米。这条街有着400多年的历史，是济南最著名的小吃街和文化街。

**历史沿革**
芙蓉街因街中芙蓉泉而得名，是济南最古老的街巷之一。明清时期，这里是济南的商业中心，店铺林立，商贾云集。街道两侧多为明清建筑，青砖灰瓦，古朴典雅。

**文化特色**
芙蓉街承载着深厚的历史文化：
- 古建筑：保存着明清时期的建筑风格
- 老字号：汇集了众多百年老店
- 民俗文化：展现了老济南的生活方式
- 文学渊源：许多文人墨客在此留下足迹

**美食文化**
芙蓉街是济南著名的美食街，汇集了各种传统小吃：
- 把子肉：济南传统名吃
- 甜沫：济南特色早餐
- 油旋：济南传统糕点
- 糖醋鲤鱼：鲁菜经典

**现代发展**
如今的芙蓉街在保持历史风貌的同时，融入了现代元素，成为济南重要的文化旅游景点和美食聚集地。`,
      highlights: ['400年历史', '明清古街', '美食天堂', '文化地标']
    },
    {
      id: 'qushui-street',
      title: '曲水亭街 - 家家泉水户户垂杨',
      description: '最能体现济南"泉城"特色的街道，展现了"家家泉水，户户垂杨"的独特风貌',
      image: 'https://photo.tuchong.com/18235848/f/341825397.jpg',
      content: `曲水亭街是济南一条闻名中外的历史文化街区，位于大明湖南岸，因街中曲水亭而得名。这条街最能体现济南"泉城"的特色，完美诠释了"家家泉水，户户垂杨"的城市风貌。

**街道特色**
曲水亭街的独特之处在于：
- 泉水环绕：街道两侧泉水潺潺，清澈见底
- 垂柳依依：街边垂柳成荫，绿意盎然
- 古朴建筑：保持着传统的四合院建筑风格
- 生活气息：至今仍有居民在此生活

**历史文化**
曲水亭街有着深厚的历史底蕴：
- 古代文人：历代文人墨客在此留下诗词
- 传统建筑：展现了济南传统民居特色
- 民俗文化：保持着老济南的生活方式
- 文化传承：是济南文化的重要载体

**泉水文化**
街道沿线分布着多处泉水：
- 曲水亭泉：街道的命名之源
- 腾蛟泉：水质清澈，四季不涸
- 起凤泉：与腾蛟泉相对，寓意吉祥

**保护与发展**
曲水亭街在城市发展中得到了很好的保护，成为展示济南传统文化和泉水特色的重要窗口。`,
      highlights: ['泉水环绕', '垂柳成荫', '传统民居', '文化传承']
    },
    {
      id: 'baihua-zhou',
      title: '百花洲历史文化街区 - 明清古韵',
      description: '济南保存最完整的明清古建筑群，展现了传统四合院的建筑风格',
      image: 'https://p0.ssl.qhimgs1.com/t017a4227a7078d41c0.jpg',
      content: `百花洲历史文化街区位于大明湖南岸，是济南保存最完整的明清古建筑群之一。这里青砖黛瓦，古朴典雅，完整地保存了传统四合院的建筑风格和老济南的生活气息。

**建筑特色**
百花洲的建筑具有典型的北方四合院特色：
- 青砖灰瓦：采用传统的青砖灰瓦建造
- 四合院落：标准的四合院布局
- 雕梁画栋：精美的木雕和彩绘装饰
- 古朴典雅：整体风格古朴而典雅

**历史价值**
百花洲承载着丰富的历史文化：
- 明清遗存：保存着明清时期的建筑风貌
- 文化底蕴：展现了深厚的历史文化底蕴
- 民俗传承：保持着传统的生活方式
- 艺术价值：具有很高的建筑艺术价值

**文化功能**
现在的百花洲已成为重要的文化场所：
- 文化展示：展示济南传统文化
- 艺术创作：吸引艺术家进行创作
- 文化交流：举办各种文化活动
- 旅游观光：成为重要的旅游景点

**保护意义**
百花洲的保护对于传承济南历史文化具有重要意义，它是研究济南传统建筑和民俗文化的重要实物资料。`,
      highlights: ['明清建筑群', '四合院风格', '青砖黛瓦', '文化价值']
    }
  ];

  // 齐长城知识
  const qiGreatWall: KnowledgeItem[] = [
    {
      id: 'qi-great-wall-history',
      title: '齐长城 - 中国最古老的长城',
      description: '始建于春秋时期，比秦长城早400多年，全长1000多公里',
      image: 'https://img.cbbn.net/20210308ec4af7b346dfeb7b7c32fa7513c6d8b8.jpg',
      content: `齐长城是中国历史上最早的长城，始建于春秋时期的齐国，比著名的秦长城还要早400多年，堪称"长城之父"。

修建背景
春秋时期，诸侯争霸，战争频繁。齐国地处山东半岛，虽然经济发达，但面临着来自南方楚国和西南鲁国的军事威胁。特别是楚国，国力强盛，不断向北扩张，对齐国构成了严重威胁。为了保卫国土安全，齐国君主决定修建一道坚固的防御工程。

修建过程
齐长城的修建始于齐桓公时期（公元前7世纪），历经数代君主，断断续续修建了200多年才基本完成。长城西起黄河，东至黄海，全长约1000多公里，横贯整个山东省。

修建过程中，齐国动员了大量人力物力。据史料记载，参与修建的民工多达数十万人，包括农民、工匠、士兵等各个阶层。长城主要利用山脊、河流等天然屏障，在关键地段修建城墙、关隘和烽火台。

工程特色
齐长城因地制宜，充分利用了山东的地形特点。在山区，长城沿着山脊修建，利用险峻的地势增强防御能力；在平原地区，则挖掘壕沟，堆筑土墙。长城上设置了众多关隘，如锦阳关、穆陵关等，这些关隘不仅是军事要塞，也是重要的交通枢纽。

历史意义
齐长城的修建，不仅有效地保卫了齐国的安全，也促进了齐国经济文化的发展。长城沿线逐渐形成了许多城镇，成为重要的商贸中心。同时，齐长城的修建技术和防御理念，为后来秦始皇修建万里长城提供了宝贵经验。

齐长城虽然历经两千多年的风雨侵蚀，但至今仍有许多段落保存完好，成为研究中国古代军事工程和齐国历史的重要实物资料。`,
      highlights: ['最古老长城', '1000公里', '春秋时期', '文物保护']
    },
    {
      id: 'jinyang-pass',
      title: '锦阳关 - 齐长城重要关隘',
      description: '齐长城上最重要的关隘之一，地势险要，自古为兵家必争之地',
      image: 'https://n.sinaimg.cn/sinacn22/0/w2048h1152/20180520/fd28-haturft4193471.jpg',
      content: `锦阳关是齐长城上最重要的关隘之一，位于今济南市长清区，地势险要，自古就是兵家必争之地。这里不仅见证了春秋战国的烽火岁月，也承载着丰富的历史文化内涵。

**地理位置**
锦阳关位于泰山余脉的一处山口，南北两侧都是高山峻岭，只有中间一条狭窄的通道可以通行。这里是齐国通往鲁国和楚国的重要通道，也是中原地区进入齐国的门户。

**建筑特色**
锦阳关的建筑充分利用了地形优势：
- 关城设计：依山而建，易守难攻
- 城墙结构：高大坚固，设有多道关门
- 军事设施：设有兵营、粮仓、武器库
- 防御体系：形成完整的防御体系

**历史战役**
锦阳关曾发生过多次重要战役：
- 齐桓公时期的"锦阳关大战"
- 战国时期的多次争夺战
- 历代的军事冲突

**文化意义**
锦阳关不仅是军事要塞，也是文化交流的重要通道：
- 商贸往来：和平时期的重要商道
- 文化交流：各国文化交流的桥梁
- 民间传说：流传着许多动人的故事
- 历史见证：见证了齐鲁大地的历史变迁`,
      highlights: ['重要关隘', '兵家必争', '历史战役', '文化交流']
    },
    {
      id: 'beacon-towers',
      title: '齐长城烽火台 - 古代通信系统',
      description: '齐长城沿线的烽火台形成了完整的军事通信网络',
      image: 'https://photo.sohu.com/37/60/Img205586037.jpg',
      content: `齐长城沿线设有众多烽火台，形成了完整的军事通信网络。这些烽火台是古代军事通信系统的重要组成部分，体现了古代军事智慧。

**烽火台功能**
齐长城烽火台具有多重功能：
- 军事通信：白天举烟，夜晚点火传递军情
- 预警系统：快速传递敌情信息
- 指挥协调：协调各段长城的防御
- 观察哨所：观察敌军动向

**建筑特点**
烽火台的建筑具有以下特点：
- 选址科学：多建在制高点，视野开阔
- 结构坚固：用石块砌筑，经久耐用
- 通信高效：台台相连，信息传递迅速
- 防御功能：兼具防御和通信双重功能

**通信原理**
古代烽火通信有着严格的规定：
- 白天用烟：燃烧湿草产生浓烟
- 夜晚用火：点燃干柴产生火光
- 信号规定：不同的烟火代表不同的军情
- 传递速度：可在短时间内传递到数百里外

**历史价值**
齐长城烽火台具有重要的历史价值：
- 军事史研究：了解古代军事通信
- 建筑史研究：古代建筑技术的体现
- 文化价值：承载着深厚的历史文化
- 旅游价值：成为重要的文化旅游资源`,
      highlights: ['通信网络', '军事智慧', '建筑技术', '历史价值']
    }
  ];

  const sections = [
    {
      id: 'spring-culture',
      title: '泉水文化',
      icon: Droplets,
      color: 'bg-blue-600',
      description: '探索济南独特的泉水文化，了解七十二名泉的历史传说与文化内涵',
      items: springCulture
    },
    {
      id: 'old-city',
      title: '古城与老街',
      icon: Building2,
      color: 'bg-amber-600',
      description: '漫步济南古街老巷，感受千年古城的历史韵味与文化底蕴',
      items: oldCityStreets
    },
    {
      id: 'qi-great-wall',
      title: '齐长城',
      icon: Shield,
      color: 'bg-emerald-600',
      description: '了解中国最古老的长城，探寻春秋战国时期的军事文化与历史遗迹',
      items: qiGreatWall
    }
  ];

  if (selectedItem) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedItem(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回列表
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {selectedItem.title}
                  </h1>
                  <p className="text-lg opacity-90">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedItem.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection) {
    const section = sections.find(s => s.id === activeSection);
    if (!section) return null;

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50 opacity-50"></div>
          <div className="max-w-6xl mx-auto px-4 py-6 relative">
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南文化知识
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 ${section.color} rounded-full flex items-center justify-center`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{section.title}</h1>
                <p className="text-gray-600 mt-1">{section.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                    了解详情
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-4xl font-bold text-gray-900">济南文化知识展示</h1>
          <p className="text-xl text-gray-600 mt-2">深度了解济南文化精髓，探索泉城千年文化底蕴</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              onClick={() => setActiveSection(section.id)}
            >
              <div className={`h-2 ${section.color}`}></div>
              
              <div className="p-8">
                <div className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {section.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {section.items.length} 个知识点
                  </span>
                  <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalKnowledge;