import Girl from "../../Components/Content/Girl";

const GirlPage = ({ location: { state } }) => {
  console.log(state);
  const { name, age, picture } = state || {};
  return (
    <>
      <Girl name={name} age={age} picture={picture} />
    </>
  );
};

export default GirlPage;
