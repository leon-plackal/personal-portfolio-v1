import { useState } from "react";
import "./App.css";

function Tabs() {
    //stupid goddamn class toggler for tabs
    function myFunction(e) {
        var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function(el) {
          el.classList.remove("active");
        });
        e.classList.add("active");
      }

  return (
    <div className="tabholder">
      <div className="bloc-tabs">
        <button className="tab_btn" onClick={({target})=> myFunction(target)}>Tab 1</button>
        <button className="tab_btn"  onClick={({target})=> myFunction(target)}>Tab 2</button>
        <button className="tab_btn"  onClick={({target})=> myFunction(target)}>Tab 3</button>
        <button className="tab_btn"  onClick={({target})=> myFunction(target)}>Tab 4</button>
      </div>

      <div className="content-tabs">
        <div
          className= "content"
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className= "content"
          >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className= "content"
          >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className= "content"
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;