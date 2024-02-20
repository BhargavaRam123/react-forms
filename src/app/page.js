"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [obj, setobj] = useState({
    name: "",
    age: "",
    checkvalue: true,
    mode: "",
    car: "",
  });
  function onchange(e) {
    setobj((p) => {
      return {
        ...p,
        [e.target.name]:
          e.target.name === "checkvalue" ? e.target.checked : e.target.value,
      };
    });
  }
  // console.log(obj);
  function onsubmit(e) {
    e.preventDefault();
    console.log("submitting form....");
    console.log(obj);
  }
  return (
    <div className="container" onSubmit={onsubmit}>
      <form>
        <input type="text" name="name" onChange={onchange} />
        <input type="text" name="age" onChange={onchange} />
        <input
          type="checkbox"
          name="checkvalue"
          id="checkvalue"
          onChange={onchange}
          checked={obj.checkvalue}
        />
        <label htmlFor="checkvalue">want to check?</label>
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            name="mode"
            value="gaming-mode"
            onChange={onchange}
            id="mode"
          />
          <label htmlFor="mode">gaming mode</label>
          <input
            type="radio"
            name="mode"
            value="running-mode"
            onChange={onchange}
            id="mode2"
          />
          <label htmlFor="mode2">running mode</label>
        </fieldset>
        <label htmlFor="carid">Favourate Car?</label>
        <select name="car" id="carid" onChange={onchange}>
          <option value="audi">audi</option>
          <option value="benz">benz</option>
          <option value="lexus">lexus</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}
