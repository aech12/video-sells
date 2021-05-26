import { useState, useEffect } from "react";
import Girl from "../../Components/Content/Girl";
import { getGirl } from "../../services/apicalls_content";

const GirlPage = ({ location: { state } }) => {
  const { name, id } = state;
  const [girl, setgirl] = useState({});

  useEffect(() => {
    if (id) {
      getGirl(id)
        .then((r) => {
          const age = calculateAge(r.birthday);
          setgirl({ age, picture: r.picture });
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
      <Girl name={name} age={girl.age} picture={girl.picture} />
    </>
  );
};

export default GirlPage;
