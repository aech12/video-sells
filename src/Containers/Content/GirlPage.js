import { useState, useEffect } from "react";
import Girl from "../../Components/Content/Girl";
import { getGirl } from "../../services/apicalls_content";
import { useParams } from "react-router-dom";

const GirlPage = () => {
  const [girl, setgirl] = useState({});
  let { id } = useParams();
  id = id.substring(1);

  useEffect(() => {
    if (id) {
      getGirl(id)
        .then((r) => {
          const age = calculateAge(r.birthday);
          setgirl({ name: r.name, age, picture: r.picture });
        })
        .catch((e) => console.error(e));
    }
  }, [0]);

  const calculateAge = (birthday) => {
    var ageDifMs =
      new Date(Date.now()).getFullYear() - birthday.substring(0, 4);
    return ageDifMs;
  };

  return (
    <>
      <Girl name={girl.name} age={girl.age} picture={girl.picture} />
    </>
  );
};

export default GirlPage;
