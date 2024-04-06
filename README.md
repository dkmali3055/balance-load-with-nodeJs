<p align="center">
    <img src="https://www.freeiconspng.com/uploads/load-balancer-icon-6.png" width="99" alt="Load Balancer Icon Svg" />
</p>
<h1 align="center">Load Balancer for NodeJS Servers</h1>
<p align="center">
  <em>Efficient Node.js Load Balancer: Distributing Traffic with Health Checks</em>
</p>

<!-- TABLE OF CONTENTS -->
<!--
<details>
  <summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [👾 Demo](#-demo)
- [🧩 Features](#-features)
- [🗂️ Examples](#️-examples)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Tests](#-tests)
- [📦 Configuration](#️-configuration)
- [🔭 Roadmap](#-roadmap)
- [🧑‍💻 Contributing](#-contributing)
- [🎗 License](#-license)
</details>

-->
---
## 📍 Overview

***Objective***
This repository contains code for a simple load balancer implemented in Node.js.
The load balancer is designed to distribute incoming requests among three backend servers and ensure efficient handling of traffic.
Additionally, it monitors the health of each server and directs requests only to healthy servers.

***Motivation***

Provide developers with a robust and efficient solution for load balancing in Node.js environments.

## 🧩 Features

- **Load Balancing**: Distributes incoming requests evenly among three backend servers.
- **Health Checking**: Regularly checks the health status of each server and routes requests only to healthy servers.

## 🚀 Getting Started

**System Requirements:**

  - NodJs 10.20+
  - Package manager: `NPM`, `YARN`

**Setup**

  - Clone the repository:

> ```sh
> git clone https://github.com/dkmali3055/balance-load-with-nodeJs
> ```

  - Navigate to the project directory:

> ```sh
> cd balance-load-with-nodeJs
> ```

  - Install dependencies

> ```sh
> npm install
> ```

**Usage**

  - Start the backend servers:

> ```sh
> node server_one/server.js
> node server_second/server.js
> node server_third/server.js
> ```

  - Start the load balancer:

> ```sh
> node index.js
> ```

  - Access the application through the load balancer:

> ```sh
> http://localhost:10000/app
> ```

### Health Checking

<p>
The load balancer periodically sends health check requests to each backend server to ensure they are healthy. 
If a server fails to respond or responds with an error, it is marked as unhealthy, and the load balancer stops routing requests to it until it becomes healthy again.
</p>

<!--
### Contributing

<p> Contributions are welcome! If you have any suggestions, 
improvements, or feature requests, feel free to open an issue or create a pull request.
</p>

-->
