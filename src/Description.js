/** @format */



const Description = ({movieCard,match}) => {
let movies = movieCard.find(el=>el.id === match.params.id)

  return (
    <div>
      <h1>{movies.description}</h1>
    </div>
  );
};

export default Description;

