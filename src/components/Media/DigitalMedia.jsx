import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import { FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiPlay, FiImage, FiUser } from 'react-icons/fi';

const DigitalMedia = () => {
  const [activeMedia, setActiveMedia] = useState('videos');

  const videos = [
    { id: 1, title: "MSRS Foundation - Transforming Lives", videoId: "dQw4w9WgXcQ", duration: "3:45" },
    { id: 2, title: "Education for All Initiative", videoId: "dQw4w9WgXcQ", duration: "2:30" },
    { id: 3, title: "Women Empowerment Success Stories", videoId: "dQw4w9WgXcQ", duration: "4:15" }
  ];

  const photos = [
    { id: 1, title: "Health Camp", category: "Healthcare" },
    { id: 2, title: "Tree Plantation Drive", category: "Environment" },
    { id: 3, title: "Education Program", category: "Education" },
    { id: 4, title: "Skill Development Workshop", category: "Skills" },
    { id: 5, title: "Rural Development", category: "Rural" },
    { id: 6, title: "Women Entrepreneurship", category: "Women" }
  ];

  const socialFeeds = [
    { platform: "Instagram", content: "Amazing response at our health camp! #MSRSCares", likes: 1245, comments: 89 },
    { platform: "Facebook", content: "Proud moment as we inaugurate our new learning center", likes: 876, comments: 45 }
  ];

  return (
    <div className="pt-24">
      <PageHeader 
        title="Digital Media"
        subtitle="Stories that Inspire Action."
        description="Stay connected through our latest updates, videos, campaigns, and digital outreach initiatives."
      />
      
      {/* Social Media Links */}
      <section className="py-8 bg-gradient-to-r from-secondary/10 to-primary">
        <div className="container-custom">
          <div className="flex justify-center space-x-6">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <FiYoutube size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <FiInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <FiFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveMedia('videos')}
              className={`px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 ${
                activeMedia === 'videos'
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-primary text-dark hover:bg-secondary/20'
              }`}
            >
              <FiPlay />
              <span>Videos</span>
            </button>
            <button
              onClick={() => setActiveMedia('photos')}
              className={`px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 ${
                activeMedia === 'photos'
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-primary text-dark hover:bg-secondary/20'
              }`}
            >
              <FiImage />
              <span>Photos</span>
            </button>
          </div>

          {/* Videos */}
          {activeMedia === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl bg-primary">
                    <div className="w-full h-48 bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <FiYoutube className="text-white text-6xl" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiPlay className="text-white text-5xl" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="mt-3 font-semibold text-dark">{video.title}</h3>
                </div>
              ))}
            </div>
          )}

          {/* Photos */}
          {activeMedia === 'photos' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                  <div key={photo.id} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl bg-primary h-64 flex items-center justify-center">
                      <FiImage className="text-secondary text-6xl" />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold text-dark">{photo.title}</h3>
                      <p className="text-sm text-secondary">{photo.category}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-accent transition-colors">
                  View All Photos
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Social Media Feeds */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">Latest from Social Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialFeeds.map((feed, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="p-4 border-b flex items-center space-x-3">
                  {feed.platform === 'Instagram' && <FiInstagram className="text-pink-600 text-2xl" />}
                  {feed.platform === 'Facebook' && <FiFacebook className="text-blue-600 text-2xl" />}
                  <span className="font-semibold">{feed.platform}</span>
                </div>
                <div className="bg-primary h-64 flex items-center justify-center">
                  <FiUser className="text-secondary text-8xl" />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">{feed.content}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>❤️ {feed.likes} likes</span>
                    <span>💬 {feed.comments} comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMedia;