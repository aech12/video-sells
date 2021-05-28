import { useState, useEffect } from "react";
import Video from "../../Components/Content/Video";
import { getVideo, getGirl } from "../../services/apicalls_content";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
  const [video, setvideo] = useState({});
  let { id } = useParams();
  id = id.substring(1);

  useEffect(() => {
    if (id) {
      getVideo(id)
        .then((r) => {
          setvideo({
            name: r.title,
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
        id={id}
        name={video.name}
        likes={video.likes}
        href={video.href}
        girls={video.girls}
      />
    </>
  );
};

export default VideoPage;
