import React, { useEffect, useState } from 'react';
import './project.css'
const Project = () => { 

    return (
        <div className="container" id="project">
            <h2 className="section-header">
                PROJECTS
            </h2>
            <div>
                
<ul class="cards">
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title">Nine Mans Morris</div>
                  <p class="card__text">
                    Made an online version of the board game Nine Mans Morris game using JavaFX. This game can be played
among 2 players and includes a step by step walk through tutorial of the game.
                  </p>
                              <a href="https://github.com/jon65/Nine-Mans-Morris" target="_blank" rel="noopener noreferrer">

                    <button type="button" class="btn btn-outline-secondary">View Repository</button>
                    </a>

      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--river"></div>
      <div class="card__content">
        <div class="card__title">Fire hotspot</div>
                  <p class="card__text">
Created a weather reporting simulation app detecting Australian fires. Processed incoming stream data in
10-second batches, identifying fires, causes, and sources. Utilized PySpark, Apache Kafka, and MongoDB for
data processing and storage, with visualization via matplotlib and geomap. Enabled live climate data display,
                    charts, and a geomap of recorded fires.                  </p>
            <a href="https://github.com/jon65/SparkStreaming_fire_hotspots_datapipeline" target="_blank" rel="noopener noreferrer">
                  <button type="button" class="btn btn-outline-secondary">View Repository</button>
                  </a>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--record"></div>
      <div class="card__content">
        <div class="card__title">CampsideReview</div>
                  <p class="card__text">
A full stack web application for posting reviews on campsites around the world. Users can rate an existing
campsite, leave their own reviews and upload a new campsite together with their review if the campsite does
not exist                  </p>
                  <a href="https://github.com/jon65/CampsideReview" target="_blank" rel="noopener noreferrer">
                  <button type="button" class="btn btn-outline-secondary">View Repository</button>
</a>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--flowers"></div>
      <div class="card__content">
        <div class="card__title">BaLance</div>
                  <p class="card__text">
As part of a full year project with other students, we developed a tool for assisting tutors to create well
        balanced student groups. The application creates groups based on factors such as personality types, academic
        performance, and commitment hours that can be uploaded as a CSV file. Additionally, students have the
                    option to upload custom python scripts to perform personalised student groupings.
                  </p>
                                    <a href="https://github.com/Monash-FIT3170/BaLance-Team-Forming-Dashboard?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">

                    <button type="button" class="btn btn-outline-secondary">View Repository</button>
                    </a>
      </div>
    </div>
  </li>
</ul>
           </div>
        </div>
    );
}

export default Project;