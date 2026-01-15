import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Oops, den siden lastet ikke riktig...</h1>
    </>
  );
}
