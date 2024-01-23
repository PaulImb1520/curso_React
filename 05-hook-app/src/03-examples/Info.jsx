export const Info = ({ name, location }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{name}</p>
      <footer className="blockquote-footer">{location}</footer>
    </blockquote>
  );
};
