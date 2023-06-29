module.exports = (mongoose) => {
    const DepartmentSchema = new mongoose.Schema({
            name: String,
        },
    );
    const Department = mongoose.model("Department", DepartmentSchema);
    return Department;
};
