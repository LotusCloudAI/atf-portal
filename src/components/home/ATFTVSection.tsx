import React from "react";

const ATFTVSection = () => {
  return (
    <section className="bg-[#1E3A8A] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ATF TV & YouTube
        </h2>
        <p className="text-gray-200 mb-10">
          Watch our latest programs, interviews, events, and community highlights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Video 1 */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
              title="ATF Video 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
              title="ATF Video 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 3 */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
              title="ATF Video 3"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

        </div>

        <div className="mt-10">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#B91C1C] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default ATFTVSection;