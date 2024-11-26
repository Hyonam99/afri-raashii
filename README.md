# Afri-Raashii

Afri-Raashii is an online african grocery store. Afri means African and Raashii comes from the Oromo language, spoken in Ethiopia and parts of Kenya, meaning Grocery.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Resources](#resources)

## Features

- Authentication: Users can optionally login to enjoy more benefits and logout (simulated with local storage only, no backend service connected).
- Cart: Users can add and remove items in their cart.
- Admin: An Admin section to support adding, deleting and updating products.
- Payment: Users can make payment directly from the web app.


## Technologies Used

- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [React.js](https://reactjs.org/)
- **Routing**: [React-router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Mock API service**: [Mock API](https://mockapi.io/) for simulating backend CRUD services for the products
- **Payment service**: Paypal with [React-paypal-js](https://www.npmjs.com/package/@paypal/react-paypal-js)
- **Other technologies used**:
	[React-icons](https://react-icons.github.io/react-icons/)
	[React-spinners](https://www.npmjs.com/package/react-spinners)
	[React-query](https://react-query-v3.tanstack.com/)
	[Axios](https://axios-http.com/)


## Installation

To get a local copy up and running follow these simple steps.

1. Clone the repo
```bash
# clone with https (preferred)
git clone https://github.com/Hyonam99/afri-raashii.git

# or clone with ssh
git clone git@github.com:Hyonam99/afri-raashii.git
```

2. Navigate to the project directory
```bash
cd afri-raashii
```

3. Install the required dependencies
```bash
npm install
```

4. Run the application
```bash
npm run dev
# application opens up on http://localhost:2024/
```


## Usage

1. Admin Create, Edit and Delete products
- navigate to the login page (/login) and login with the admin credentials: 

- email: raashiadmin@gmail.com
- password: Afriadmin@123
- name: Admin

- navigate to the admin dashboard (/admin) and perform CRUD operations on products.
- to add a product image, make sure it is an URL. Check the [Resources](#resources) section to see a list of free image resources.

2. User Add and Remove items from cart
- navigate to the home page (/) or the products page (/products) and add products to cart.
- navigate to the cart page (/cart) by clicking on the basket icon on the navigation bar and remove items from the cart or increase items in the cart.

3. User Make payment
- navigate to the home page (/) or the products page (/products) and add items to cart
- navigate to the cart page (/cart) and proceed to checkout by clicking on the "complete order" button
- a modal opens up with two Paypal payment options, complete the payment using any of the options.
- for testing purposes, you can use the following test credentials to login to a paypal account and make payment:

- email: sb-bo6jj20908451@personal.example.com
- password: 5{S=A?bE


## Deployment
- this web app is hosted on vercel
- live webapp URL: [afri-raashii-app](https://afri-raashii.vercel.app/)


## Resources

1. Image Resources
The Image URLS below are categorized based on the products categories available in the webapp.
To create a new product choose an Image based on the product category.

- **Roots and Shrubs** 
- https://source.unsplash.com/1600x900/?electronics

2. Sample Data to create products

### Snacks
| **Item Name**       | **Price (per pack)** | **Category** |
|---------------------|----------------------|--------------|
| Potato Chips        | $2                   | Snacks       |
| Granola Bars        | $5                   | Snacks       |

### Vegetables
| **Item Name**       | **Price (per lb)** | **Category**    |
|---------------------|--------------------|-----------------|
| Carrots             | $1                 | Vegetables      |
| Spinach (Fresh)     | $3                 | Vegetables      |

### Roots and Shrubs
| **Item Name**       | **Price (per lb)**  | **Category**       |
|---------------------|---------------------|--------------------|
| Ginger Root         | $3                  | Roots and Shrubs   |
| Garlic (Bulbs)      | $2                  | Roots and Shrubs   |


Thank you for taking time to explore this project! I hope you find the details useful. If you have any questions, suggestions, or feedback, please don't hesitate to reach out.

Cheers!
