import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var myarr=[
    {name:"Devang", Gender:"M", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfh3I2B4EwpoCQKTRWTKw45YDjtBxuyDsG4NCMlCMr3OHnWXSdSB8QT4Y&s"},
    {name:"Divyesh", Gender:"M", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYfwcNEJ1yNpo9iGS3oHZh2j5UycW-sHUGPOXWPyxjjMoNQOc1-RT2W4&s"},
    {name:"King", Gender:"M", photo:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fi.pravatar.cc%2F250%3Fu%3Dmail%40ashallendesign.co.uk"},
    {name:"Moana", Gender:"F", photo:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"}
  ]
}

return(<div>
  <h2>App</h2>
  <table border={1}>
    <thead>
    <tr>
      <th>Index</th>
      <th>Name</th>
      <th>Gender</th>
      <th>Photo</th>
    </tr>
    </thead>
    <tbody>
      myarr.map((value,index){
        <tr>
          <td>{index+1}</td>
          <td>{value.name}</td>
          <td>{value.Gender}</td>
          <td><img src={value.photo} /></td>
        </tr>
      });
    </tbody>
    
  </table>
</div>
)

export default App
