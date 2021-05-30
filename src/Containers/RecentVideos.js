import { useState, useEffect } from "react";
import DisplayGallery from "../Components/Content/DisplayGallery";
import { getRecentVideos } from "../services/apicalls_content";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RecentVideos = ({ elementsPerPage, offset }) => {
  const [videos, setVideos] = useState([]);
  const pageToRedirectTo = `/video`;

  useEffect(() => {
    getRecentVideos({ limit: elementsPerPage, offset })
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
        galleryHeader={"Recent Videos"}
        galleryObjects={videos}
        pageToRedirectTo={pageToRedirectTo}
      />
      <Box textAlign={"center"} mb={10}>
        <Button colorScheme={"blue"}>
          <Link to="/recent-videos">View More </Link>
        </Button>
      </Box>
    </>
  );
};

export default RecentVideos;
