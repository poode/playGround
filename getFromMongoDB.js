const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-exercises', { useNewUrlParser: true });

mongoose.Promise = global.Promise;
                
const db = mongoose.connection;
        
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
    console.log('Conntected To Mongo Database');
});

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = db.model('Course', courseSchema);

async function getbackEnd() {
    const courseList = await Course
        .find({ isPublished: true, tags: 'backend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 });
        
        console.log(courseList);
}

// getbackEnd();


async function getAll() {
    const courseList = await Course
        .find({ isPublished: true, tags: {$in: ['backend', 'frontend']} })
        .sort({ price: -1 })
        .select({ name: 1, author: 1, price: 1 });
        
        console.log(courseList);
}

// getAll();

async function getByPrice() {
    const courseList = await Course
        .find({ isPublished: true })
        .or([
            { name: /.*by.*/i },
            { price: { $gte: 15 } }
        ])
        .sort({ price: -1 })
        .select({ name: 1, author: 1 , price: 1});
        
        console.log(courseList);
}

getByPrice();
