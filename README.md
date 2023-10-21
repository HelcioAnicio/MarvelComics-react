# Marvel_React 
<!-- Here you can see the weather of any city, just write the name in the search field. -->

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
  <!-- - [Acknowledgments](#acknowledgments) -->
  <!-- - [Building your project](#Building-your-project) -->

## Overview

### The challenge

The users should be able to:
<!--
- Search a lot of citys in the world
- See the weather temperature of the searched city
- Also see the feature of each weather temperature
- The background interactive according to weather temperature
- View the optimal layout depending on their device's screen size.
-->
### Screenshot
<!--
- ![image](https://github.com/HelcioAnicio/Weather/assets/117602073/55fab435-ffe8-4855-903c-2a1d899a277e)
-->
### Links

- https://marvel-comics-react-helcioanicio.vercel.app/

## My process

### Built with
<!--
- Semantic HTML5
- SASS
- Flexbox
- JavaScript
- Conditional
- API
- Async and Await
- Ternary conditional
- Events

### What I learned

Om this project I practiced my skill of work with API query. I used getWeather and async, await.
I also used conditionals what each weather temperature the background behaved differently.

```JS
const showWeather = async (citySearch) => {
  const data = await getWeather(citySearch);
  console.log(data);
  informations.style.display = "flex";
  fieldSearch.value = "";

  city.innerHTML = data.name;
  country.innerHTML = ` -${data.sys.country}`;
  deg.innerHTML = `${parseInt(data.main.temp)}°C`;
  weather.innerHTML =
    data.weather[0].description[0].toUpperCase() +
    data.weather[0].description.substring(1);
  imageCondition.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  background();
};
```

### Continued development

I want to query one API bigger than i used, and i'll do a project better and more beautiful.
-->
### Useful resources

This resource helped me a lot to understand how to do to implemented JS.
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://stackoverflow.com/

## Author

- Linkedin - https://www.linkedin.com/in/helcio-anicio/
- Vercel - https://vercel.com/helcioanicio

<!--
## Acknowledgments
 -->


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
