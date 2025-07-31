# Project-Sem-7

## Problem Statement
_Defines the problem_

Currently, our university and many other institutes use WhatsApp and Telegram Groups as a means of conveying relevant information between students and staff members.

This system leads to one or many of the following issues listed below:
 * Manually adding members in groups which leads to errors where not everyone might be added
 * Admins of groups (staff members) sending messages regarding important academic or non-academic events
 * Multiple duplicates of a message in groups sent by multiple faculty members when forwarding
 * Important messages being spread across multiple groups/platforms
 * In continuation of the above point, students can use this opportunity to spread misinformation regarding events

## Proposed Solution
_States the solution and how we can get to it_

We should make a platform that provides a single point of communication between students and faculty that allows for automation in sending/receiving messages and can be moderated to prevent misinformation.

### User Roles and Responsibilities
_Defines the different roles used/planned for this project_
 * **Admin** _(OPTIONAL)_
   * Overall monitoring and troubleshooting
   * Implementing changes
   * Content Moderation
 
 * **Teacher/Professor/Staff**
   * Posting Information (ex - notices)
   * Uploading Progress metrics (ex - Number of experiment that was completed in a practical lab)
   * Content moderation
   * Approving events
 
 * **Student**
   * Posting academic information or details related to events

### User Stories
_Describes what a user should be able to do in our application_

 * Users should be able to log in with their college id.
 * Users should be able to authorize themselves using OTP.
 * Users should be able to access data based on their access level.
 * Users should be able to post/filter content based on department, section, etc.
 * Users should be able to upload poster images/PDFs for event/notice posts.
 * Faculty/Admins should be able to moderate data (Suggest changes or block posts completely).
 * Students posting data must first be visible to faculty/admins for approval before being forwarded to others.
 * Users should be able to upload Excel sheets for viewing as well as sending automatic notifications to relevant members.
 * Users should be able to tag relevant members in posts for notifications.

## Minimal Viable Product (MVP)
_Defines the minimum required features for the application to be considered as prototype or any version_

### Version 1
MVP must possess the following features:
 * Login for Faculty and Students
 * Post creation
 * Post Moderation (Blocking of post only)

These features are the core features required to implement the idea and hence, only these will be implemented in version 1.0 of the product.

#### Data Model
_Defines the Entity-Relationship model for this version_

 * **Entities**
   * **User**
     * Username                     String
     * Password                     String
     * College_Id                   String
     * Email (Optional)             String
     * College Email (Optional)     String
   * **Post**
     * Title                        String
     * Content                      String
     * Upload_Date                  Date
     * Author                       User

User _(entity)_ has a one-to-many relationship with Post _(entity)_

## Future Scope
_Describes what we plan to do with this project in the future, used to check if my current decisions would impact the future outcomes_

We want the project to be available to use for thousands students and staff members. To make it scalable and robust, we would need load balancers in different parts of the architecture to remove any possible bottlenecks. We can also employ auto-scaling to scale resources cost efficiently.<br>
We also want it to be a mobile app in the future to allow for ease-of-access.<br>
With these characteristics in mind, we can move forward towards defining the architecture and tech-stack of the project.

## Architecture of the Project

We will use a 3-tier architecture consisting of:
 * Frontend
   * Interactable by user
   * Contains non-critical business logic
 * Backend
   * Contains critical business logic
   * Interacts with frontend and database
 * Database
   * Stores data about users, posts, etc.

Using this architecture we can add load balancers between frontend and backend layer, as well as backend and database layer.<br>
We can also use auto-scaling features on the backend and database layer to make it more responsive.

## Choosing my Tech Stack
 * We will be using React in frontend for faster response times and rendering.
 * We will use Node.js in backend and MongoDB for database because they are versatile and easy to work with.


 --vaibhav