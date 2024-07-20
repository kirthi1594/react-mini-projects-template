// import { useState } from "react";
// import { Input,InputGroup,InputRightElement} from "@chakra-ui/react";
// import {SearchIcon} from "@chakra-ui/icons"

// function App() {
//   const [expand, setExpand] = useState(false);

//   return (
//     <div
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(0, 0, 255, 0.8), rgba(0, 255, 255, 0.8))",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
//     <InputGroup border={"1px solid white"} backgroundColor={"#f3f3f3"} overflow={"hidden"} transition={"all 0.5s ease"} borderRadius={"10px"} width={!expand?"250px":"50px"} onClick={()=>{setExpand(!expand)}} >
//     <InputRightElement pointerEvents='none'>
//       <SearchIcon color='blue.300' />
//     </InputRightElement>
//     <Input cursor={"pointer"} type='text' placeholder='Search...' width={!expand?"250px":"50px"} transition={"all 0.5s ease"} border={"none"} outline={"none"} />
//   </InputGroup>
//   </div>
//   // );
// }

// export default App;



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
    />
  </head>
  <body>
    <!-- <nav>
      <h1>CompanyName</h1>
      <h3><a href="#FOOTER">About Us</a></h3>
    </nav> -->
    <header>
      <div id="header_sec">
        <img
          src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-electronics-logo-template-wijreja93ac5d3.webp"
          alt="Logo"
        />
        <div>
          <h2>About US</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            ducimus reiciendis voluptatem fugit facere unde ipsum nostrum
            voluptates quod sequi quos nisi vel dolorem, soluta quaerat.
            Voluptatum minus placeat dolor. Id ipsum ratione repellat ut eius
            incidunt pariatur fugiat atque porro repudiandae, nisi, reiciendis
            illo numquam qui sapiente facere aperiam minus magni. Rerum impedit
            quibusdam, deserunt ratione qo dignissimos tempore repellat aut ab.
            Magnam, iste laboriosam?
          </p>
        </div>
      </div>
    </header>
    <div id="hero">
      <h1>Products</h1>
      <div id="gridSection" data-aos="fade-right"></div>
    </div>
    <footer id="FOOTER">
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </footer>
  </body>
  <script src="/script.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <script>
    // Initialize AOS
    AOS.init();
  </script>
</html>



* {
  padding: 0;
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  background-color: skyblue;
}
#hero {
  padding: 10px;
}
header {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 255, 0.8), rgba(0, 255, 255, 0.8));
  background-image: url("https://www.bankmycell.com/blog/wp-content/uploads/2023/03/post-how-many-iphones-have-been-sold.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
#header_sec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
  gap: 20px;
}
#hero>h1 {
  text-align: center;
}
#header_sec>div {
  width: 30%;
  background-color: skyblue;
  opacity: 0.4;
  padding: 10px;
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
}

#gridSection {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
}
#gridSection>div {
  border: 2px dashed blue;
  padding: 10px;
  height: 500px;
  display: grid;
  justify-content: center;
  align-items: center;
}
#gridSection>div>img {
  width: 200px;
  margin: 0 auto;
}
footer {
  padding: 10px;
  background: #000;
  color: white;
}
footer>ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
}
