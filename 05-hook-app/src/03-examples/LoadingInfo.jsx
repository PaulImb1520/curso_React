export const LoadingInfo = ({ isLoading }) => {
  console.log(isLoading);
  if (isLoading === true) {
    return <div className="alert alert-info text-center">Loading...</div>;
  }
};
