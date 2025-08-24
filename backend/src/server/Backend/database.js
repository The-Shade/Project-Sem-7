require('dotenv').config({path: "../../../../.env"});
const { MongoClient, ObjectId } = require('mongodb');

class Database {
    client = new MongoClient(process.env.MONGODB_URI);
    dbName = 'InfoManagement';
    collectionName = 'im_posts';

    async connect() {
        try {
            await this.client.connect();
        } catch (error) {
            return {status: 500, error: 'Database connection failed'};
        }
    }

    async add_post(post) {
        try {
            const result =
                await this.client.db(this.dbName).collection(this.collectionName).insertOne(post);
            post._id = result.insertedId;
            return post;
        } catch (error) {
            return {status: 500, error: 'Failed to add post'};
        }
    }

    async delete_post(post_id) {
        try {
            const result = await this.client.db(this.dbName).collection(this.collectionName).deleteOne({_id: post_id});
            if (result.deletedCount === 1) {
                return {status: 200, message: 'Deleted 1 post'};
            }
        } catch (error) {
            return {status: 500, error: 'Failed to delete post'};
        }
    }

    async update_post(post_id, post) {
        try {
            const result = await this.client.db(this.dbName).collection(this.collectionName).updateOne({_id: post_id}, {$set: post});
            if (result.modifiedCount === 1) {
                return {status: 200, message: 'Updated 1 post', post: await this.get_post(post_id)};
            }
        } catch (error) {
            return {status: 500, error: 'Failed to update post'};
        }
    }

    async get_post(post_id) {
        try {
            return await this.client.db(this.dbName).collection(this.collectionName).findOne({_id: post_id});
        } catch (error) {
            return {status: 500, error: 'Failed to fetch post'};
        }
    }

    async get_all_posts() {
        try {
            return await this.client.db(this.dbName).collection(this.collectionName).find().toArray();
        } catch (error) {
            return {status: 500, error: 'Failed to fetch posts'};
        }
    }

    // Test
    async main() {
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