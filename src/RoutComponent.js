import React from 'react'
import Description from './Description'
import App from './App'
import { Route } from 'react-router'
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';


const RoutComponent = () => {
    const data = [
        {
          id: uuidv4(),
          title: "The 100",
          description:
            " drama television series developed by Jason Rothenberg and is loosely based on the book series of the same name by Kass Morgan. The series follows a group of Delinquents, who have been sent down to Earth to see if it is survivable or not.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81Rbllw0q5L._AC_SL1500_.jpg",
          duration: "174 minutes",
          year: "2017",
          rate: 5,
        },
        {
          id: uuidv4(),
          title: "The peaky blinders",
          description:
            "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby",
          posterUrl:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e60d59103015959.5f43f7d599ad9.jpg",
          duration: "174 minutes",
          year: "2020",
          rate: 4,
        },
        {
          id: uuidv4(),
          title: "Dark",
          description:
            "Dark is a German science fiction thriller streaming television series co-created by Baran bo Odar and Jantje Friese. It ran for three seasons from 2017 to 2020. In the aftermath of a child's disappearance",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91G5xnoFOqL._AC_SY606_.jpg",
          duration: "174 minutes",
          year: "2020",
          rate: 4,
        },
      ];
    
      const [movieList, setMovieList] = useState(data);
  return (
    <div>
        <Route exact path="/" render={(props) => <App {...props} movieList={movieList} setMovieList={setMovieList}/>}></Route>
       <Route path="/description/:id" render={(props) => <Description {...props} movieCard={movieList}/>}></Route>
    </div>
  )
}

export default RoutComponent
