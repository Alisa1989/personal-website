import React, { Component } from "react";

export default class Odin extends Component {
  render() {
    return (
      <section className="notes">
        <h1>Homepage</h1>
        <p>
          Will display projects created through{" "}
          <a
            href="https://www.theodinproject.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Odin Project
          </a>
        </p>
        <a href="./notes.html">Notes</a>
        <h2>Boilerplate HTML</h2>
        {/* <!--Here we are actually displaying boilerplate HTML--> */}
        <div style={{ marginLeft: "15px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;!DOCTYPE html&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;html&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta
          charset=&quot;utf-8&quot;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Plain
          text &lt;/title&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt; <br />
        </div>
        <h2>Always include</h2>
        <div>
          rel="noopener noreferrer"
          <p>
            <em>noopener</em> in your a tags to prevent the target site in the
            original tab to be replaced by the phishing site.
          </p>
          <p>
            <em>noreferrer</em> value can be done if you wish to not let the
            opened link know that your webpage links to it
          </p>
        </div>
      </section>
    );
  }
}
