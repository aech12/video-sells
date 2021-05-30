import { useState, useEffect } from "react";
import DisplayGallery from "../Components/Content/DisplayGallery";
import { getTopVideos } from "../services/apicalls_content";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Box textAlign={"center"} mb={10}>
        <Button colorScheme={"blue"}>
          <Link to="/top-videos">View More </Link>
        </Button>
      </Box>
    </>
  );
};

export default TopVideos;
