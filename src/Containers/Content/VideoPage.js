import { useState, useEffect } from "react";
import Video from "../../Components/Content/Video";
import { getVideo, getGirl } from "../../services/apicalls_content";

const VideoPage = ({ location: { state } }) => {
  const { name, id } = state;
  const [video, setvideo] = useState({});

  useEffect(() => {
    if (id) {
      getVideo(id)
        .then((r) => {
          console.log(r);
          setvideo({
            likes: r.likes,
            href: r.href.substring(32),
            girls: r.girls
          });
        })
        .catch((e) => console.error(e));
    }
  }, [0]);

  return (
    <>
      <Video
        name={name}
        id={id}
        likes={video.likes}
        href={video.href}
        girls={video.girls}
      />
      {/* <Video /> */}
    </>
  );
};

export default VideoPage;
