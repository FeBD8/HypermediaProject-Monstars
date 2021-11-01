# HypermediaProject-Monstars

*Hypermedia Applications course project at Politecnico di Milano*  
WebPage available at: https://hypermedia-monstars.herokuapp.com/

## General Overview
Design and Development of a website for an ICT company.  
The website contains these pages:
- HomePage
- Areas
- Products
- People
- About
- Contact

In addition, a small experimental chatbot has been added for navigating between pages.  
The application integrates the Server Side Rendering feature.

The Design document is available here: [Design_Report.pdf](https://github.com/lucacolombo97/Hypermedia-Monstars/files/7449184/Design_Report.pdf)  
The Chatbot Design document is available here: [Chatbot.pdf](https://github.com/lucacolombo97/Hypermedia-Monstars/files/7449186/Chatbot.pdf)

**Technology:**  
The project has been developed using the Nuxt.js framework.  

**Other Technologies:**  
Server Technology: NodeJS  
DataBase Technology: PostgreSQL

## Components
- Intro:
  - IntroText.vue: Component used for the introductory text in the various pages. It is composed of a title or a logo, a subtitle and a description.
  - IntroVideo.vue: Component for the introduction video of all the main pages. It contains a video, the location that indicates the current page, an intro-text component for the indroductory text and an arrow button that bring the user to the main content of the page.
  - Location.vue: Component that computes the current location of the user starting from the URL. When it is used into dynamic pages, it has an attribute name in order to specify the actual name of the dynamic content of the page.
- List:
  - List.vue: Component of an item list: it is composed of a series of listcard. It is used inside the dynamic pages where the items are retrieved from the DB.
  - ListCard.vue: Component used in a generic description list: it contains an image, a paragraph and a button. The number is used in large screen devices to display alternatively the image and the text between different rows.
- Navigation:
  - BackButton.vue: Component for the back button. It is used inside kind of topic pages and it brings the user back to the main group page. It uses the navbutton component.
  - NavBarLarge.vue: Component of the navigation bar on large screen devices. It is composed of navigation buttons and dropdown menus based on the menuOptions defined inside the default layout. If the dropdown props is true, the content of the dropdown menu is shown only on hover like in the header while if it is false the content is always visible like in the footer.
  - NavBarSmall.vue: Component of the navigation bar on small screen devices. It is composed of navigation buttons displayed properly for devices with small screen. It is used both in the header and in the footer.
  - NavButton.vue: Navigation button component. It is used for standardize the style of the buttons inside the whole website.
  - NavCard.vue: Component of the card for the dropdown navigation link, with image and name. It is used for the areas and their shortcut image.
  - NavDropdown.vue: Component of the dropdown content used in the navigation bar for large screen devices. It is composed of navcards if the dropdown props is set to true like in the header where the dropdown menu is shown only on hover, otherwise it is composed of navbuttons like in the footer. In the website is used for the specific Areas.
  - NavLabel.vue: Navigation label used as landmark for navigation in the header, the footer and for the transition links. It is used to standardize the style of the link labels inside the whole website.
  - TransitionLink.vue: Component for the transition links between dynamic pages. It is composed of a title and a single navbutton if the specific topic is associated with a hasOne relationship or a list of navbuttons if the specific topic is associated with a hasMany relationship inside the DB.
- Table:
  - PeopleTable.vue: Component for the table of people. It is used inside the people page and it is composed of a series of person cards. It has the props peoplePerRow that is used to specify how many people are shown for each single row.
  - PersonCard.vue: Component of the card for the people page. It contains an image, the full name and the role of the person. It is used inside the people table for each person retrieved from the DB.
- Chat.vue: Component of the chatbot. It has an icon image that is the button used in order to open and close it, an image for the notification and the chat window that displays all the messages that are retrieved from the store.
- Paragraph.vue: Paragraph component composed by a title or a logo image, a subtitle and a description. It is used as the text part inside the listcard and in pages.
- SectionTitle.vue: Section title component used to introduce a new section inside the different pages. It is used for standardize the style of the titles inside the whole website.
- Slideshhow.vue: Slideshow component used inside the products in order to show the customers. It automatically changes its content after a timeout is fired.
- ContactForm.vue: Contact form container used inside the contact page. It contains some input fields and a fake button for the submission that only opens an alert.
- TheFooter.vue: The footer component of the website. It is divided into 3 main sections: the logo section, the navbar section and the socials section.
- TheHeader.vue: Header of the page of the company, with logo and the navigation bar component. It contains both the navbar for large and small screen devices.
- TheLogo.vue: Standardized logo of the company with the link to the home page.
- TheSocials.vue: It contains the socials buttons and links of the company.

## Plugins
- Store: It is used for the chatbot messages. It contains an array that stores all the messages coming from the chatbot and written by the user and a newMessage flag used for notifying the user if a new message is arrived.
- Route: It is used inside the mmcc in order to let the chatbot change the current route when it redirects the user to the contact page and the contact form.
- Mixins: It is used for the chatbot integration.
- Plugin:
  - Helpers.js: Personal plugin file with some useful functions that are used by several components inside the website. It implements the methods to animate the components, the methods to scrolling the page and methods for opening and closing the navbar on small screen devices.
