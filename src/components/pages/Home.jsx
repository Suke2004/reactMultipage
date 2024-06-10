import React, {useState} from "react";

export const Home = () => {
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      minHeight: "93.8vh"
    }}>
      <div style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1542617827-59ab88ecee35?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex: "1",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center", 
        flexDirection: "column",
        padding: "50px" 
      }}>
        <h1 style={{ color: "#25034f", marginBottom: "20px"}}>Get everything</h1>
        <h1 style={{ color: "#25034f" }}>At One platform</h1>
      </div>
      <footer style={{ 
        backgroundColor: "#e8c8e2",
        color: "#25034f",
        padding: "10px",
        textAlign: "right" 
      }}>
        <p>
          <h3>Made by Jayasree Maddu</h3>
        </p>
        <p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}> 
            <a href="https://twitter.com"><img src="path_to_twitter_icon.svg" alt="Twitter" style={{ marginRight: "10px" }} /></a>
            <a href="https://instagram.com"><img src="path_to_instagram_icon.svg" alt="Instagram" style={{ marginRight: "10px" }} /></a>
            <a href="https://facebook.com"><img src="path_to_facebook_icon.svg" alt="Facebook" /></a>
          </div>
        </p>
      </footer>
    </div>
  );
};
