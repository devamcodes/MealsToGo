import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // incoming prop object must be in this format
  // [{id:'',link:'',urlExt:''},
  // {id:'',link:'',urlExt:''},
  // {id:'',link:'',urlExt:''},]
  //
  return (
    <div>
      Navbar
      <ul>
        {props.links.map((obj) => {
          return (
            console.log(obj.link),
            (
              <Link to={obj.urlExt}>
                <li>{obj.link}</li>
              </Link>
            )
          );
        })}
      </ul>
    </div>
  );
}
