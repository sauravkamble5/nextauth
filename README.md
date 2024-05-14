                     
<h1 align="center" style="font-weight: bold;">NextAuth 💻</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#routes">API Endpoints</a>
<a href="#colab">Collaborators</a>
<a href="#contribute">Contribute</a> 
</p>


<p align="center">NextAuth is a project aimed at providing authentication and user management functionality for Next.js applications. It includes features such as user sign-up, login, profile management, email verification, and more. This project uses technologies like Next.js, MongoDB, and JWT for authentication.</p>


<p align="center">
<a href="https://nextauth-5778suyn5-iamsauravkambles-projects.vercel.app/login">📱 Visit this Project</a>
</p>
 
<h2 id="technologies">💻 Technologies</h2>

 **Next.js**: Framework for building server-rendered and statically generated React applications.
- **MongoDB**: NoSQL database for storing and managing application data.
- **JWT (JSON Web Tokens)**: Standard for securely transmitting information between parties as a JSON object.
- **bcryptjs**: Library for hashing passwords securely.
- **Axios**: Promise-based HTTP client for making HTTP requests.
- **Nodemailer**: Module for sending emails with Node.js.
- **React**: JavaScript library for building user interfaces.
- **React Hot Toast**: Toast notification library for React applications.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Tailwind CSS**: Utility-first CSS framework for building custom user interfaces.
 
<h2 id="started">🚀 Getting started</h2>

To get started with NextAuth, follow these steps:

 
<h3>Prerequisites</h3>

Before you begin, ensure you have the following prerequisites installed and configured on your system:

1. **Node.js and npm**: Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the [official Node.js website](https://nodejs.org/).

2. **MongoDB**: NextAuth uses MongoDB as its database. Make sure you have MongoDB installed and running on your system. You can download and install MongoDB from the [official MongoDB website](https://www.mongodb.com/).

3. **Environment Variables**: Create a `.env` file in the root directory of the project and define the following environment variables:

 
<h3>Cloning</h3>


```bash
git clone https://github.com/sauravkamble5/nextauth.git
```
 
<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env`

MONGO_URI=your_mongodb_connection_string

TOKEN_SECRET=your_jwt_secret 

DOMAIN=your_domain_url
 
<h3>Starting</h3>

How to start your project

```bash
cd nextauth
npm run dev
```
 
<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
<kbd>POST/signup</kbd>   |   Allows new users to sign up by providing their credentials.
<kbd>POST/login</kbd>     |  Allows users to log in by providing their email and password.
 <kbd>POST/verifyemail</kbd>     |  Verifies the user's email address using a verification token.
 <kbd>POST/me</kbd>   |   Retrieves details of the currently authenticated user.
 <kbd>GET/logout</kbd>     |  Logs out the currently authenticated user.

<h3 id="get-auth-detail">POST/signup</h3>

**REQUEST**
```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "password123"
}
```

**RESPONSE**
```json
{
 "username": "example_user",
  "email": "user@example.com",  "password": "hashed password.",
  "isVerified": false,
  "isAdmin": false,
  "_id": "mongo id"
}

```

<h3 id="post-auth-detail">POST /login</h3>

**REQUEST**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**RESPONSE**
```json
{
  "message": "Logged in successfully",
  "success": true
}
```
<h3 id="post-auth-detail">POST /verifyemail</h3>

**REQUEST**
```json
{
  "token": "verification_token"
}
```

**RESPONSE**
```json
{
  "message": "Email verified successfully",
  "success": true
}
```
<h3 id="post-auth-detail">POST /me</h3>


**RESPONSE**
```json
{
  "message": "User found",
  "data": {
    "username": "example_user",
    "email": "user@example.com"
  }
}
```
<h3 id="post-auth-detail">GET/logout</h3>


**RESPONSE**
```json
{
  "message": "Logout successfully",
  "success": true
}
```
 
<h2 id="contribute">📫 Contribute</h2>

Here you will explain how other developers can contribute to your project. For example, explaining how can create their branches, which patterns to follow and how to open an pull request 

1.  Fork the repository.
2. Create a new branch: git checkout -b feature.
3. Make your changes and commit them: git commit - 
     m 'Add feature'.
4. Push to the branch: git push origin feature.
5. Submit a pull request.

<h2 id="contribute"> Screenshots</h2>

![Screenshot 2024-05-14 221555](https://github.com/sauravkamble5/nextauth/assets/99634720/9c1902f3-9803-4894-bf52-577f9cea580d)

![Screenshot 2024-05-14 222013](https://github.com/sauravkamble5/nextauth/assets/99634720/75a32e41-30f4-4813-99a7-b86ba07fe088)

![Screenshot 2024-05-14 222145](https://github.com/sauravkamble5/nextauth/assets/99634720/edaede6b-d95c-4914-88de-4879846fd8a9)


