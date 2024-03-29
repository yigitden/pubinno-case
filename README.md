# Pubinno React Case
    Used json-server for api. You can change the port and api url from src/service/Api.js
    This App is responsive designed with Mui.
    Every Mui component made custom component for this app.
   
## Content

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Previews](#previews) 
- [Mobile](#mobile) 

## Technologies Used

- ReactJS 
- Axios
- Json-server
- Mui

## Installation

- First, clone the project:

```sh
git clone https://github.com/yigitden/pubinno-case.git
```

- Then, start the project on localhost:

```bash
# install dependencies with npm
npm install
# or install dependencies with yarn
yarn
```

- To set json-server:

```bash
npx json-server --watch data/data.json --port 3001
```

You can choose another port for json server. App will work correctly after you changed your port and api url from src/service/Api.js
It set up on 3001 port as default

- To start:

```bash
npm start
```
<br>
<br>

# Previews
 

## App

![App](previews/app.gif)

## Main Page

![Main Page](previews/main_page.png)

## Main Page after Added Data
![Main Page after Added Data](previews/snackbar_main_page.png) 

## Add Modal

![Add Modal](previews/add_modal.png)

## Add Modal Error

![Add Modal Error](previews/add_modal_error.png)

## Edit - Delete Modal

![Edit - Delete Modal](previews/edit_delete_modal.png)

# Mobile
 

## Add Page

![Add Page](previews/mobile_add_page.png)

## Main Page Horizontal

![Main Page Horizontal](previews/mobile_main_page_horizontal.png)

## Main Page Vertical
![Main Page Vertical](previews/mobile_main_page_vertical.png) 