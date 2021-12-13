import propTypes from "prop-types";

function MovieDetail({ coverImage, title, description, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default MovieDetail;
