module.exports = function (sequelize, DataTypes) {
    var Gig = sequelize.define("Gig", {

        gigName: DataTypes.STRING,
        genre: DataTypes.STRING,
        street_address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        phone: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        date: DataTypes.STRING,
        isBooked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    return Gig;
}