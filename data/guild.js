const schema = mongoose.Schema({
    guildID: String,
    ///user:String,
    prefix: { type: String, default: "Bo"},
    
});
module.exports = mongoose.model("Guild", schema)
