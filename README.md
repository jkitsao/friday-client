# About the project
web project that I developed to create, manage, and display content for my personal website or blog. This headless CMS architecture allows me to separate the content management system from the front end, giving me the flexibility to use different front-end technologies while maintaining a centralized data management system.

The backend of the headless CMS is built using Node.js, which serves as the data storage and management system. I used a lightweight database such as MongoDB to store content data, making it easy to organize and retrieve data efficiently. The backend also provides a simple RESTful API to handle content CRUD (Create, Read, Update, Delete) operations.

On the front end, I used React as the JavaScript framework, allowing me to create a dynamic and responsive user interface. To fetch and manage data from the backend API, I integrated the SWR (Stale-While-Revalidate) library. SWR automatically handles data caching, revalidation, and stale data updates, ensuring that content updates are reflected in real time without compromising performance.

As part of my personal CMS, I integrated with the Unsplash API, which provides access to a vast collection of high-quality images. This integration allows me to easily search for and select images to use as featured images for my blog posts or other content.

The CMS also includes a user-friendly content editor, allowing me to create and format blog posts or other types of content with ease. The editor supports basic text formatting, image embedding, and other essential content creation features.

For the front end, I created components to display different types of content, such as blog posts, images, and other media. The components are designed to be modular and reusable, enabling me to easily add new content types or update the display layout as needed.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
