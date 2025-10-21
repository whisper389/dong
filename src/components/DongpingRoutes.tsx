import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, Cloud, Sun, CloudRain, Navigation, ExternalLink } from 'lucide-react';

interface DongpingRoutesProps {
  onBack: () => void;
}

interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
}

interface Attraction {
  id: string;
  name: string;
  description: string;
  duration: string;
  tips: string;
  image: string;
}

const DongpingRoutes: React.FC<DongpingRoutesProps> = ({ onBack }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const DONGPING_LAT = 35.9372;
  const DONGPING_LON = 116.4706;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${DONGPING_LAT}&longitude=${DONGPING_LON}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=Asia/Shanghai`
        );

        if (!response.ok) {
          throw new Error('天气数据获取失败');
        }

        const data = await response.json();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
          windSpeed: data.current.wind_speed_10m,
          humidity: data.current.relative_humidity_2m
        });
      } catch (error) {
        setWeatherError('天气信息暂时无法获取');
        console.error('Weather fetch error:', error);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherInfo = (code: number) => {
    if (code <= 1) return { desc: '晴朗', icon: Sun, color: 'text-yellow-500' };
    if (code <= 3) return { desc: '多云', icon: Cloud, color: 'text-gray-500' };
    if (code <= 67) return { desc: '雨天', icon: CloudRain, color: 'text-blue-500' };
    return { desc: '未知', icon: Cloud, color: 'text-gray-500' };
  };

  const day1Attractions: Attraction[] = [
    {
      id: '1',
      name: '东平湖',
      description: '八百里水泊梁山遗存水域',
      duration: '2小时',
      tips: '乘船游湖，体验水泊风光',
      image: 'https://pic.baike.soso.com/ugc/baikepic2/8534/20190606102755-1270906340_jpeg_1104_709_133847.jpg/0'
    },
    {
      id: '2',
      name: '水浒影视城',
      description: '重现水浒故事的影视基地',
      duration: '2.5小时',
      tips: '观看实景演出，穿越回水浒时代',
      image: 'https://p1.meituan.net/dpmerchantpic/1f19f6e78be73fd27e95a9a9f6bb41fa524425.jpg'
    },
    {
      id: '3',
      name: '腊山国家森林公园',
      description: '水浒英雄聚义之地',
      duration: '2小时',
      tips: '登高望远，俯瞰东平湖全景',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20190911/8e0c7e9dcf194c9b8e1f8fdb5e5e3e34.jpeg'
    },
    {
      id: '4',
      name: '东平湖湿地公园',
      description: '生态观鸟，自然之美',
      duration: '1.5小时',
      tips: '春秋季节候鸟迁徙，观鸟最佳',
      image: 'https://pic.rmb.bdstatic.com/bjh/down/d5f6d5e3e9b7f8e7b1f7f8e7b1f7f8e7.jpeg'
    },
    {
      id: '5',
      name: '东平古城',
      description: '千年古城，历史遗韵',
      duration: '1.5小时',
      tips: '漫步古街，品味历史文化',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20200308/ab3e6b3f9f6c4c8f8b3e6b3f9f6c4c8f.jpeg'
    },
    {
      id: '6',
      name: '东平湖美食街',
      description: '品尝地道东平湖鱼宴',
      duration: '2小时',
      tips: '必尝东平湖全鱼宴和湖产海鲜',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20190815/7e3f9f6c4c8f8b3e6b3f9f6c4c8f8b3e.jpeg'
    }
  ];

  const day2Attractions: Attraction[] = [
    {
      id: '7',
      name: '白佛山景区',
      description: '石刻佛像，宗教圣地',
      duration: '2小时',
      tips: '欣赏摩崖造像，感受佛教文化',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20190702/d6e5e3e34e9e4f7f8e7b1f7f8e7b1f7.jpeg'
    },
    {
      id: '8',
      name: '戴村坝',
      description: '明代水利工程杰作',
      duration: '1.5小时',
      tips: '参观古代水利智慧结晶',
      image: 'https://pic.baike.soso.com/ugc/baikepic2/25846/20180814153512-1502947809_jpeg_800_600_72534.jpg/0'
    },
    {
      id: '9',
      name: '六工山景区',
      description: '山水相依，风光秀美',
      duration: '2小时',
      tips: '登山健行，呼吸新鲜空气',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20190528/8f8b3e6b3f9f6c4c8f8b3e6b3f9f6c4c.jpeg'
    },
    {
      id: '10',
      name: '东平博物馆',
      description: '了解东平历史文化',
      duration: '1.5小时',
      tips: '周一闭馆，建议提前预约',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20200515/c4c8f8b3e6b3f9f6c4c8f8b3e6b3f9f6.jpeg'
    },
    {
      id: '11',
      name: '稻屯洼湿地',
      description: '湿地生态，候鸟天堂',
      duration: '1.5小时',
      tips: '携带望远镜，观察野生鸟类',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20190923/9f6c4c8f8b3e6b3f9f6c4c8f8b3e6b3f.jpeg'
    },
    {
      id: '12',
      name: '司里山景区',
      description: '道教名山，养生福地',
      duration: '2小时',
      tips: '品尝山间野菜，体验道家文化',
      image: 'https://5b0988e595225.cdn.sohucs.com/images/20190628/6b3f9f6c4c8f8b3e6b3f9f6c4c8f8b3e.jpeg'
    }
  ];

  const renderSShapeRow = (attractions: Attraction[], rowIndex: number) => {
    const isReverse = rowIndex % 2 === 1;
    const rowAttractions = attractions.slice(rowIndex * 3, (rowIndex + 1) * 3);

    if (rowAttractions.length === 0) return null;

    return (
      <div key={rowIndex} className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-8 mb-12`}>
        {rowAttractions.map((attraction, index) => (
          <div key={attraction.id} className="group relative">
            {index < rowAttractions.length - 1 && (
              <div className={`absolute top-1/2 ${isReverse ? 'left-0' : 'right-0'} transform -translate-y-1/2 ${isReverse ? '-translate-x-full' : 'translate-x-full'} w-8 h-0.5 bg-emerald-300 z-0`}>
                <div className={`absolute ${isReverse ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full`}></div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-64 z-10 relative">
              <div className="relative h-40">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{attraction.name}</h3>
                    <p className="text-sm opacity-90">{attraction.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{attraction.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>东平</span>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-sm text-emerald-800">
                    <span className="font-semibold">游览贴士：</span>
                    {attraction.tips}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-100">
      <div className="bg-white shadow-lg border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">返回首页</span>
            </button>

            <h1 className="text-2xl font-bold text-slate-800">东平文化旅游路线</h1>

            <div className="flex items-center gap-6">
              <div className="bg-emerald-50 rounded-lg p-3 min-w-[200px]">
                {weatherLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full"></div>
                    <span className="text-sm text-emerald-700">获取天气中...</span>
                  </div>
                ) : weatherError ? (
                  <div className="text-sm text-red-600">{weatherError}</div>
                ) : weather ? (
                  <div className="flex items-center gap-3">
                    {(() => {
                      const weatherInfo = getWeatherInfo(weather.weatherCode);
                      const WeatherIcon = weatherInfo.icon;
                      return (
                        <>
                          <WeatherIcon className={`w-5 h-5 ${weatherInfo.color}`} />
                          <div>
                            <div className="text-sm font-semibold text-slate-800">
                              东平 {weather.temperature}°C
                            </div>
                            <div className="text-xs text-slate-600">
                              {weatherInfo.desc} · 湿度{weather.humidity}%
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : null}
              </div>

              <div className="bg-teal-50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">实时交通</div>
                    <div className="flex gap-2 text-xs">
                      <a
                        href="https://map.baidu.com/search/东平县/@13009576.39,4279456.97,12z?querytype=c&c=东平县"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-800 flex items-center gap-1"
                      >
                        百度地图 <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://www.amap.com/search?query=东平县&city=370923"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-800 flex items-center gap-1"
                      >
                        高德地图 <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h2 className="text-2xl font-bold text-slate-800">第一天：水泊梁山文化游</h2>
            </div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              探访八百里水泊遗韵，重温水浒英雄传奇，体验东平湖独特的湖光山色与历史文化
            </p>
          </div>

          <div className="relative">
            {Array.from({ length: Math.ceil(day1Attractions.length / 3) }, (_, index) =>
              renderSShapeRow(day1Attractions, index)
            )}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl font-bold text-slate-800">第二天：山水人文深度游</h2>
            </div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              登临白佛山感受佛教文化，探访古代水利工程，游览自然山水，全方位领略东平人文与自然之美
            </p>
          </div>

          <div className="relative">
            {Array.from({ length: Math.ceil(day2Attractions.length / 3) }, (_, index) =>
              renderSShapeRow(day2Attractions, index)
            )}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-lg">
              💡
            </div>
            旅游贴士
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 mb-2">交通建议</h4>
              <p className="text-sm text-emerald-700">从济南出发约1.5小时车程，建议自驾或包车游览，景点间距离较远。</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">门票信息</h4>
              <p className="text-sm text-teal-700">主要景点建议购买套票，东平湖、水浒影视城联票更优惠。</p>
            </div>

            <div className="bg-cyan-50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-800 mb-2">美食推荐</h4>
              <p className="text-sm text-cyan-700">必尝东平湖全鱼宴、湖产河鲜，以及当地特色农家菜。</p>
            </div>

            <div className="bg-sky-50 rounded-lg p-4">
              <h4 className="font-semibold text-sky-800 mb-2">住宿建议</h4>
              <p className="text-sm text-sky-700">推荐入住东平湖畔酒店或水浒主题民宿，体验湖景风光。</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">最佳时间</h4>
              <p className="text-sm text-blue-700">春夏两季最佳，可观赏湖光山色。秋季候鸟迁徙，适合观鸟摄影。</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">特色体验</h4>
              <p className="text-sm text-slate-700">乘船游东平湖、观看水浒实景演出、品尝湖鲜美食是必体验项目。</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">东平文化特色</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">水浒文化</h4>
              <p className="text-sm opacity-90">
                东平是水浒故事的重要发源地，东平湖是八百里水泊梁山的遗存水域，承载着丰富的水浒文化遗产和民间传说。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">湖泊文化</h4>
              <p className="text-sm opacity-90">
                东平湖是山东省第二大淡水湖，湖区渔业发达，形成了独特的湖泊文化和渔家风情，湖产美食远近闻名。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">历史古迹</h4>
              <p className="text-sm opacity-90">
                拥有白佛山石窟造像、戴村坝等珍贵文化遗产，见证了东平地区悠久的历史文明和先民的智慧结晶。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">生态旅游</h4>
              <p className="text-sm opacity-90">
                东平湿地生态系统完善，是候鸟迁徙的重要驿站，每年吸引大量珍稀鸟类栖息，是生态观光的理想目的地。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DongpingRoutes;
