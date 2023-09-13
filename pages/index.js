import { useState } from "react";
import copy from "copy-to-clipboard";


const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
	    { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "High-Quality (480x360)", code: "hqdefault" },
        { resolution: "Medium Quality (320x180)", code: "mqdefault" },
        { resolution: "Normal Quality (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">YT Thumbnail Downloader</h1>
        <p className="text-gray-600">
          Download YouTube thumbnails easily and fast.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <br /><br /><br /><br /><br />
      <section className="mb-8" >
        <center><h2 className="text-xl font-semibold mb-2">About YT Thumbnail Downloader</h2></center>
        <p className="text-gray-600">
          YT (You Thumbnail) YouTube thumbnail downloader allows you to
          download YouTube thumbnails easily and fastly. It's an online tool,
          not need to install any app, entirely free for anyone to use.
        </p>

        <h2 className="text-xl font-semibold mb-2">What's YouTube Thumbnail?</h2>
        <p className="text-gray-600">
          YouTube thumbnail is the video cover image that gives a preview of
          the video. There are two types of YouTube thumbnails: automatically
          generated by YouTube and uploaded by the creator. Thumbnails uploaded
          by creators are also called custom thumbnails. No matter what kind of
          thumbnail, its URL is hidden, you can't find the thumbnail link on
          YouTube, and you can't save it.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          How many thumbnails does a YouTube video have?
        </h2>
        <p className="text-gray-600">
          A YouTube video can have up to nine thumbnails, but not every video
          has nine thumbnails. There are seven thumbnails guaranteed to exist:
        </p>
        <ul className="text-left">
          <li>Player Background 480x360</li>
          <li>Start 120x90</li>
          <li>Middle 120x90</li>
          <li>End 120x90</li>
          <li>High-Quality 480x360</li>
          <li>Medium Quality 320x180</li>
          <li>Normal Quality 120x90</li>
        </ul>
        <p className="text-gray-600">
          Besides, if the video is high-definition, there will be two other
          sizes of the thumbnail:
        </p>
        <ul className="text-left">
          <li>Standard Definition 640x480</li>
          <li>Maximum Resolution 1920x1080</li>
        </ul>
        <p className="text-gray-600">
          But the most commonly used sizes are High-Quality, Medium Quality, and
          full size. Therefore, the YT Thumbnail Downloader only provides
          downloads in these three sizes. If you need other sizes, I'll tell you
          how to get it later.
        </p>

        <h2 className="text-xl font-semibold mb-2">Why download thumbnails?</h2>
        <p className="text-gray-600">
          YouTube video thumbnails are one of the most important metadata of a
          video, and attentive creators will carefully design the video cover.
          That has resulted in most of the video covers on YouTube being
          beautiful, either funny or creative. It makes many people want to
          download and save. In general, based on the following purposes:
        </p>
        <ul className="text-left">
          <li>Save YouTube thumbnail as wallpaper.</li>
          <li>Share thumbnails to your blog or social media.</li>
          <li>Download video thumbnails as a source of inspiration for video cover.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Why need a thumbnail downloader?</h2>
        <p className="text-gray-600">
          As we said before, the Youtube thumbnail image link is not visible,
          which makes it difficult to save the video cover. Although some tools
          can grab thumbnails, none of them as simple as the Youtube thumbnail
          downloader.
        </p>

        <h2 className="text-xl font-semibold mb-2">Where to get the YouTube video links?</h2>
        <p className="text-gray-600">
          Because of our thumbnail downloader downloads via video link, you
          must find the video link before downloading. Open the video you want
          to download in the browser or Youtube APP, click the share button
          below the video, the Youtube video link is in the pop-up interface.
        </p>

        <h2 className="text-xl font-semibold mb-2">YouTube thumbnail downloader features:</h2>
        <p className="text-gray-600">
          The YT thumbnail downloader is a good mate of YouTube creators. It
          mainly has the following features:
        </p>
        <ul className="text-left">
          <li>Extract YouTube thumbnails online easily.</li>
          <li>Find and view HD thumbnails quickly.</li>
          <li>Get youtube video thumbnail image links.</li>
          <li>Save thumbnails to your device.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">How to use the YT thumbnail downloader?</h2>
        <p className="text-gray-600">
          It's effortless to grab YouTube thumbnail by using our thumbnail downloader.
        </p>
        <ol className="text-left">
          <li>Copy and paste the video URL to the search box above.</li>
          <li>YT thumbnail downloader automatically grabs three different sizes of thumbnails.</li>
          <li>Select a thumbnail to download. We recommend downloading HD thumbnails.</li>
        </ol>

        <h2 className="text-xl font-semibold mb-2">Can I use the downloaded thumbnails on YouTube?</h2>
        <p className="text-gray-600">
          The copyright of the thumbnail belongs to the creator or designer. Without the permission of the copyright owner, they can report and sue you for using the content in the thumbnail. Therefore, I don't recommend copying the video thumbnails of others. But it can be used as a design inspiration to create your thumbnails.
        </p>
      </section>
       {/* Container for left and right ads */}
      <div className="flex justify-between">
        <div className="w-1/6">
          {/* Display the AdSense component on the left side */}
          <div className="ads-left"><script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6949411170952048"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '160px', height: '600px' }}
            data-ad-client="ca-pub-6949411170952048"
            data-ad-slot="8776739419"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div></div>

        <div className="w-1/6">
          {/* Display the AdSense component on the right side */}
		  <div className="ads-right">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6949411170952048"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '160px', height: '600px' }}
            data-ad-client="ca-pub-6949411170952048"
            data-ad-slot="8776739419"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
		</div>
      </div>	  
    </div>
  );	
};

export default Index;
