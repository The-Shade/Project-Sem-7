require('dotenv').config({path: "../../../../.env"});
const { MongoClient, ObjectId } = require('mongodb');

class Database {
    client = new MongoClient(process.env.MONGODB_URI);
    dbName = 'InfoManagement';
    postcollection = 'im_posts';
    usercollection = 'im_users';
    
    async connect() {
        try {
            await this.client.connect();
        } catch (error) {
            return {status: 500, error: 'Database connection failed'};
        }
    }

    // post function starts from here
    
    async add_post(post) {
        try {
            const result =
                await this.client.db(this.dbName).collection(this.postcollection).insertOne(post);
            post._id = result.insertedId;
            return post;
        } catch (error) {
            return {status: 500, error: 'Failed to add post'};
        }
    }

    async delete_post(post_id) {
        try {
            const result = await this.client.db(this.dbName).collection(this.postcollection).deleteOne({_id: post_id});
            if (result.deletedCount === 1) {
                return {status: 200, message: 'Deleted 1 post'};
            }
        } catch (error) {
            return {status: 500, error: 'Failed to delete post'};
        }
    }

    async update_post(post_id, post) {
        try {
            const result = await this.client.db(this.dbName).collection(this.postcollection).updateOne({_id: post_id}, {$set: post});
            if (result.modifiedCount === 1) {
                return {status: 200, message: 'Updated 1 post', post: await this.get_post(post_id)};
            }
        } catch (error) {
            return {status: 500, error: 'Failed to update post'};
        }
    }

    async get_post(post_id) {
        try {
            return await this.client.db(this.dbName).collection(this.postcollection).findOne({_id: post_id});
        } catch (error) {
            return {status: 500, error: 'Failed to fetch post'};
        }
    }

    async get_all_posts() {
        try {
            return await this.client.db(this.dbName).collection(this.postcollection).find().toArray();
        } catch (error) {
            return {status: 500, error: 'Failed to fetch posts'};
        }
    }

    // user functions starts from here

    async add_user(user) {
        try {
            const result =
                await this.client.db(this.dbName).collection(this.usercollection).insertOne(user);
            user._id = result.insertedId;
            return user;
        } catch (error) {
            return {status: 500, error: 'Failed to create user'};
        }
    }

    async get_user(user_id) {
        try {
            return await this.client.db(this.dbName).collection(this.usercollection).findOne({_id: user_id});
        } catch (error) {   
            return {status: 500, error: 'Failed to fetch user'};
        }
    }

    async get_all_users(){
        try{
            return await this.client.db(this.dbName).collection(this.usercollection).find().toArray();
        }   catch (error){
            return {status: 500, error: 'failed to get all users'};
        }
    }

    async delete_user(user_id){
        try{
            const result = await this.client.db(this.dbName).collection(this.usercollection).deleteOne({_id: user_id});
            if(result.deletedCount === 1)  {
                return {status: 200, message: 'Deleted 1 user'};
            }
        }    catch (error){
            return{status: 500, message: 'Failed to delete user'};
        }
    }

    async update_user(user_id, user){
        try{
            const result = await this.client.db(this.dbName).collection(this.usercollection).updateOne(
                {_id: user_id}, 
                {$set: user}
            );
            if(result.modifiedCount === 1) {
                return {status: 200, message: 'Updated 1 user', user: await this.get_user(user_id)};
            }
        } catch(error){
            return {status: 500, message: 'Failed to update user'};
        }
    }


    // test function
    async main() {
        // Test user functions
        console.log('\n🧪 Testing User Functions:');
        const newUser = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'hashedPassword123'
        };

        const addedUser = await this.add_user(newUser);
        console.log('✅ Added User:', addedUser);

        const fetchedUser = await this.get_user(addedUser._id);
        console.log('👤 Fetched User:', fetchedUser);

        const updatedUser = await this.update_user(addedUser._id, {
            name: 'Updated User',
            email: 'updated@example.com'
        });
        console.log('✏️ Updated User:', updatedUser);

        const allUsers = await this.get_all_users();
        console.log('👥 All Users:', allUsers);

        const deleteResult = await this.delete_user(addedUser._id);
        console.log('🗑️ Delete Result:', deleteResult);

        // Original post tests
        console.log('\n🧪 Testing Post Functions:');
        const newPost = {title: 'Test Post', content: 'This is a sample post'};
        const added = await add_post(newPost);
        console.log('✅ Added Post:', added);

        const fetched = await get_post(added._id);
        console.log('📄 Fetched Post:', fetched);

        const updated = await update_post(added._id, {title: 'Updated Title', content: 'Updated content'});
        console.log('✏️ Updated Post:', updated);

        const all = await get_all_posts();
        console.log('📚 All Posts:', all);

        await delete_post(added._id);
        console.log('🗑️ Deleted Post');
    }
}

module.exports = Database;