# Capstone-Cocktail-App

For my final project I am planning to use React and Node as the tech stack.  This project will be an evenly focused full-stack application as the backend side of the database is going to be just as important as the user interface side to make it friendly enough for people of all skill levels.  Ideally this will be a mobile application as more people would use it on their phones, in the moment when making a cocktail at home or looking them up at a party or a friend's house.  My project will be designed to help people not only track the various spirits they have in their home bar but also be able to provide recommendations to the user based on ingredients, type of spirit or category that would be used for various cocktails. This allows even the most basic of home “mixologists” to be able to have fun with cocktails and not be stuck on a vodka soda.  The demographic for this app will mostly be spirit enthusiasts and those who enjoy venturing out and having fun with cocktails, flavors and new types of spirits.  I am planning to use a Cocktail Database API allowing for the user to search cocktails by name, first letter, ingredients, alcohol used, category, glassware and ID. This API is home to many cocktails ranging from the simple and basic everyday cocktails to fun and existing!

The database schema for the API I am using for this project consists predominantly of SQL data return in a JSON format.  The database contains nested arrays that provide various information depending on what endpoint is being returned to the user. Some of the data is the same for many of the endpoints considering the name, image and photo for a specific cocktail will be the same for the various endpoints being returned.  One issue that I could potentially run into with this API is the fact that there are 2 versions, a free version and a paid version of the API.  One issue that can come with that is trying to access an endpoint that is not part of the free version of the API and thus having to change course on what I am potentially able to build into the app for filtering the database.  The only kind of sensitive information that will need to be stored is the user login info for the various users that will be using the application. The application will be able to search cocktails by name, ingredient, alcoholic vs. non-alcoholic, category, glassware;  list all cocktails by the first letter, search ingredients by name, lookup cocktail details and ingredients by ID, lookup random cocktails, list popular cocktails.

Below is a general outline of what the user flow looks like for my cocktail app:

1. Homepage / Landing Page:
   - Upon opening the app, users are greeted with the homepage or landing page.
   - The homepage may feature a search bar, navigation menu, featured cocktails, or promotional content.

2. Browsing Cocktails:
   - Users can browse through a catalog of available cocktails.
   - They may navigate through categories such as "Popular Cocktails," "Featured Cocktails," "Alphabetical Order," or "By Ingredients."

3. Searching for Cocktails:
   - Users can search for specific cocktails using keywords, ingredients, or categories.
   - They enter their search query into the search bar and receive relevant search results.

4. Viewing Cocktail Details:
   - When a user selects a specific cocktail from the list or search results, they are taken to a detailed view of that cocktail.
   - The detailed view includes information such as the cocktail's name, ingredients, instructions, serving glassware, garnishes, and user ratings.

5. Saving or Favoriting Cocktails:
   - Users have the option to save or favorite cocktails they like for future reference.
   - They may click on a "Save" or "Favorite" button on the cocktail detail page.

6. Creating Custom Cocktails:
   - Users can create their own custom cocktails by selecting ingredients and specifying quantities.
   - They may access a "Create Cocktail" feature from the navigation menu or homepage.
   - The app guides them through the process of selecting ingredients, specifying quantities, and providing instructions.

8. User Profile:
   - Users have a profile section where they can manage their saved or favorited cocktails, view their activity history, and adjust app settings.

10. Logout:
   - Users can log out of their account or session if desired.
   - They may access a "Logout" option from the navigation menu or settings.

My cocktail app is a comprehensive platform designed to elevate my cocktail experience beyond just a basic recipe repository. Here's what sets us apart:

1. Rich Cocktail Database: My app boasts an extensive database of cocktail recipes sourced from renowned mixologists and cocktail enthusiasts worldwide. Each recipe is meticulously curated and includes detailed instructions, ingredient lists, serving suggestions, and garnish ideas.

2. Interactive Cocktail Exploration: Users can immerse themselves in the world of mixology through an interactive browsing experience. They can discover new cocktails based on categories such as classic cocktails, seasonal favorites, trending mixes, or personalized recommendations tailored to their taste preferences.

3. Advanced Search Functionality: My app offers robust search functionality, allowing users to find cocktails based on specific ingredients, flavor profiles, or desired attributes. Whether you're craving a refreshing citrus drink or a smoky whiskey concoction, my app helps you find the perfect recipe effortlessly.

4. Custom Cocktail Creation: Elevating the experience beyond just browsing, my app empowers users to become cocktail creators themselves. With my custom cocktail creation feature, users can experiment with various ingredients, proportions, and flavors to craft their signature drinks.

Stretch Goals:

While my app already offers a robust set of features, we have ambitious plans for future enhancements and expansions. My stretch goals include:

1. Cocktail Pairing Recommendations Developing advanced algorithms to offer cocktail pairing recommendations for different occasions, cuisines, and flavor profiles, enhancing users' overall dining and entertaining experiences.

2. Premium Membership Features: Introducing premium membership tiers with exclusive features such as ad-free browsing, early access to new recipes, VIP events, and discounts on cocktail-related products and experiences.

3. Social Sharing and Community Interaction: Our app fosters a vibrant community of cocktail enthusiasts where users can share their favorite recipes, tips, and experiences. Social sharing features allow users to showcase their creations, engage with other users, and discover new inspiration from the community.
4. Personalized Recommendations: Leveraging machine learning algorithms, our app offers personalized cocktail recommendations based on users' preferences, past interactions, and feedback. Whether you're a whiskey aficionado, a tequila lover, or a fan of fruity cocktails, our app tailors recommendations to suit your taste profile.
By highlighting these features and stretch goals, I aim to position my cocktail app as the ultimate destination for cocktail enthusiasts, offering a dynamic blend of education, exploration, and community engagement in the world of mixology.
