import Input from "../Input";
import { useState } from "react";
export default function Index() {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");
  return (
    <div>
      <div className="flex flex-row w-50">
        <div className="flex flex-column w-50">{title1}</div>
        <div className="flex flex-column w-50">
          <Input
            placeholder="Input 1"
            onChange={e => {
              setTitle1(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-row w-50">
        <div className="flex flex-column w-50">{title2}</div>
        <div className="flex flex-column w-50">
          <Input
            placeholder="Input 2"
            onChange={e => {
              setTitle2(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-row w-50">
        <div className="flex flex-column w-50">{title3}</div>
        <div className="flex flex-column w-50">
          <Input
            placeholder="Input 3"
            onChange={e => {
              setTitle3(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-row w-50">
        <div className="flex flex-column w-50">{title4}</div>
        <div className="flex flex-column w-50">
          <Input
            placeholder="Input 4"
            onChange={e => {
              setTitle4(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
