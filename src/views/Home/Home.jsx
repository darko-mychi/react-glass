import { useGlobal } from "reactn";

import { useTitle } from "./../../utils";

export default function Home() {
  useTitle("Home");

  const [initial, setInitial] = useGlobal('initial');

  setTimeout(() => {
    setInitial("hobies");
  }, 3000);

  return (
    <div className="flex flex:center-all" style={{ height: "100vh" }}>
      <div className="px:_3 py:_5" style={{ width: "50%" }}>
        <h1 className="mb:_2">Welcome to React Blocks!</h1>
        <p>
          {initial}
          React Blocks is a simple react js boilerplate which focuses on providing a simple and pain-free
          developer experience. React Blocks uses items like named routes, simple state management instead of
          overblown libraries like redux. With React Blocks, the simpler, the better.
        </p>
      </div>
    </div>
  );
}