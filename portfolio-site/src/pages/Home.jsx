import './Home.css'
import React, { useEffect, useState } from 'react';
import { api } from "../lib/api";

/*
File Name: home.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-14

Description: Handles displaying home page for the portfolio site.
*/
export default function Home() {

  const [home, setHome] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await api("/api/home");
        setHome(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const links = home?.homelink ?? home?.homelinks ?? [];

  return (
    <>
      <div class="home-page-container">
        <h1>Welcome!</h1>
        <p>
          {home.greeting} <strong>{home.name}</strong>.  
          {home.intro}
          <span></span>
          {links.map(({to, item, text}) => (
            <span key={to}>
              <a href={to}> {item}</a> {text}
            </span>
          ))}
        </p>

        <h2>{home.missionName}</h2>
        <p class="mb-0">{home.missionDetails}</p>
      </div>
    </>
  )
}