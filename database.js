const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb+srv://mvaibhav5874:vaibhav5874@sem-7.1vdwlbo.mongodb.net/?retryWrites=true&w=majority&appName=sem-7';
const client = new MongoClient(uri);
const dbName = 'InfoMangement';
const collectionName = 'im_posts';

async function connect() {
    try {
        await client.connect();
        return client.db(dbName).collection(collectionName);
    } catch (error) {
        return { status: 500, error: 'Database connection failed' };
    }
}

async function add_post(post) {
    try {
        const collection = await connect();
        const result = await collection.insertOne(post);
        return { _id: result.insertedId, ...post };
    } catch (error) {
        return { status: 500, error: 'Failed to add post' };
    }
}

async function delete_post(post_id) {
    try {
        const collection = await connect();
        await collection.deleteOne({ _id: new ObjectId(post_id) });
        return null;
    } catch (error) {
        return { status: 500, error: 'Failed to delete post' };
    }
}

async function update_post(post_id, post) {
    try {
        const collection = await connect();
        await collection.updateOne({ _id: new ObjectId(post_id) }, { $set: post });
        return await get_post(post_id);
    } catch (error) {
        return { status: 500, error: 'Failed to update post' };
    }
}

async function get_post(post_id) {
    try {
        const collection = await connect();
        return await collection.findOne({ _id: new ObjectId(post_id) });
    } catch (error) {
        return { status: 500, error: 'Failed to fetch post' };
    }
}

async function get_all_posts() {
    try {
        const collection = await connect();
        return await collection.find().toArray();
    } catch (error) {
        return { status: 500, error: 'Failed to fetch posts' };
    }
}

// Test
async function main() {
    const newPost = { title: 'Test Post', content: 'This is a sample post' };
    const added = await add_post(newPost);
    console.log('✅ Added Post:', added);

    const fetched = await get_post(added._id);
    console.log('📄 Fetched Post:', fetched);

    const updated = await update_post(added._id, { title: 'Updated Title', content: 'Updated content' });
    console.log('✏️ Updated Post:', updated);

    const all = await get_all_posts();
    console.log('📚 All Posts:', all);

    await delete_post(added._id);
    console.log('🗑️ Deleted Post');
}
