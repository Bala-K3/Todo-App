const mongoose =  require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String, 
    description: String,
    status: {
        type: String,
        enum: ['in-progress', 'completed'],
        default: "in-progress"
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    dueDate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    sharedWith: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model("Task", taskSchema);