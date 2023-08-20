import React from "react";
import { Button } from "./Button";
const ButtonList = () => {
  const List = [
    "All",
    "cricket",
    "live",
    "news",
    "songs",
    "entertainment",
    "motivation",
    "mixes",
    "bhajan",
    "lofi",
    "lectures",
  ];
  return (
    <div>
      {List.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
      {/* <Button name={"All"} />
      <Button name={"cricket"} />
      <Button name={"live"} />
      <Button name={"news"} />
      <Button name={"songs"} />
      <Button name={"entertainment"} />
      <Button name={"motivation"} />
      <Button name={"mixes"} />
      <Button name={"bhajan"} />
      <Button name={"lofi"} />
      <Button name={"lectures"} /> */}
    </div>
  );
};

export default ButtonList;
