import React, { useState } from 'react';
import { ArrowLeft, Search, Download, Book, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface LocalChroniclesSearchProps {
  onBack: () => void;
}

interface Chronicle {
  id: string;
  title: string;
  period: string;
  author: string;
  description: string;
  year: string;
  category: string;
  image: string;
}

const LocalChroniclesSearch: React.FC<LocalChroniclesSearchProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChronicle, setSelectedChronicle] = useState<Chronicle | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // 济南地方志数据
  const chronicles: Chronicle[] = [
    {
      id: '1',
      title: '济南府志',
      period: '明代',
      author: '王象春等',
      description: '明代济南府的官修地方志，详细记录了济南府的政治、经济、文化、地理等各方面情况',
      year: '1596年',
      category: '府志',
      image: 'https://pic.baike.soso.com/p/20090109/20090109120000-102238.jpg'
    },
    {
      id: '2',
      title: '历城县志',
      period: '清代',
      author: '李开先等',
      description: '清代历城县志，记录了济南市区及周边地区的历史文化、风土人情',
      year: '1673年',
      category: '县志',
      image: 'https://static.yueya.net/shuomingshu.cn//wp-content/uploads/images/2022/11/25/daeace802891460c8c08c5f74570d727_mugypk0a1st.jpg'
    },
    {
      id: '3',
      title: '章丘县志',
      period: '民国',
      author: '张尔岐等',
      description: '民国时期章丘县志，详细记录了章丘地区的历史变迁和文化传承',
      year: '1935年',
      category: '县志',
      image: 'https://youimg1.c-ctrip.com/target/100o0z000000n5xzw010C.jpg'
    },
    {
      id: '4',
      title: '长清县志',
      period: '清代',
      author: '刘墉等',
      description: '清代长清县志，记录了长清地区的地理环境、历史沿革、人文景观',
      year: '1774年',
      category: '县志',
      image: 'https://img1.qunarzz.com/travel/d5/1703/5b/4590a549977c07b5.jpg_r_640x426x70_16dec1a9.jpg'
    },
    {
      id: '5',
      title: '济阳县志',
      period: '清代',
      author: '王士禛等',
      description: '清代济阳县志，详细记录了济阳地区的历史文化和社会发展',
      year: '1692年',
      category: '县志',
      image: 'https://p2.ssl.qhimgs1.com/t043517af89a59ad5d2.jpg'
    },
    {
      id: '6',
      title: '平阴县志',
      period: '明代',
      author: '于慎行等',
      description: '明代平阴县志，记录了平阴地区的自然环境、历史沿革、文化传统',
      year: '1588年',
      category: '县志',
      image: 'https://preview.qiantucdn.com/auto_machine/20211115/c11a6d59-d759-4c42-8df7-e66d1250d8a6.jpg!w1024_new_small'
    },
    {
      id: '7',
      title: '商河县志',
      period: '清代',
      author: '田雯等',
      description: '清代商河县志，详细记录了商河地区的地理位置、历史文化、民俗风情',
      year: '1685年',
      category: '县志',
      image: 'https://p0.ssl.qhimgs1.com/t01043cba46899d7460.jpg'
    },
    {
      id: '8',
      title: '济南市志',
      period: '现代',
      author: '济南市地方志编纂委员会',
      description: '现代济南市志，全面记录了济南市的历史发展、现状和未来规划',
      year: '1998年',
      category: '市志',
      image: 'https://dimg04.c-ctrip.com/images/1A08190000015mhg83D3B.jpg'
    },
    {
      id: '9',
      title: '齐乘',
      period: '明代',
      author: '顾炎武',
      description: '明代学者顾炎武编撰的齐地地方志，详细记录了包括济南在内的齐地历史文化',
      year: '1662年',
      category: '通志',
      image: 'https://photo.tuchong.com/18235848/f/341825397.jpg'
    },
    {
      id: '10',
      title: '山东通志',
      period: '清代',
      author: '赵申乔等',
      description: '清代山东通志，其中包含大量济南地区的历史文化资料',
      year: '1736年',
      category: '通志',
      image: 'https://youimg1.c-ctrip.com/target/10040v000000k1u1m3901_R_671_10000_Q90.jpg'
    }
  ];

  // 过滤地方志
  const filteredChronicles = chronicles.filter(chronicle =>
    chronicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chronicle.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chronicle.period.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chronicle.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChronicleClick = (chronicle: Chronicle) => {
    setSelectedChronicle(chronicle);
    setShowDownloadModal(true);
  };

  const handleDownload = () => {
    window.open('https://pan.baidu.com/s/1ysIRviALvJ9RSYMWjx2QAA?pwd=Q4D7', '_blank');
    setShowDownloadModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-4xl font-bold text-gray-900">济南地方志检索解读</h1>
          <p className="text-xl text-gray-600 mt-2">探索济南历史文献，传承千年文化记忆</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索地方志名称、作者、朝代或类别..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            共收录 {chronicles.length} 部济南地方志，当前显示 {filteredChronicles.length} 部
          </p>
        </div>

        {/* Chronicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChronicles.map((chronicle) => (
            <div
              key={chronicle.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleChronicleClick(chronicle)}
            >
              <div className="relative h-48">
                <img
                  src={chronicle.image}
                  alt={chronicle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{chronicle.title}</h3>
                    <p className="text-sm opacity-90">{chronicle.period}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {chronicle.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{chronicle.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Book className="w-4 h-4" />
                    <span>{chronicle.author}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {chronicle.description}
                </p>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  查看下载
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredChronicles.length === 0 && (
          <div className="text-center py-12">
            <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">未找到相关地方志</h3>
            <p className="text-gray-500">请尝试其他关键词搜索</p>
          </div>
        )}
      </div>

      {/* Download Modal */}
      {showDownloadModal && selectedChronicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">下载地方志</h2>
              </div>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                ×
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {selectedChronicle.title}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedChronicle.period} · {selectedChronicle.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  <span>作者：{selectedChronicle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>类别：{selectedChronicle.category}</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                {selectedChronicle.description}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-2">下载说明：</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li>点击下载将跳转到百度网盘</li>
                    <li>网盘中包含完整的地方志文献集合</li>
                    <li>提取码：Q4D7</li>
                    <li>请在网盘中查找对应的济南地方志文件</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
              >
                取消
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                前往下载
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalChroniclesSearch;