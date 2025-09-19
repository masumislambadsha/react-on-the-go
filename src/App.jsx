// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Countries from "./components/Countries";
import "./App.css";
import { Suspense } from "react";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-bold">React world on the go</h1>

      <Suspense fallback={<p>Nadir Bhai Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
