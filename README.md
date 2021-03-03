[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Mission 6 & 7</h3>
  <h5 align="center">Advanced Software Developer & UX Design</h5>
  <h5 align="center">Team Mission</h5>

  <p align="center">
    React / Redux / NodeJS / Docker
    <br />
    <a href="https://github.com/danielminhnguyen/levelUpWorks"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/danielminhnguyen/levelUpWorks">View Demo</a>
    ·
    <a href="https://github.com/danielminhnguyen/levelUpWorks/issues">Report Bug</a>
    ·
    <a href="https://github.com/danielminhnguyen/levelUpWorks/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

- [react](https://reactjs.org)
- [react-redux](https://redux.js.org)
- [Docker](https://www.docker.com)

<!-- GETTING STARTED -->

## Getting Started

This is a team collaboration mission project for Mission Ready 6 & 7.

Other team members are

- [Jenifer Vinnarason]()
- [Jessica Labesehr]()
- [Josh Peckston]()
- [Nick Veale]()

The objective is to solve the problem for [Level Up Works](https://www.levelupworks.com), an education provider to teach kid from age 7-12 years old coding

The problems are identify through user interview (teacher) and business case scenario

- [L5 Mission 6 - Instructions for Learners.pdf]()
- [L5 Mission 6 Business Scenario.docx]()

### Prerequisites

- Install Docker for your system [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

### Installation

1. Clone this git to your prefer folder

   ```
   git clone https://github.com/danielminhnguyen/levelUpWorks.git
   ```

2. Navigate to the folder and build Docker

   ```
   cd levelUpWorks
   docker-compose build
   ```

3. Run the images in detached mode
   ```
   docker-compose up -d
   ```

You should be able to see it running in Docker

[![Product Name Screen Shot][docker-screenshot]]()

<!-- USAGE EXAMPLES -->

## Usage

1. Navigate to [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to view the front end
2. Navigate to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) to modify the SQL through phpMyAdmin. A prebuilt database is located on db/levelUpWorks.sql. The default username/password is root/root
3. Start coding and it should reflects change after saving.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Daniel Nguyen - [Email](minhnguyen68@hotmail.com)

Project Link: [https://github.com/danielminhnguyen/levelUpWorks](https://github.com/danielminhnguyen/levelUpWorks)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/danielminhnguyen
[docker-screenshot]: images/docker-image.png
