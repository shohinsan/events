# LifeEvents
Portfolio Website

# Enable Git Hoosk On .git Location
git config --global core.hookspath .githooks

app — app-wide settings, styles and providers.

pages/routes — compositional layer to construct full pages from entities, features and widgets.

widgets — compositional layer to combine entities and features into meaningful blocks. (e.g. IssuesList, UserProfile).

features — user interactions, actions that bring business value to the user. (e.g. SendComment, AddToCart, UsersSearch).

entities — business entities. (e.g., User, Product, Order).

shared — reusable functionality, detached from the specifics of the project/business. (e.g. UIKit, libs, API)/.