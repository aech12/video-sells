import { useState, useEffect } from "react";
import DisplayGallery from "../Components/Content/DisplayGallery";
import { getTopVideos } from "../services/apicalls_content";
import { baseUrl } from "../services/utils";
import { Box, Button } from "@chakra-ui/react";
const TopVideos = ({ elementsPerPage, offset }) => {
  const [videos, setVideos] = useState([]);
  const pageToRedirectTo = `/video`;

  useEffect(() => {
    getTopVideos({ limit: elementsPerPage, offset })
      .then((r) => {
        const fetchedVideos = r.pageElements.map((video) => {
          return { id: video.id, name: video.title, picture: video.picture };
        });
        setVideos(fetchedVideos);
      })
      .catch((e) => console.error(e));
  }, [0]);

  return (
    <>
      <DisplayGallery
        galleryHeader={"Top Videos"}
        galleryObjects={videos}
        pageToRedirectTo={pageToRedirectTo}
      />
      <Box textAlign={"center"}>
        <Button color={"red.400"}>View More</Button>
      </Box>
    </>
  );
};

export default TopVideos;
